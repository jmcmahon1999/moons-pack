ServerEvents.recipes(e => {

    e.replaceInput({mod: "replication"},
        "minecraft:diamond",
        "advanced_ae:quantum_processor"
    )

    e.replaceInput({mod: "replication"},
        "minecraft:redstone",
        "advanced_ae:quantum_infused_dust"
    )

    e.replaceInput({mod: "replication", output: "replication:identification_chamber"},
        "minecraft:piston",
        "advanced_ae:quantum_crafter"
    )

    e.replaceInput({mod: "replication", output: "replication:matter_blueprint"},
        "minecraft:piston",
        "modern_industrialization:iridium_plate"
    )

    e.replaceInput({mod: "replication", output: "replication:matter_blueprint"},
        "minecraft:blaze_powder",
        "advanced_ae:quantum_infused_dust"
    )

    e.replaceInput({mod: "replication"},
        "#c:glass_blocks",
        "advanced_ae:quantum_structure"
    )

    e.replaceInput({mod: "replication"},
        "#c:glass_panes",
        "advanced_ae:quantum_structure"
    )

    e.replaceInput({mod: "replication"},
        "#c:chests/wooden",
        "advanced_ae:quantum_storage_128"
    )

    e.replaceInput({mod: "replication"},
        "minecraft:gold_ingot",
        "modern_industrialization:quantum_circuit_board"
    )

    e.replaceInput({mod: "replication"},
        "minecraft:iron_ingot",
        "modern_industrialization:iridium_plate"
    )

    e.replaceInput({mod: "replication"},
        "minecraft:iron_trapdoor",
        "advanced_ae:quantum_alloy_plate"
    )

})