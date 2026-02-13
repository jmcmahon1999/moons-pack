#!/usr/bin/env sh

PACK_URL="https://moons-pack.jmcmoon.com"
tmpdir=$(mktemp -d /tmp/jmcmoon.XXXXXX) || exit 1

# Get updated pack info.
get_pack_info() {
    PACK_NAME="$(sed -n 's/^name[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' ./pack.toml)"
    PACK_VER="$(sed -n 's/^version[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' ./pack.toml)"
    NF_VER="$(sed -n 's/^neoforge[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' ./pack.toml)"

    curl -s -L -o "$tmpdir/pack.toml" "$PACK_URL/pack.toml"

    PACK_VER_NEW="$(sed -n 's/^version[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' $tmpdir/pack.toml)"
    NF_VER_NEW="$(sed -n 's/^neoforge[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' $tmpdir/pack.toml)"

    rm -f "$tmpdir/pack.toml"
}

# Remove old kubejs scripts.
clean_scripts() {
    curl -s -L -o "$tmpdir/index.toml" "$PACK_URL/index.toml"
    grep -Eo 'kubejs[^"]+' "$tmpdir/index.toml" | sort > $tmpdir/tracked.txt
    find "./kubejs" -type f -path '*/moons_pack/*' -print | sed 's|^\./||' | sort > $tmpdir/files.txt
    
    comm -23 $tmpdir/files.txt $tmpdir/tracked.txt > $tmpdir/untracked.txt

    echo "The following files will be removed:"
    cat $tmpdir/untracked.txt

    xargs rm -f < $tmpdir/untracked.txt
}

cleanup_exit() {
    rm -rf $tmpdir
    exit $1
}

if [ -e ./pack.toml ]; then
    get_pack_info

    if [ "$PACK_VER" == "$PACK_VER_NEW" ]; then
        cleanup_exit 0
    fi

    if [[ -n "$NF_VER" ]] && [ "$NF_VER_NEW" != "$NF_VER" ]; then
        echo "Required Neoforge version: $NF_VER_NEW.
    Current Neoforge version: $NF_VER.
    Please update manually update Neoforge version and retry.
    "
        cleanup_exit 1
    fi

    clean_scripts
else
    curl -s -L -o "$tmpdir/pack.toml" "$PACK_URL/pack.toml"
    NF_VER="$(sed -n 's/^neoforge[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' $tmpdir/pack.toml)"
fi

rm -rf $tmpdir

java -jar packwiz-installer-bootstrap.jar --no-gui --side=server https://moons-pack.jmcmoon.com/pack.toml

# This is the run script for Modrinth Servers. May need to be changed for other server hosting sites.
java @user_jvm_args.txt @libraries/net/neoforged/neoforge/$NF_VER/unix_args.txt "$@"