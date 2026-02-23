# moons-pack

A highly customised tech modpack. Focussed on making tech-mods feel like doing actual science, discovering new technologies and dimensions with research and experiments. Its 'Greg-ish' and grindy, its mainly built around Modern Industrialization and Applied Energistics 2, with some heavily customised parts of Oritech, Avaritia and Draconic Evolution to make the end game feel satisfying.

- Auto-Updater Version: [Download](/mrpack-min)
- Static Version: [Download](/mrpack)
- Server Version: [Download](/mrpack-server)

Built using the beloved [packwiz](https://github.com/packwiz)!

---

### Installation

To install simply download the .mrpack file and import it via the 
[modrinth launcher](https://modrinth.com/app).

For the auto-updater version make sure you read the Automatic Updater 
section!

> I recommend turning off the Distant Horizons and Iris mods if you have 
a slow computer.

> The Lithosphere and Still Life mods are very heavy terrain generation, 
so you should replace them if you intend to play singleplayer.

### Automatic Updater

To use the automatic updater version, add the following line in the 
settings, under **Launch Hooks** -> **Pre-launch**:

Windows:
```
./update-client.bat
```

Mac/Linux:
```
sh ./update-client.sh
```

![auto-updater-launch-hooks](/web/launch-hooks.png)

Server:
```
# In Options -> Startup -> Startup Command
./run-server.sh nogui
```

> If you are alarmed by running scripts like this, you can check out the
[Windows](https://github.com/jmcmahon1999/moons-pack/blob/main/build/update-client.bat) 
and [Mac](https://github.com/jmcmahon1999/moons-pack/blob/main/build/update-client.sh)
scripts and the [packwiz installer](https://github.com/packwiz/packwiz-installer).

### RAM Settings

For multiplayer, I recommend using 4GB (4096MB). Adding more RAM won't increase performance 
hugely, but it will add frame drops during garbage collection.

For singleplayer you'll have to experiment and see what amount of RAM works best for your computer.

![modrinth-memory-settings](/web/java-memory.png)

If you are a nerd and want to make everything *even more optimized*, I recommend
[this guide]("https://github.com/TheUsefulLists/usefulmods/blob/main/JavaArgumentsOptimization.md).

---

### Links

Github: [moons-pack](https://github.com/jmcmahon1999/moons-pack)