# <a name="help"></a>Help and Instructions

## <a name="ram"></a>RAM Settings

For multiplayer, I recommend using approximately 4GB (4096MB). Adding more RAM won't increase performance hugely, but it will add frame drops during garbage collection. If you are using Iris Shaders and Distant Horizons on high settings, you may need a GB or so more.

For singleplayer you'll have to experiment and see what amount of RAM works best for your computer.

For most people (<12GB RAM), the following JVM arguments will speed your game up:
```
-XX:+UnlockExperimentalVMOptions -XX:+UseG1GC -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -XX:MaxGCPauseMillis=50 -XX:G1HeapRegionSize=32M
```

If you are upset that you aren't getting to use all that expensive RAM you paid for and want to make everything *even more optimized*, I recommend [this guide](https://github.com/Obydux/Minecraft-startup-flags), or TLDR:

```
-XX:+UseZGC -XX:+ZGenerational -XX:+AlwaysPreTouch -XX:+UseStringDeduplication -XX:TrimNativeHeapInterval=5000
```

![modrinth-memory-settings](/docs/website/java-memory.png)

---

## <a name="neo"></a>NeoForge Updates

If you saw the **NeoForge {*SOME VERSION*} Required** error message, that means the pack has been updated to use a new version of NeoForge.

Simply go to:
    Instance Settings > Installation > Click Edit and choose the correct version.
You will then need to: 
Close Settings > Hit the three dots beside Settings > Open Folder > Delete `packwiz.json`.

If you don't remember what version of NeoForge you need, you can check on the [homepage](/).

> Don't worry, I will have checked this is safe to do, I just can't force modrinth to do it automatically.

![neoforge-update](/docs/website/neoforge-update.png)

---

## <a name="major"></a>Major Version Update

If you saw the **Major Version Warning** error message, that means the newest version of the pack includes a major (breaking) change. This pack uses SemVer versioning, and a breaking change means you can expect this new version to be incompatible with existing saves and servers. 

Major version updates are intended to be used as a fresh install. So if you do want to use that new version, just delete your old pack and install the new one.

**PROCEED WITH CAUTION**: My advice would be to stop updating your pack (by unchecking the custom Launch Hook) and stick to the current version.

---

## Custom Installation

This modpack uses a simple bootstrap script which downloads checks for the latest version of the updater script.

This is a full usage description of the bootstrap script for:

### Mac/~~Linux~~:

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

### Windows:

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

---