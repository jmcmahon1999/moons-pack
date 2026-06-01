#!/bin/bash

PACK_URL="https://moons-pack.jmcmoon.com"
SIDE=client

expect=""

for arg in "$@"; do
    echo "expecting $expect"
    case "$expect" in
        side)
            SIDE=$arg
            expect=""
            continue
            ;;
        url)
            PACK_URL=$arg
            expect=""
            continue
            ;;
    esac
    
    echo "arg $arg"
    case "$arg" in
        -s|--side)
            expect="side"
            ;;
        -u|--url)
            expect="url"
            ;;
        --side=*)
            SIDE=${arg#--side=}
            ;;
        --url=*)
            PACK_URL=${arg#--url=}
            ;;
        *)
            ;;
    esac

done

SCRIPT=update-client.sh
case "$SIDE" in
  client|both|"")
    SCRIPT=update-client.sh
    ;;
  server)
    SCRIPT=run-server.sh
    ;;
  *)
    echo "Invalid --side value: $SIDE" >&2
    exit 2
    ;;
esac

curl -fsSL -o $SCRIPT $PACK_URL/bootstrap/$SCRIPT

bash $SCRIPT "$@"
