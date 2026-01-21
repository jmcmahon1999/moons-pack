go install github.com/packwiz/packwiz@latest
export PATH="$PATH:$(go env GOBIN)"
packwiz modrinth export
packwiz refresh --build
mkdir ./dist
cp ./pack.toml ./dist/pack.toml
cd ./dist
curl -L -o ./packwiz-installer-bootstrap.jar "https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest/download/packwiz-installer-bootstrap.jar"
echo 'hash-format = "sha256"' >> index.toml
packwiz refresh
packwiz modrinth export -o "../Moons-Pack-min-$( sed -n 's/^version[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' pack.toml).mrpack"
cd ..
rm -rf ./dist
echo "/mrpack /Moons-Pack-$( sed -n 's/^version[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' pack.toml).mrpack" >> ./_redirects
echo "/mrpack-min /Moons-Pack-min-$( sed -n 's/^version[[:space:]]*=[[:space:]]*"\(.*\)"/\1/p' pack.toml).mrpack" >> ./_redirects