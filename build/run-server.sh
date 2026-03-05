#!/usr/bin/env sh

PACK_URL="http://moons-pack.jmcmoon.com"
FORCE=0
while [[ $# -gt 0 ]]; do
  case $1 in
    -u|--url)
      PACK_URL="$2"
      shift # past argument
      shift # past value
      ;;
    -f|--force)
      FORCE=1
      shift
    *)
      echo "Unknown option $1"
      exit 1
      ;;
  esac
done

tmpdir=$(mktemp -d /tmp/jmcmoon.XXXXXX) || exit 1

# Get updated pack info.
get_local_pack_info() {
    echo "Getting pack info..."
    PACK_VER="$(jq -r '.packVersion' packwiz.json)"
    PACK_MAJOR=${PACK_VER%%.*}
    NF_VER="$(jq -r '.neoforgeVersion' packwiz.json)"
}

get_remote_pack_info() {

    curl -s -L -f -o "$tmpdir/pack.toml" "$PACK_URL/pack.toml"

    PACK_NAME="$(sed -n 's/^name[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' $tmpdir/pack.toml)"
    PACK_VER_NEW="$(sed -n 's/^version[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' $tmpdir/pack.toml)"
    PACK_MAJOR_NEW=${PACK_VER_NEW%%.*}
    NF_VER_NEW="$(sed -n 's/^neoforge[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' $tmpdir/pack.toml)"

    rm -rf "$tmpdir/pack.toml"

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

    find . -name ".DS_Store" -delete
}

write_version() {
    jq --arg p "packVersion" --arg pv "$PACK_VER_NEW" --arg n "neoforgeVersion" --arg nv "$NF_VER_NEW" '. + {($p): $pv, ($n): $nv}' ./packwiz.json > $tmpdir/packwiz.json
    mv -f $tmpdir/packwiz.json ./packwiz.json
}

cleanup_exit() {
    rm -rf $tmpdir
    rm -f ./packwiz-installer.jar
    rm -f ./update-client.bat
    exit $1
}

get_remote_pack_info

if [[ -e ./packwiz.json ]]; then
    get_local_pack_info
    if [[ -n $PACK_VER_NEW ]]; then
        if [[ -n $PACK_MAJOR ]] && [[ $FORCE -eq 0 ]] && [ "$PACK_MAJOR" != "$PACK_MAJOR_NEW" ]; then
            echo "Warning! This update is a major version change!
$PACK_VER -> $PACK_VER_NEW
Major versions may contain breaking changes which may not be save-game compatible.
Rerun with -f|--force flag to update.
"

    if [[ -n "$NF_VER" ]] && [ "$NF_VER_NEW" != "$NF_VER" ]; then
        echo "Required Neoforge version: $NF_VER_NEW.
Current Neoforge version: $NF_VER.
Please update manually update Neoforge version and retry.
"
        cleanup_exit 1
    fi

    clean_scripts
fi

java -jar packwiz-installer-bootstrap.jar --no-gui --side=server https://moons-pack.jmcmoon.com/pack.toml

if [ $? == 1 ]; then 
    echo "packwiz failed. Exiting."
    cleanup_exit 1
else
    echo "Writing info to packwiz.json."
    write_version
fi

rm -rf $tmpdir
rm -f ./packwiz-installer.jar
rm -f ./update-client.bat

# This is the run script for Modrinth Servers. May need to be changed for other server hosting sites.
java @user_jvm_args.txt @libraries/net/neoforged/neoforge/$NF_VER/unix_args.txt "$@"