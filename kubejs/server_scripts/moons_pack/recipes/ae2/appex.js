ServerEvents.recipes(e => {
  e.shaped(
        Item.of('appex:experience_cell_housing', 1),
        [
            'ABA',
            'B B',
            'GGG'
        ],
        {
            A:'ae2:quartz_vibrant_glass',
            B:'minecraft:redstone',
            G:'modern_industrialization:beryllium_ingot',
  })

  e.replaceInput({ type: "minecraft:crafting_shaped", mod: "appex"},
    "minecraft:experience_bottle",
    "modern_industrialization:beryllium_ingot"
  )

  e.replaceInput({ type: "minecraft:crafting_shaped", mod: "megacells"},
    "minecraft:experience_bottle",
    "modern_industrialization:beryllium_ingot"
  )
})