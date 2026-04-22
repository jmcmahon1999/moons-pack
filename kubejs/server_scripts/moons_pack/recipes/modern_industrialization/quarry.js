ServerEvents.recipes(e => {

    e.shaped("modern_industrialization:gravitite_drill",
        [
            "GPH",
            "McF",
            "CpG"
        ],
        {
            G: "modern_industrialization:iron_gear",
            M: "modern_industrialization:advanced_motor",
            C: "modern_industrialization:aluminum_cable",
            p: "modern_industrialization:advanced_pump",
            P: "#modern_industrialization:item_pipes",
            F: "#modern_industrialization:fluid_pipes",
            c: "modern_industrialization:digital_circuit",
            H: "aether:enchanted_gravitite"
        }
    )

    e.remove({ id: "modern_industrialization:compat/mekanism/quary/digital_miner"})

    e.custom({
        "type": "modern_industrialization:quarry",
        "eu": 4,
        "duration": 600,
        "item_inputs": {
            "item": "modern_industrialization:bronze_drill",
            "amount": 1,
            "probability": 0.04
        },
        "item_outputs": [
            {
            "item": "minecraft:iron_ore",
            "amount": 1,
            "probability": 0.4
            },
            {
            "item": "minecraft:coal_ore",
            "amount": 1,
            "probability": 0.4
            },
            {
            "item": "modern_industrialization:lignite_coal_ore",
            "amount": 1,
            "probability": 0.24
            },
            {
            "item": "minecraft:copper_ore",
            "amount": 1,
            "probability": 0.2
            },
            {
            "item": "modern_industrialization:tin_ore",
            "amount": 1,
            "probability": 0.3
            },
            {
            "item": "minecraft:gold_ore",
            "amount": 1,
            "probability": 0.15
            },
            {
            "item": "minecraft:redstone_ore",
            "amount": 1,
            "probability": 0.2
            },
            {
            "neoforge:conditions": [
                { "type": "neoforge:mod_loaded", "modid": "create" }
            ],
            "item": "create:zinc_ore",
            "amount": 1,
            "probability": 0.08
            },
            {
            "neoforge:conditions": [
                { "type": "neoforge:mod_loaded", "modid": "mekanism" }
            ],
            "item": "mekanism:osmium_ore",
            "amount": 1,
            "probability": 0.12
            },
            {
            "neoforge:conditions": [
                { "type": "neoforge:mod_loaded", "modid": "railcraft" }
            ],
            "item": "railcraft:zinc_ore",
            "amount": 1,
            "probability": 0.2
            }
        ]
        }
    )

    e.custom({
        "type": "modern_industrialization:quarry",
        "eu": 4,
        "duration": 600,
        "item_inputs": {
            "item": "modern_industrialization:bronze_drill",
            "amount": 1,
            "probability": 0.04
        },
        "item_outputs": [
            {
                "item": "aethersdelight:arkenium_ore",
                "amount": 1,
                "probability": 0.4
            },
            {
                "item": "aether:zanite_ore",
                "amount": 1,
                "probability": 0.24
            },
            {
                "item": "aether:ambrosium_ore",
                "amount": 1,
                "probability": 0.3
            },
            {
                "item": "aether:gravitite_ore",
                "amount": 1,
                "probability": 0.08
            },
        ]
    })
})