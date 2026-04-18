LootJS.modifiers(event => {
    const modifs = [
      "railcraft:chests/abandoned_mineshaft",
      "railcraft:chests/simple_dungeon",
      "railcraft:chests/stronghold_corridor",
      "railcraft:chests/stronghold_crossing",
      "railcraft:chests/village/village_armorer"
    ]

    for (let m of modifs) {
      event.removeGlobalModifiers(m)
    }
})