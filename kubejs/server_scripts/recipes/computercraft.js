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
            C: "ae2:engineering_processor",
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
})