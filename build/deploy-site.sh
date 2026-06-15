#!/usr/bin/env sh

#Check HEAD is tagged as a release.
git fetch --tags

set -e

if git describe --tags --exact-match >/dev/null 2>&1; then
  echo "Commit is tagged. Continuing build."
else
  echo "Commit is not tagged. Failing build."
  exit 1
fi

#Install packwiz.
go install github.com/packwiz/packwiz@latest
export PATH="$PATH:$(go env GOBIN)"

PACK_NAME="$(sed -n 's/^name[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' ./pack.toml)"
PACK_VERSION="$(sed -n 's/^version[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' ./pack.toml)"

# Build mrpack files and generate packwiz hashes.
./build/build.sh
cp ./build/dist/*.mrpack ./
packwiz refresh --build

# Setup redirects.
echo "/mrpack /$PACK_NAME-$PACK_VERSION.mrpack" >> ./_redirects
echo "/mrpack-server /$PACK_NAME-$PACK_VERSION-server.mrpack" >> ./_redirects
echo "/mrpack-min /$PACK_NAME-$PACK_VERSION-min.mrpack" >> ./_redirects

# Move web files around for Cloudflare Pages.
mv ./web/functions ./functions
mv ./web/favicon.ico ./favicon.ico
mv ./web/404.html ./404.html
mv ./web/docs.html ./docs.html
mv ./build/static/jars ./jars
mv ./build/static/zips ./zips
mv ./build/static/scripts ./bootstrap

# Delete unnecessary files.
rm ./.gitignore
rm ./.gitattributes
rm -rf ./.github
rm -rf ./build
rm -rf ./web/functions