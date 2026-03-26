#!/usr/bin/env sh

PACK_URL="http://moons-pack.jmcmoon.com"
SIDE="client"

while [[ $# -gt 0 ]]; do
  case $1 in
    -u|--url)
      PACK_URL="$2"
      shift # past argument
      shift # past value
      ;;
    -s|--side)
      SIDE="$2"
      shift
      shift
      ;;
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

# Display GUI instructions for Neoforge update.
update_prompt() {
    echo "Awaiting Neoforge update prompt..."
    TITLE="$PACK_NAME: Neoforge $NF_VER_NEW Required"
    MESSAGE="You need to manually update Neoforge. :(
Don't worry it's super easy!

- Open the modpack in Modrinth.
- Go to Settings -> Installation.
- Change the Neoforge version to $NF_VER_NEW

You currently have: Neoforge $NF_VER

Press Help for detailed instructions.
"
    osascript - "$MESSAGE" "$TITLE" "$PACK_URL" << 'APPLESCRIPT'
        on run argv
            display dialog (item 1 of argv) with title (item 2 of argv) buttons {"Help", "OK"} default button "OK"
            
            if button returned of result is "Help" then
                open location (item 3 of argv)
            end if
        end run
APPLESCRIPT
}

# Display GUI warning about Major Version change.
major_version_prompt() {
    echo "Awaiting Major version prompt..."
    TITLE="$PACK_NAME: Major Version Warning."
    MESSAGE="Warning! This update is a major version change!

- Current version: $PACK_VER
- Update version: $PACK_VER_NEW

Major versions may contain breaking changes which may not be save-game compatible.

Proceed with caution!
    "
    REPO="https://github.com/jmcmahon1999/moons-pack"
    rc=$(osascript - "$MESSAGE" "$TITLE" "$REPO" << 'APPLESCRIPT'
on run argv
    display dialog (item 1 of argv) with title (item 2 of argv) buttons {"Help", "Update", "Skip"} default button "Skip"
    
    if button returned of result is "Help" then
        open location (item 3 of argv)
        return 2
    else if button returned of result is "Skip" then
        return 1
    else
        return 0
    end if
end run
APPLESCRIPT
    )
}

get_remote_pack_info

if [[ -e ./packwiz.json ]]; then
    get_local_pack_info
    if [[ -n $PACK_VER_NEW ]]; then
        if [[ -n $PACK_MAJOR ]] && [[ $FORCE -eq 0 ]] && [ "$PACK_MAJOR" != "$PACK_MAJOR_NEW" ]; then
            major_version_prompt
            if [ $rc -eq 0 ]; then
                echo "Continuing with update..."
            elif [ $rc -eq 1 ]; then
                echo "Skipping update."
                cleanup_exit 0
            else
                cleanup_exit 1
            fi
        fi

        if [[ -n "$NF_VER" ]] && [ "$NF_VER_NEW" != "$NF_VER" ]; then
            update_prompt
            cleanup_exit 1
        fi

        clean_scripts
    fi
fi

java -jar packwiz-installer-bootstrap.jar $PACK_URL/pack.toml

if [ $? -eq 1 ]; then 
    echo "packwiz failed. Exiting."
    cleanup_exit 1
else
    echo "Writing info to packwiz.json."
    write_version
fi

cleanup_exit 0