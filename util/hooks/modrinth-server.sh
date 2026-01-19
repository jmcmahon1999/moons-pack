curl -o ./packwiz-installer-bootstrap.jar 'https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest/download/packwiz-installer-bootstrap.jar'
java -jar packwiz-installer-bootstrap.jar --no-gui --side=server https://moons-pack.pages.dev/pack.toml
java @user_jvm_args.txt @libraries/net/neoforged/neoforge/21.1.218/unix_args.txt "$@"