# moons-pack

A highly customised tech modpack. Focussed on making tech-mods feel like doing actual science, discovering new technologies and dimensions with research and experiments. Its 'Greg-ish' and grindy, its mainly built around Modern Industrialization and Applied Energistics 2, with some heavily customised parts of Oritech, Avaritia and Draconic Evolution to make the end game feel satisfying.

Download the *.mrpack* file here:
- Auto-Updater Version (you probably want this one!): [Download](/mrpack-min)
- Static Version: [Download](/mrpack)
- Server Version: [Download](/mrpack-server)

Built using the beloved [packwiz](https://github.com/packwiz)!

---

## Installation

To install simply download the .mrpack file (from one of the links above) and import it via the 
[modrinth launcher](https://modrinth.com/app).

You should be able to double click the .mrpack file downloaded from above.
If that doesn't work: Click + in the side bar. Click "Modpack Base". Click "Import Modpack". Click "Import Modpack" again and select the .mrpack file from your downloads.

For the auto-updater version make sure you read the [Automatic Updater](#automatic-updater) section!

I recommend about 4GB of RAM. If you're not sure how, check the [RAM Settings](#ram-settings) section below.

> I recommend turning off the *Distant Horizons* and *Iris* mods if you have 
a slow computer.

![add-pack-modrinth](/web/add-pack.png)

## Automatic Updater

To use the automatic updater version, add the following line in the 
settings, under **Launch Hooks** -> **Pre-launch**:

### Windows:
```
cmd.exe /c ""bootstrap.bat""
```
(the double quotes are important)

### Mac/~~Linux~~:
```
bash bootstrap.sh
```

When you run the game a window will open 

![auto-updater-launch-hooks](/web/launch-hooks.png)

> If you are alarmed by running scripts like this, you can check out the
[Windows](https://github.com/jmcmahon1999/moons-pack/blob/main/build/update-client.bat) 
and [Mac](https://github.com/jmcmahon1999/moons-pack/blob/main/build/update-client.sh)
scripts and the [packwiz installer](https://github.com/packwiz/packwiz-installer).


### Singleplayer

Install in the same manner as above, except use the following **Pre-launch Hook**:
```
# Windows:
cmd.exe /c ""bootstrap.bat"" -s both

# Mac:
sh boothstrap.sh -s both
```

### Server:
```
# In Options -> Startup -> Startup Command
sh bootstrap.sh
```

## RAM Settings

For multiplayer, I recommend using approximately 4GB (4096MB). Adding more RAM won't increase performance hugely, but it will add frame drops during garbage collection.

For singleplayer you'll have to experiment and see what amount of RAM works best for your computer.

![modrinth-memory-settings](/web/java-memory.png)

For most people (<12GB RAM), the following JVM arguments will speed your game up:
```
-XX:+UnlockExperimentalVMOptions -XX:+UseG1GC -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -XX:MaxGCPauseMillis=50 -XX:G1HeapRegionSize=32M
```

If you are upset that you aren't getting to use all that expensive RAM you paid for and want to make everything *even more optimized*, I recommend [this guide](https://github.com/Obydux/Minecraft-startup-flags), or TLDR:

```
-XX:+UseZGC -XX:+ZGenerational -XX:+AlwaysPreTouch -XX:+UseStringDeduplication -XX:TrimNativeHeapInterval=5000
```

## Troubleshooting

When using the installer version, if you are mismatched with the server or getting KubeJS errors when loading into worlds, try deleting `packwiz.json` and rerunning.

---

### Links

Github: [moons-pack](https://github.com/jmcmahon1999/moons-pack)