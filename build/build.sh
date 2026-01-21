#!/usr/bin/env sh
BASE_DIR="$(pwd)"
echo $BASE_DIR
BUILD_DIR="$BASE_DIR/build/tmp" # Temporary build directory.
DIST_DIR="$BASE_DIR/build/dist" # Output directory.
SCRIPT_DIR="$BASE_DIR/build"
PACK_NAME="$(sed -n 's/^name[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' $BASE_DIR/pack.toml)"
PACK_VERSION="$(sed -n 's/^version[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' $BASE_DIR/pack.toml)"
mkdir $BUILD_DIR
mkdir $DIST_DIR

# Build Mini distribution.
curl -L -o $BUILD_DIR/packwiz-installer-bootstrap.jar "https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest/download/packwiz-installer-bootstrap.jar"
cp $BASE_DIR/pack.toml $BUILD_DIR/pack.toml
cp $SCRIPT_DIR/update-client.sh $BUILD_DIR/update-client.sh
echo 'hash-format = "sha256"' >> $BUILD_DIR/index.toml
cd $BUILD_DIR
packwiz refresh --build
packwiz modrinth export -o "$DIST_DIR/$PACK_NAME-$PACK_VERSION-min.mrpack"
cd $BASE_DIR

# Build Server distribution.
rm $BUILD_DIR/update-client.sh
cp $SCRIPT_DIR/run-server.sh $BUILD_DIR/run-server.sh
cd $BUILD_DIR
packwiz refresh --build
packwiz modrinth export -o "$DIST_DIR/$PACK_NAME-$PACK_VERSION-server.mrpack"

# Clean up build directory.
cd $BASE_DIR
rm -rf $BUILD_DIR
packwiz modrinth export -o "$DIST_DIR/$PACK_NAME-$PACK_VERSION.mrpack"
packwiz refresh --build

echo "Build Completed for $PACK_NAME version $PACK_VERSION."