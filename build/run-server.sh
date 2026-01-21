java -jar packwiz-installer-bootstrap.jar --no-gui --side=server https://moons-pack.jmcmoon.com/pack.toml

# This is the run script for Modrinth Servers. May need to be changed for other server hosting sites.
java @user_jvm_args.txt @libraries/net/neoforged/neoforge/21.1.218/unix_args.txt "$@"