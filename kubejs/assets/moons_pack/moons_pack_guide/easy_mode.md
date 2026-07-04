---
navigation:
  title: Easy Mode
  position: 3
---

# Easy Mode

Easy Mode is an optional setting which will reduce a lot of the early game "grind" from a number of the tech mods,
especially Modern Industrialization.

The modpack largely revolved around Modern Industrialization as a core mod, while other mods like Mekanism and Oritech
branch off with different technologies further into the mid-game. Easy Mode also removes most of this, allowing you to
use each tech mod in its original form (there will still be some limitations to keep the pack balanced).

If you want to use Easy Mode, please ask a server admin to run the command `/moons_pack easy_mode set [USERNAME] true`.
You can turn Easy Mode off at any time.

## The Grind-Skipper 3000

The Grind-Skipper 3000 is a multi-block machine exclusively available to Easy Mode players. It will allow you to easily 
and cheaply print the basic parts for Modern Industrialization; plates, bolts, rods etc.

<Column alignItems="center" fullWidth={true}>
    <GameScene zoom={2} interactive={true}>
        <ImportStructure src="easy_machine.snbt" />
        <IsometricCamera yaw="30" pitch="30" />
    </GameScene>
</Column>

<Recipe id="moons_pack:easy_machine" />