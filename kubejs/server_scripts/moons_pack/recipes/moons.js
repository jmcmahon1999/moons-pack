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
})