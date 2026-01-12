ServerEvents.recipes(e => {

    e.remove({ type: "railcraft:rolling", output: "#railcraft:plate_chest_loot"})
    e.remove({ id: `railcraft:bushing_gear_bronze` })
    e.remove({ id: `railcraft:bushing_gear_brass` })

    let gears = [
        "bronze",
        "copper",
        "gold",
        "invar",
        "iron",
        "steel",
        "tin"
    ]

    for (let gear of gears) {
        e.remove({ id: `railcraft:${gear}_gear`})
    }

    let metals = [
        "lead",
        "brass",
        "silver",
        "nickel",
        "zinc",
        "compressed_iron"
    ]

    for (let metal of metals) {
        e.remove({ id: `railcraft:${metal}_gear`})
        e.shaped(`modern_industrialization:${metal}_gear`,
            [
                'PBP',
                'BRB',
                'PBP'
            ],
            {
                P: `modern_industrialization:${metal}_plate`,
                B: `modern_industrialization:${metal}_bolt`,
                R: `modern_industrialization:${metal}_ring`
            }
        )
        e.custom({
            type: "minecraft:crafting_shaped",
            category: "misc",
            key: {
              R: {
                tag: `c:rods/${metal}`
              },
              b: {
                item: `modern_industrialization:${metal}_bolt`
              }
            },
            pattern: [
              "bRb",
              "R R",
              "bRb"
            ],
            result: {
              count: 2,
              id: `modern_industrialization:${metal}_ring`
            }
        })

        e.custom({
            type: "modern_industrialization:cutting_machine",
            duration: 100,
            eu: 2,
            fluid_inputs: [
              {
                amount: 1,
                fluid: "modern_industrialization:lubricant"
              }
            ],
            item_inputs: [
              {
                amount: 1,
                tag: `c:rods/${metal}`
              }
            ],
            item_outputs: [
              {
                amount: 2,
                item: `modern_industrialization:${metal}_bolt`
              }
            ]
        })

        e.custom({
            type: "extended_industrialization:bending_machine",
            duration: 50,
            eu: 2,
            item_inputs: [
              {
                amount: 1,
                tag: `c:rods/${metal}`
              }
            ],
            item_outputs: [
              {
                amount: 1,
                item: `modern_industrialization:${metal}_ring`
              }
            ]
        })

        e.custom({
          type: "modern_industrialization:cutting_machine",
          duration: 100,
          eu: 2,
          fluid_inputs: [
            {
              amount: 1,
              fluid: "modern_industrialization:lubricant"
            }
          ],
          item_inputs: [
            {
              amount: 1,
              tag: `c:ingots/${metal}`
            }
          ],
          item_outputs: [
            {
              amount: 2,
              item: `modern_industrialization:${metal}_rod`
            }
          ]
        })

        e.custom({
          type: "modern_industrialization:assembler",
          duration: 100,
          eu: 2,
          fluid_inputs: [
            {
              amount: 100,
              fluid: "modern_industrialization:soldering_alloy"
            }
          ],
          item_inputs: [
            {
              amount: 4,
              tag: `c:plates/${metal}`
            },
            {
              amount: 1,
              item: `modern_industrialization:${metal}_ring`
            }
          ],
          item_outputs: [
            {
              amount: 2,
              item: `modern_industrialization:${metal}_gear`
            }
          ]
        })
    }

    metals = [
      "lead",
      "silver",
      "nickel"
  ]

  for (let metal of metals) {
    e.custom({
      type: "modern_industrialization:cutting_machine",
      duration: 100,
      eu: 2,
      fluid_inputs: [
        {
          amount: 1,
          fluid: "modern_industrialization:lubricant"
        }
      ],
      item_inputs: [
        {
          amount: 1,
          item: `modern_industrialization:${metal}_double_ingot`
        }
      ],
      item_outputs: [
        {
          amount: 4,
          item: `modern_industrialization:${metal}_rod`
        }
      ]
    })
  }

    e.custom({
        type: "railcraft:blasting",
        experience: 0.0,
        ingredient: {
            tag: "c:raw_materials/iron"
        },
        result: {
            count: 1,
            id: "minecraft:iron_ingot"
        },
        slagOutput: 1
    })

    e.remove({ id: "railcraft:blast_furnace/blasting_steel_boots" })
    e.remove({ id: "railcraft:blast_furnace/blasting_iron_hoe" })
    e.remove({ id: "railcraft:blast_furnace/blasting_iron_boots" })
    e.remove({ id: "railcraft:blast_furnace/blasting_steel_hoe" })
    e.remove({ id: "railcraft:blast_furnace/blasting_iron_helmet" })
    e.remove({ id: "railcraft:blast_furnace/blasting_iron_shovel" })
    e.remove({ id: "railcraft:blast_furnace/blasting_steel_helmet" })
    e.remove({ id: "railcraft:blast_furnace/blasting_iron_pickaxe" })
    e.remove({ id: "railcraft:blast_furnace/blasting_steel_chestplate" })
    e.remove({ id: "railcraft:blast_furnace/blasting_iron_door" })
    e.remove({ id: "railcraft:blast_furnace/blasting_iron_sword" })
    e.remove({ id: "railcraft:blast_furnace/blasting_iron_crowbar" })
    e.remove({ id: "railcraft:blast_furnace/blasting_iron_horse_armor" })
    e.remove({ id: "railcraft:blast_furnace/blasting_iron_axe" })
    e.remove({ id: "railcraft:blast_furnace/blasting_bucket" })
    e.remove({ id: "railcraft:blast_furnace/blasting_steel_leggings" })
    e.remove({ id: "railcraft:blast_furnace/blasting_steel_axe" })
    e.remove({ id: "railcraft:blast_furnace/blasting_steel_shears" })
    e.remove({ id: "railcraft:blast_furnace/blasting_steel_pickaxe" })
    e.remove({ id: "railcraft:blast_furnace/blasting_iron_trapdoor" })
    e.remove({ id: "railcraft:blast_furnace/blasting_iron_leggings" })
    e.remove({ id: "railcraft:blast_furnace/blasting_shears" })
    e.remove({ id: "railcraft:blast_furnace/blasting_iron_chestplate" })
    e.remove({ id: "railcraft:blast_furnace/blasting_iron_ingot" })
    e.remove({ id: "railcraft:blast_furnace/blasting_steel_sword" })
    e.remove({ id: "railcraft:blast_furnace/blasting_steel_block" })
    e.remove({ id: "railcraft:compressed_iron_gear"})

    let crusher_materials = [
      "iron",
      "nickel",
      "gold",
      "copper",
      "silver",
      "lead",
    ]
    for (let material of crusher_materials) {
      e.remove({ id: `railcraft:crusher/crushing_tags_raw_materials_${material}` })
      e.remove({ id: `railcraft:crusher/crushing_tags_ores_${material}` })
      e.remove({ id: `railcraft:crusher/crushing_tags_storage_blocks_raw_${material}` })
    }

    e.remove({ id: "railcraft:crusher/crushing_ender_pearl" })
    e.remove({ id: "railcraft:crusher/crushing_coal" })
    e.remove({ id: "railcraft:crusher/crushing_coal_block" })
    e.remove({ id: "railcraft:crusher/crushing_charcoal" })
    e.remove({ id: "minecraft:gunpowder" })
})