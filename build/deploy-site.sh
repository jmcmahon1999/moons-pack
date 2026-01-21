#!/usr/bin/env sh

git fetch --tags

set -e

if git describe --tags --exact-match >/dev/null 2>&1; then
  echo "✅ Commit is tagged. Continuing build."
else
  echo "❌ Commit is not tagged. Failing build."
  exit 1
fi


go install github.com/packwiz/packwiz@latest
export PATH="$PATH:$(go env GOBIN)"

PACK_NAME="$(sed -n 's/^name[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' ./pack.toml)"
PACK_VERSION="$(sed -n 's/^version[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' ./pack.toml)"

./build/build.sh
cp ./build/dist/*.mrpack ./

echo "/mrpack /$PACK_NAME-$PACK_VERSION.mrpack" >> ./_redirects
echo "/mrpack-server /$PACK_NAME-$PACK_VERSION-server.mrpack" >> ./_redirects
echo "/mrpack-min /$PACK_NAME-$PACK_VERSION-min.mrpack" >> ./_redirects

rm ./.gitignore
rm ./.gitattributes
rm -rf ./.github
rm -rf ./build