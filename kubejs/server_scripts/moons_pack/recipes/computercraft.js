ServerEvents.recipes(e => {
    e.replaceInput({ mod: "computercraft", input: "minecraft:redstone" },
        "minecraft:redstone",
        "ae2:calculation_processor"
    )

    e.replaceInput({ mod: "computercraft", input: "minecraft:golden_apple" },
        "minecraft:golden_apple",
        "ae2:logic_processor"
    )

    e.replaceInput({ mod: "computercraft", input: "minecraft:gold_ingot"},
        "minecraft:gold_ingot",
        "mekanism:ingot_osmium"
    )

    e.replaceInput({ mod: "computercraft", input: "minecraft:stone"},
        "minecraft:stone",
        "minecraft:iron_ingot"
    )

    e.remove({ output: "computercraft:turtle_advanced" })
    e.remove({ output: "computercraft:computer_advanced" })
    e.remove({ output: "computercraft:pocket_computer_advanced" })
    e.shaped(
        "computercraft:computer_advanced",
        [
            "iii",
            "iCi",
            "igi"
        ],
        {
            i: "mekanism:ingot_osmium",
            C: "ae2:engineering_processor",
            g: "ae2:quartz_glass"
        }
    )
    e.shaped(
        "computercraft:turtle_advanced",
        [
            "iii",
            "iCi",
            "igi"
        ],
        {
            i: "mekanism:ingot_osmium",
            C: "computercraft:computer_advanced",
            g: "ae2:quartz_glass"
        }
    )
    e.shaped(
        "computercraft:pocket_computer_normal",
        [
            "iii",
            "iCi",
            "igi"
        ],
        {
            i: "mekanism:ingot_osmium",
            C: "ae2:calculation_processor",
            g: "minecraft:glass_pane"
        }
    )
    e.shaped(
        "computercraft:pocket_computer_advanced",
        [
            "iii",
            "iCi",
            "igi"
        ],
        {
            i: "mekanism:ingot_osmium",
            C: "ae2:engineering_processor",
            g: "ae2:quartz_glass"
        }
    )

    e.replaceInput({ mod: "advancedperipherals" },
        "minecraft:redstone_block",
        "ae2:energy_cell"
    )

    e.replaceInput({ mod: "advancedperipherals"},
        "minecraft:iron_bars",
        "mekanism:ingot_osmium"
    )

    e.replaceInput({ mod: "advancedperipherals" },
        "minecraft:gold_ingot",
        "ae2:logic_processor"
    )

    e.replaceInput({ mod: "advancedperipherals" },
        "minecraft:diamond",
        "ae2:engineering_processor"
    )

    e.remove({ id: "advancedperipherals:peripheral_casing" })
    e.shaped("advancedperipherals:peripheral_casing",
        [
            "iCi",
            "CHC",
            "iCi"
        ],
        {
            i: "mekanism:ingot_osmium",
            C: "ae2:calculation_processor",
            H: "ae2:energy_cell"
        }
    )
})