ServerEvents.recipes(e => {

    e.replaceInput({mod: "mekanismgenerators" },
        "modern_industrialization:lead_ingot",
        "modern_industrialization:nuclear_alloy_plate"
    )

    e.replaceInput({mod: "mekanismgenerators" },
        "minecraft:gold_ingot",
        "modern_industrialization:electrum_plate"
    )

    e.replaceInput({mod: "mekanismgenerators" },
        "modern_industrialization:steel_ingot",
        "modern_industrialization:stainless_steel_plate"
    )

    e.replaceInput({mod: "mekanismgenerators" },
        "minecraft:iron_ingot",
        "modern_industrialization:steel_large_plate"
    )
})