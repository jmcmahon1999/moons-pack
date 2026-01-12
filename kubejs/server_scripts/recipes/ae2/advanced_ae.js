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
})