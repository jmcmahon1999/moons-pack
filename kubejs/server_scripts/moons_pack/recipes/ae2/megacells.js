ServerEvents.recipes(e => {

    e.remove({ id: "megacells:transform/sky_steel_ingot" })
    e.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "fluid",
            "tag": "minecraft:lava"
        },
        "ingredients": [
            {
            "item": "ae2:charged_certus_quartz_crystal"
            },
            {
            "item": "aethersdelight:arkenium_ingot"
            },
            {
            "item": "ae2:sky_stone_block"
            }
        ],
        "result": {
            "count": 2,
            "id": "megacells:sky_steel_ingot"
        }
    })

    e.remove("extendedae:assembler/sky_steel")
    e.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:mod_loaded",
            "modid": "megacells"
            }
        ],
        "type": "extendedae:crystal_assembler",
        "input_fluid": {
            "amount": 100,
            "ingredient": {
            "fluid": "minecraft:lava"
            }
        },
        "input_items": [
            {
            "amount": 4,
            "ingredient": {
                "item": "ae2:charged_certus_quartz_crystal"
            }
            },
            {
            "amount": 4,
            "ingredient": {
                "item": "aethersdelight:arkenium_ingot"
            }
            },
            {
            "amount": 4,
            "ingredient": {
                "item": "ae2:sky_stone_block"
            }
            }
        ],
        "output": {
            "count": 8,
            "id": "megacells:sky_steel_ingot"
        }
    })

    e.remove("advanced_ae:skysteel")
    e.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:mod_loaded",
            "modid": "megacells"
            }
        ],
        "type": "advanced_ae:reaction",
        "input_energy": 200000,
        "input_fluid": {
            "amount": 500,
            "ingredient": {
            "fluid": "minecraft:lava"
            }
        },
        "input_items": [
            {
            "amount": 16,
            "ingredient": {
                "item": "ae2:charged_certus_quartz_crystal"
            }
            },
            {
            "amount": 16,
            "ingredient": {
                "item": "aethersdelight:arkenium_ingot"
            }
            },
            {
            "amount": 16,
            "ingredient": {
                "item": "ae2:sky_stone_block"
            }
            }
        ],
        "output": {
            "#": 64,
            "#t": "ae2:i",
            "id": "megacells:sky_steel_ingot"
        }
    })

    e.remove({ id: "megacells:transform/sky_bronze_ingot" })
    e.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "fluid",
            "tag": "minecraft:lava"
        },
        "ingredients": [
            {
            "item": "ae2:charged_certus_quartz_crystal"
            },
            {
            "item": "modern_industrialization:bronze_ingot"
            },
            {
            "item": "ae2:sky_stone_block"
            }
        ],
        "result": {
            "count": 2,
            "id": "megacells:sky_bronze_ingot"
        }
    })
    e.remove("extendedae:assembler/sky_bronze")
    e.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:mod_loaded",
            "modid": "megacells"
            }
        ],
        "type": "extendedae:crystal_assembler",
        "input_fluid": {
            "amount": 100,
            "ingredient": {
            "fluid": "minecraft:lava"
            }
        },
        "input_items": [
            {
            "amount": 4,
            "ingredient": {
                "item": "ae2:charged_certus_quartz_crystal"
            }
            },
            {
            "amount": 4,
            "ingredient": {
                "item": "modern_industrialization:bronze_ingot"
            }
            },
            {
            "amount": 4,
            "ingredient": {
                "item": "ae2:sky_stone_block"
            }
            }
        ],
        "output": {
            "count": 8,
            "id": "megacells:sky_bronze_ingot"
        }
    })

    e.remove("advanced_ae:skybronze")
    e.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:mod_loaded",
            "modid": "megacells"
            }
        ],
        "type": "advanced_ae:reaction",
        "input_energy": 200000,
        "input_fluid": {
            "amount": 500,
            "ingredient": {
            "fluid": "minecraft:lava"
            }
        },
        "input_items": [
            {
            "amount": 16,
            "ingredient": {
                "item": "ae2:charged_certus_quartz_crystal"
            }
            },
            {
            "amount": 16,
            "ingredient": {
                "item": "modern_industrialization:bronze_ingot"
            }
            },
            {
            "amount": 16,
            "ingredient": {
                "item": "ae2:sky_stone_block"
            }
            }
        ],
        "output": {
            "#": 64,
            "#t": "ae2:i",
            "id": "megacells:sky_bronze_ingot"
        }
    })
})