ServerEvents.recipes(e => {
    e.remove({ id: "extendedae:assembler/concurrent_processor_press" })
    e.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
            "amount": 4,
            "ingredient": {
                "item": "modern_industrialization:chromium_plate"
            }
            },
            {
            "amount": 4,
            "ingredient": {
                "tag": "c:gems/entro"
            }
            },
            {
            "ingredient": {
                "item": "ae2:silicon_press"
            }
            }
        ],
        "output": {
            "count": 1,
            "id": "extendedae:concurrent_processor_press"
        }
    })

    e.replaceInput({ id: "extendedae:water_cell"},
        "minecraft:diamond",
        "replication:replica_ingot"
    )

    e.replaceInput({ id: "extendedae:cobblestone_cell"},
        "minecraft:diamond",
        "replication:replica_ingot"
    )
})