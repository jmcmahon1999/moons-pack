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

    e.remove({ id: "megacells:transform/sky_osmium_ingot" })
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
})