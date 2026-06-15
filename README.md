# moons-pack

A highly customised tech modpack. Focussed on making tech-mods feel like doing actual science, discovering new technologies and dimensions with research and experiments. Its 'Greg-ish' and grindy, its mainly built around Modern Industrialization and Applied Energistics 2, with some heavily customised parts of Oritech, Avaritia and Draconic Evolution to make the end game feel satisfying.

Download the *.mrpack* file here:
- Auto-Updater Version (you probably want this one!): [Download](/mrpack-min)
- Static Version: [Download](/mrpack)
- Server Version: [Download](/mrpack-server)

Built using the beloved [packwiz](https://github.com/packwiz)!

## Links

Website: [moons-pack](https://moons-pack.jmcmoon.com)

Documentation: [moons-pack-docs](https://moons-pack.jmcmoon.com/docs)
    - [Help and Instructions](/docs#help)
    - [Frequently Asked Questions](/docs#faq)

Github: [moons-pack-github](https://github.com/jmcmahon1999/moons-pack)

Issues: [moons-pack-issues](https://github.com/jmcmahon1999/moons-pack/issues)

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
cmd.exe /c bootstrap.bat
```
(the double quotes are important)

### Mac/~~Linux~~:
```
bash bootstrap.sh
```

![auto-updater-launch-hooks](/web/launch-hooks.png)

> If you are alarmed by running scripts like this, you can check out all my [scripts and static files](https://github.com/jmcmahon1999/moons-pack/tree/main/build),
the [packwiz installer](https://github.com/packwiz/packwiz-installer) and all the included [mods and projects](https://moons-pack.jmcmoon.com/#project-list).
