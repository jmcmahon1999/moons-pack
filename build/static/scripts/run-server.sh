PACK_URL="http://moons-pack.jmcmoon.com"
FORCE=0
NO_UPDATE=0
while [[ $# -gt 0 ]]; do
  case $1 in
    -u|--url)
      PACK_URL="$2"
      shift
      shift
      ;;
    -f|--force)
      FORCE=1
      shift
      ;;
    --no-update)
      NO_UPDATE=1
      shift
      ;;
    -s|--side)
      shift
      shift
      ;;
    *)
      echo "Unknown option $1"
      exit 1
      ;;
  esac
done

tmpdir="./temp"
mkdir $tmpdir

# Get updated pack info.
get_local_pack_info() {
    echo "Getting pack info..."
    PACK_NAME="$(sed -n 's/^name[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' ./pack.toml)"
    PACK_VER="$(sed -n 's/^version[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' ./pack.toml)"
    NF_VER="$(sed -n 's/^neoforge[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' ./pack.toml)"
}

get_remote_pack_info() {

    curl -s -L -f -o "$tmpdir/pack.toml" "$PACK_URL/pack.toml"

    PACK_NAME="$(sed -n 's/^name[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' $tmpdir/pack.toml)"
    PACK_VER_NEW="$(sed -n 's/^version[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' $tmpdir/pack.toml)"
    PACK_MAJOR_NEW=${PACK_VER_NEW%%.*}
    NF_VER_NEW="$(sed -n 's/^neoforge[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' $tmpdir/pack.toml)"

    return 0
}

# Remove old kubejs scripts.
clean_scripts() {
    echo "Cleaning scripts..."
    curl -s -L -o "$tmpdir/index.toml" "$PACK_URL/index.toml"
    grep -Eo 'kubejs[^"]+' "$tmpdir/index.toml" | sort > $tmpdir/tracked.txt
    find "./kubejs" -type f -path '*/moons_pack/*' -print | sed 's|^\./||' | sort > $tmpdir/files.txt
    
    comm -23 $tmpdir/files.txt $tmpdir/tracked.txt > $tmpdir/untracked.txt

    echo "The following files will be removed:"
    echo $( cat $tmpdir/untracked.txt)

    xargs rm -f < $tmpdir/untracked.txt
    rm $tmpdir/tracked.txt
    rm $tmpdir/files.txt
    rm $tmpdir/untracked.txt

    find . -name ".DS_Store" -delete
    # find . -wholename "config/DistantHorizons.toml" -delete
}

clean_mods() {
    echo "Cleaning mods..."
    curl -s -L -o "$tmpdir/index.toml" "$PACK_URL/index.toml"

    find "./mods" -type f -path '*.jar' -print | sed 's|^\./mods/||' | sort > $tmpdir/files.txt
    curl -s -L -o "$tmpdir/tracked.txt" "$PACK_URL/mods/jarfiles.txt"
    
    comm -23 $tmpdir/files.txt $tmpdir/tracked.txt > $tmpdir/untracked.txt

    echo "The following files will be removed:"
    echo $( cat $tmpdir/untracked.txt)

    xargs rm -f < $tmpdir/untracked.txt
    rm $tmpdir/tracked.txt
    rm $tmpdir/untracked.txt
    rm $tmpdir/files.txt
}

clean_logs() {
    find ./logs -type f -name '*.log.gz' -delete
}

write_version() {
    mv -f $tmpdir/pack.toml ./pack.toml
}

cleanup_exit() {
    #rm -rf $tmpdir
    rm -f ./packwiz-installer.jar
    rm -f ./update-client.bat
    exit $1
}

if [[ $NO_UPDATE -eq 0 ]]; then
    get_remote_pack_info

    if [[ -e ./pack.toml ]]; then
        get_local_pack_info
        if [[ -n $PACK_VER_NEW ]]; then
            if [[ -n $PACK_MAJOR ]] && [[ $FORCE -eq 0 ]] && [ "$PACK_MAJOR" != "$PACK_MAJOR_NEW" ]; then
                echo "Warning! This update is a major version change!
$PACK_VER -> $PACK_VER_NEW
Major versions may contain breaking changes which may not be save-game compatible.
Rerun with -f|--force flag to update.
"
            fi
        fi
        if [[ -n "$NF_VER" ]] && [ "$NF_VER_NEW" != "$NF_VER" ]; then
            echo "Required Neoforge version: $NF_VER_NEW.
Current Neoforge version: $NF_VER.
Please update manually update Neoforge version and retry.
"
            cleanup_exit 1
        fi

        clean_scripts
        clean_mods
        clean_logs
    fi

    if [ ! -f packwiz-installer-bootstrap.jar ]; then
        curl -fsSL -o packwiz-installer-bootstrap.jar "https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest/download/packwiz-installer-bootstrap.jar"
    fi

    java -jar packwiz-installer-bootstrap.jar --no-gui --side=server https://moons-pack.jmcmoon.com/pack.toml

    if [ $? -eq 1 ]; then 
        echo "packwiz failed. Exiting."
        cleanup_exit 1
    else
        echo "packwiz succeeded."
        write_version
    fi

fi

rm -rf $tmpdir
rm -f ./packwiz-installer.jar
rm -f ./update-client.bat

# This is the run script for Modrinth Servers. May need to be changed for other server hosting sites.
# java @user_jvm_args.txt @libraries/net/neoforged/neoforge/$NF_VER_NEW/unix_args.txt "$@"