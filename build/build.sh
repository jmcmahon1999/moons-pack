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
cp $BASE_DIR/pack.toml $BUILD_DIR/pack.toml
cp $SCRIPT_DIR/bootstrap.sh $BUILD_DIR/bootstrap.sh
cp $SCRIPT_DIR/bootstrap.bat $BUILD_DIR/bootstrap.bat
echo 'hash-format = "sha256"' >> $BUILD_DIR/index.toml
cd $BUILD_DIR
packwiz refresh --build
packwiz modrinth export -o "$DIST_DIR/$PACK_NAME-$PACK_VERSION-min.mrpack"
cd $BASE_DIR

# Build Server distribution.
rm $BUILD_DIR/bootstrap.bat
cd $BUILD_DIR
packwiz refresh --build
packwiz modrinth export -o "$DIST_DIR/$PACK_NAME-$PACK_VERSION-server.mrpack"

# Build Main distribution.
cd $BASE_DIR
rm -rf $BUILD_DIR
packwiz modrinth export -o "$DIST_DIR/$PACK_NAME-$PACK_VERSION.mrpack"

# Clean up.
packwiz refresh

echo "Build Completed for $PACK_NAME version $PACK_VERSION."