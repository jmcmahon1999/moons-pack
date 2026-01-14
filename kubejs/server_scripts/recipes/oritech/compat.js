ServerEvents.recipes(e => {
    e.remove({ id: "oritech:assembler/superconductor" })
    e.custom({
        type: "oritech:assembler",
        fluidInputAmount: 0,
        fluidInputVariant: "minecraft:empty",
        fluidOutputAmount: 0,
        fluidOutputVariant: "minecraft:empty",
        ingredients: [
            { item: "oritech:flux_gate" },
            { item: "modern_industrialization:superconductor_wire" },
            { item: "oritech:dubios_container" },
            { item: "oritech:energite_ingot" }
        ],
        results: [{
            count: 3,
            id: "oritech:superconductor"
        }],
        time: 320
    })

    e.remove({ id: "oritech:crafting/alloy/electrum" })

    let replacements = [
        ["basic_battery", "silicon_battery"],
        ["advanced_battery", "sodium_battery"],
        ["motor", "motor"],
        ["magnetic_coil", "inductor"],
        ["plutonium_dust", "plutonium_dust"]
    ]

    for (let items of replacements) {
        e.replaceInput({ mod: "oritech", input: `oritech:${items[0]}`},
            `oritech:${items[0]}`,
            `modern_industrialization:${items[1]}`
        )
    }

    e.remove({ id: "oritech:pulverizer/dust/quartz"})
    e.remove({ id: "oritech:grinder/dust/quartz"})
    e.custom({
        type: "oritech:pulverizer",
        fluidInputAmount: 0,
        fluidInputVariant: "minecraft:empty",
        fluidOutputAmount: 0,
        fluidOutputVariant: "minecraft:empty",
        ingredients: [ { item: "minecraft:quartz" } ],
        results: [{
            count: 1,
            id: "modern_industrialization:quartz_dust"
        }],
        time: 200
    })
    e.custom({
        type: "oritech:grinder",
        fluidInputAmount: 0,
        fluidInputVariant: "minecraft:empty",
        fluidOutputAmount: 0,
        fluidOutputVariant: "minecraft:empty",
        ingredients: [ { item: "minecraft:quartz" } ],
        results: [{
            count: 1,
            id: "modern_industrialization:quartz_dust"
        }],
        time: 140
    })

    e.remove({ output: "oritech:silicon" })
    e.remove({ id: 'oritech:silicon_from_smelting_raw_silicon' })
    e.remove({ output: "oritech:silicon_block" })
    // e.remove({ id: "oritech:assembler/fwire" })
    // e.remove({ id: "oritech:assembler/magnet" })
    // e.remove({ id: "oritech:assembler/motor" })
    // e.remove({ id: "oritech:biosteel_blockblock"})
    // e.remove({ id: "oritech:crafting/alloy/steel"})
    // e.remove({ id: "oritech:biosteel_blockblockinv"})
    // e.remove({ id: "oritech:steel_ingot_from_smelting_steel_dust"})
    // e.remove({ id: "oritech:biosteel_ingot_from_smelting_biosteel_dust"})
    // e.remove({ id: "oritech:steel_ingot_from_blasting_steel_dust"})
    // e.remove({ id: "oritech:biosteel_ingot_from_blasting_biosteel_dust"})
    // e.remove({ id: "oritech:foundry/alloy/biosteel"})
    // e.remove({ id: "oritech:foundry/alloy/steel"})
    // e.remove({ id: "oritech:foundry/alloy/inverse/biosteel"})
    // e.remove({ id: "oritech:foundry/alloy/inverse/steel"})
    // e.remove({ id: "oritech:foundry/alloy/netherite"})
    // e.remove({ id: "oritech:foundry/alloy/inverse/netherite"})
    // e.remove({ id: "oritech:foundry/alloy/electrum"})
    // e.remove({ id: "oritech:foundry/alloy/inverse/electrum"})
    // e.remove({ id: "oritech:crafting/alloy/rawsilicon" })
    // e.remove({ id: "oritech:centrifuge/redstoneuran" })
    // e.remove({ id: "oritech:grinder/dust/uranium" })
})