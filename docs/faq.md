# Frequently Asked Questions

## I followed the installation instructions but still don't have any mods!

This means that the install script isn't running properly. The most common cause of this is not having a compatible version of Java installed. You can check your version of java by opening Terminal (MacOS) or CommandPrompt (Windows) and entering this command: `java --version`. If the command isn't recognised or the version is <21, you need to download Java 21 [here](https://adoptium.net/en-GB/temurin/releases?version=21&os=any&arch=any).

## Why do I lag when I first join a world?

This very heavily modded modpack does a lot of stuff when you first enter a world. Most notably EMI mod (recipe viewer) has to build the index of every item and recipe in the game. Usually if you wait for a few seconds after joining the lag should subside. If it's taking too long or is timing you out, try disabling the following mods one at a time until it improves: DistantHorizons, EMI++ and Shaders, in that order. 

## Distant Horizons isn't working on my Mac!

Distant Horizons doesn't currently support Macs with Apple Silicon chips (M1, M2 etc.). Sorry :(

## Why is it lagging so bad after switching shaders on/off in game?

There seems to be some memory leak when switching between shaders or toggling them on and off, especially when using DistantHorizons. You may find that your LODs disappear, you suddenly have significant FPS lag or GC freezes. I recommend logging out/restarting your game, and choosing your shader before logging into a server or world.


## Why are there holes in my Distant Horizons LODs?

The server has pre-generated LODs for a large area around spawn. These are streamed gradually to your client as you play. If this is happening too slowly I recommend going AFK to wait for them to load. You can also lower your graphics settings and render distance, as Distant Horizons limits how many LODs it sends you based on how much you are lagging.

If you have travelled a significant distance from spawn, you will likely only get LODs around areas you have visited, as they won't have been pre-generated.


## Why are certain modded blocks (e.g. pipes) not working in blueprints?

Try running the command `/gamerule allowNBTDataCopy true` in your singleplayer/server world. This should allow some blocks to be copied with blueprints.

Unfortunately certain mods (MI in particular) use a sneaky trick to avoid registering a large number of unique blocks. For example, all of the MI pipes are actually a single block "modern_industrialization:pipe". This means the blueprint can't pick them up. [#42](https://github.com/Nimblonia/Mod_Portable_blueprint_Community/issues/48)