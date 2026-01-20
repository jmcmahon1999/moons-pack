go install github.com/packwiz/packwiz@latest
export PATH="$PATH:$(go env GOBIN)"
curl -L -o ./packwiz-installer-bootstrap.jar "https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest/download/packwiz-installer-bootstrap.jar"
packwiz modrinth export
packwiz refresh --build
mkdir ./dist
cp ./pack.toml ./dist/pack.toml
cp ./packwiz-installer-bootstrap.jar ./dist/packwiz-installer-bootstrap.jar
cd ./dist
packwiz modrinth export -o "/Moons-Pack-min-$( sed -n 's/^version[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' pack.toml).mrpack"
echo "/mrpack /Moons-Pack-$( sed -n 's/^version[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' pack.toml).mrpack" >> ./_redirects
echo "/mrpack /Moons-Pack-min-$( sed -n 's/^version[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' pack.toml).mrpack" >> ./_redirects