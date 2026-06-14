# Moons Pack - Help and Instructions

## <a name="neo"></a>NeoForge Updates

If you saw the **NeoForge {*SOME VERSION*} Required** error message, that means the pack has been updated to use a new version of NeoForge.

Simply go to:
    Instance Settings > Installation > Click Edit and choose the correct version.
You will then need to: 
Close Settings > Hit the three dots beside Settings > Open Folder > Delete `packwiz.json`.

If you don't remember what version of NeoForge you need, you can check on the [homepage](/).

> Don't worry, I will have checked this is safe to do, I just can't force modrinth to do it automatically.

![neoforge-update](/web/neoforge-update.png)

## <a name="major"></a>Major Version Update

If you saw the **Major Version Warning** error message, that means the newest version of the pack includes a major (breaking) change. This pack uses SemVer versioning, and a breaking change means you can expect this new version to be incompatible with existing saves and servers. 

Major version updates are intended to be used as a fresh install. So if you do want to use that new version, just delete your old pack and reinstall it.

**PROCEED WITH CAUTION**: My advice would be to stop updating your pack (by unchecking the custom Launch Hook) and stick to the current version.

## Custom Installation

This modpack uses a simple bootstrap script which downloads checks for the latest version of the updater script.

This is a full usage description of the bootstrap script for:

### Mac/~~Linux~~

```sh
sh boostrap.sh [-s|--side <string>][-u|--url <string>][--no-update]

# s|side)
#   select mode for sided install. passed to packwiz --side argument.
#   one of ["client", "server", "both"], defaults to "client".
# u|url)
#   provide a custom URL which the installer will attempt to pull from
#   defaults to https://moons-pack.jmcmoon.com
# no-update)
#   skip auto-updater and launch minecraft. (essentially disables this script)
```

### Windows

The Windows version of the auto-updater uses a batch script bootstrapper which launches a powershell script.
You should see a powershell or cmd prompt pop up as well as the installer UI, that is normal.
If nothing happens when using this script, check your security settings aren't blocking powershell scripts or try adding double speech marks as shown below.

```cmd
cmd.exe /c boostrap.sh [-s|--side <string>][-u|--url <string>][--no-update]
cmd.exe /c ""boostrap.sh"" # Can work better on some PCs.

rem s|side)
rem     select mode for sided install. passed to packwiz --side argument.
rem   one of ["client", "server", "both"], defaults to "client".
rem u|url)
rem   provide a custom URL which the installer will attempt to pull from
rem   defaults to https://moons-pack.jmcmoon.com
rem no-update)
rem   skip auto-updater and launch minecraft. (essentially disables this script)
```