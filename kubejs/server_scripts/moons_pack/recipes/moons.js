ServerEvents.recipes(e => {
    e.custom({
        type: "modern_industrialization:implosion_compressor",
        eu: 1,
        duration: 10,
        item_inputs: [
            {
                item: "aether:zanite_gemstone",
                amount: 64
            },
            {
                item: "modern_industrialization:nuke",
                amount: 1
            }
        ],
        item_outputs: {
            item: "modern_industrialization:purified_zanite",
            amount: 1
        }
    })

    e.custom({
        type: "oritech:atomic_forge",
        fluidInputAmount: 0,
        fluidInputVariant: "minecraft:empty",
        fluidOutputAmount: 0,
        fluidOutputVariant: "minecraft:empty",
        ingredients: [
            {
                item: "modern_industrialization:purified_zanite"
            },
            {
                item: "aether:zanite_ring"
            },
            {
                item: "aether:zanite_ring"
            }
        ],
        results: [
            {
                count: 1,
                id: "modern_industrialization:zanite_aperture"
            }
        ],
        time: 60
    })

    e.custom({
        type: "modern_industrialization:implosion_compressor",
        eu: 1,
        duration: 10,
        item_inputs: [
            {
                item: "modern_industrialization:ultradense_metal_ball",
                amount: 1
            },
            {
                item: "modern_industrialization:qubit",
                amount: 1
            },
            {
                item: "modern_industrialization:nuke",
                amount: 1
            }
        ],
        item_outputs: {
            item: "portablehole:portable_hole",
            amount: 1
        }
    })


    e.replaceInput({mod: "portable_blueprints"},
        "minecraft:redstone",
        "modern_industrialization:analog_circuit"
    )

    e.replaceInput({mod: "portable_blueprints"},
        "minecraft:glass",
        "exposure:camera"
    )


    e.remove("portalgun:portal_gun")
    e.shaped("portalgun:portal_gun",
        [
            "   ",
            "CSB",
            "   "
        ],
        {
            C: "portalgun:portal_gun_claw",
            B: "portalgun:portal_gun_body",
            S: "modern_industrialization:singularity"
        }
    )

    e.replaceInput({mod: "portalgun"},
        "minecraft:stone",
        "replication:replica_ingot"
    )

    e.replaceInput({mod: "portalgun"},
        "minecraft:quartz_block",
        "modern_industrialization:iridium_curved_plate"
    )

    e.replaceInput({mod: "portalgun"},
        "minecraft:quartz_block",
        "modern_industrialization:iridium_curved_plate"
    )

    e.replaceInput({mod: "portalgun"},
        "minecraft:nether_star",
        "mekanism:teleportation_core"
    )

    e.replaceInput({mod: "portalgun"},
        "minecraft:redstone",
        "modern_industrialization:quantum_circuit"
    )

    e.remove("easy_villagers:farmer")
    e.remove("easy_villagers:breeder")
    e.remove("easy_villagers:converter")
    e.remove("easy_villagers:iron_farm")
    e.remove("easy_villagers:incubator")
    e.remove("easy_villagers:inventory_viewer")
    e.shaped("easy_villagers:trader",
        [
            "GGG",
            "GCG",
            "NIN"
        ],
        {
            G: "#c:glass_panes/colorless",
            C: "modern_industrialization:digital_circuit",
            I: "minecraft:iron_ingot",
            N: "minecraft:netherite_ingot"
        }
    )
    e.shaped("easy_villagers:trader",
        [
            "GGG",
            "GCG",
            "III"
        ],
        {
            G: "#c:glass_panes/colorless",
            C: "modern_industrialization:processing_unit",
            I: "minecraft:netherite_ingot"
        }
    )
    e.remove("youkaishomecoming:/copper_faucet_from_copper_ingot_stonecutting_exported_mi_cutting_machine")
})