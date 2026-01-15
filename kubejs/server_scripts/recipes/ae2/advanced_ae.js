ServerEvents.recipes(e => {
    // ================ AdvancedAE ================

    e.remove({ output: "advanced_ae:reaction_chamber" })
    e.shaped("advanced_ae:reaction_chamber",
        [
            "EME",
            "EVE",
            "GBG"
        ],
        {
            E: "ae2:fluix_dust",
            G: "minecraft:glowstone_dust",
            B: "minecraft:bucket",
            M: "ae2:condenser",
            V: "extended_industrialization:processing_array"
        }
    )

    e.remove({ output: "advanced_ae:quantum_processor" })
    e.custom({
        type: "ae2:inscriber",
        ingredients: {
            bottom: {
                item: "ae2:printed_silicon"
            },
            middle: {
                item: "modern_industrialization:qubit"
            },
            top: {
                item: "advanced_ae:printed_quantum_processor"
            }
        },
        mode: "press",
        result: {
            count: 1,
            id: "advanced_ae:quantum_processor"
        }
    })

    e.remove({ id: "advanced_ae:quantum_alloy" })
    e.custom({
        type: "advanced_ae:reaction",
        input_energy: 200000,
        input_fluid: {
            amount: 1000,
            ingredient: { fluid: "advanced_ae:quantum_infusion_source" }
        },
        input_items: [
            {
                amount: 4,
                ingredient: { item: "modern_industrialization:superconductor_ingot" }
            },
            {
                amount: 4,
                ingredient: { item: "advanced_ae:shattered_singularity" }
            },
            {
                amount: 4,
                ingredient: { item: "ae2:singularity" }
            }
        ],
        output: {
            "#": 1,
            "#t": "ae2:i",
            "id": "advanced_ae:quantum_alloy"
        }
        })
})