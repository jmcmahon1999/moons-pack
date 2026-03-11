ServerEvents.recipes(e => {
  e.remove({ output: 'draconicevolution:info_tablet' })

  e.replaceInput({ id: "draconicevolution:draconium_core" },
    "minecraft:diamond",
    "modern_industrialization:processing_unit"
  )

  e.replaceInput({ type: "minecraft:crafting_shaped", mod: "draconicevolution" },
    "minecraft:iron_ingot",
    "modern_industrialization:titanium_ingot"
  )

  e.replaceInput({ type: "minecraft:crafting_shaped", mod: "draconicevolution" },
    "minecraft:gold_ingot",
    "modern_industrialization:chromium_ingot"
  )

  e.replaceInput({ type: "minecraft:crafting_shaped", mod: "draconicevolution" },
    "minecraft:diamond",
    "minecraft:echo_shard"
  )

  e.replaceInput({ type: "minecraft:crafting_shaped", mod: "draconicevolution" },
    "minecraft:lapis_lazuli",
    "modern_industrialization:beryllium_ingot"
  )

  e.replaceInput({ type: "minecraft:crafting_shaped", mod: "draconicevolution" },
    "minecraft:redstone_block",
    "modern_industrialization:superconductor_coil"
  )

  e.replaceInput({ type: "minecraft:crafting_shaped", mod: "draconicevolution" },
    "minecraft:lapis_block",
    "modern_industrialization:fusion_chamber"
  )

  e.replaceInput({ type: "minecraft:crafting_shaped", mod: "draconicevolution" },
    "minecraft:nether_star",
    "modern_industrialization:singularity"
  )

  const gear = [
    "axe",
    "shovel",
    "hoe",
    "pickaxe",
    "sword",
    "bow",
    "chestpiece"
  ]

  for (let item of gear) {
    e.remove({ id: "draconicevolution:tools/wyvern_" + item })
    let replacement;
    if (item == "bow") replacement = "enderitemod:enderite_bow"
    else if (item == "chestpiece") replacement = "deeperdarker:warden_chestplate"
    else replacement = "deeperdarker:warden_" + item;
    e.custom({
      type: "draconicevolution:fusion_crafting",
      catalyst: {
        item: replacement
      },
      ingredients: [
        {
          consume: true,
          ingredient: {
            item: "draconicevolution:draconium_core"
          }
        },
        {
          consume: true,
          ingredient: {
            tag: "c:ingots/draconium"
          }
        },
        {
          consume: true,
          ingredient: {
            tag: "c:ingots/draconium"
          }
        },
        {
          consume: true,
          ingredient: {
            item: "draconicevolution:basic_relay_crystal"
          }
        },
        {
          consume: true,
          ingredient: {
            item: "draconicevolution:wyvern_energy_core"
          }
        },
        {
          consume: true,
          ingredient: {
            item: "draconicevolution:basic_relay_crystal"
          }
        }
      ],
      result: {
        count: 1,
        id: "draconicevolution:wyvern_" + item
      },
      techLevel: "wyvern",
      totalEnergy: 8000000
    })
  }

  const fusion_crafts = {
    "components/awakened_core": [
      "modern_industrialization:singularity",
      "4*draconicevolution:wyvern_core",
      "4*draconicevolution:awakened_draconium"
    ],
    "tools/draconic_sword": [
      "modern_industrialization:singularity",
      "4*draconicevolution:wyvern_core",
      "4*draconicevolution:awakened_draconium"
    ],

  }
  
})