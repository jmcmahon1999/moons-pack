ServerEvents.recipes(e => {
    e.custom({
        "type": "exposure:film_developing",
        "film": {
            "tag": "exposure:color_film_rolls"
        },
        "ingredients": [
            [
                {
                    "item": "modern_industrialization:silver_tiny_dust"
                }
            ],
            [
                {
                    "item": "modern_industrialization:sulfur_tiny_dust"
                }
            ],
            [
            {
                "type": "neoforge:components",
                "items": "minecraft:potion",
                "components": {
                "minecraft:potion_contents": {
                    "potion": "minecraft:water"
                }
                }
            }
            ]
        ],
        "result": {
            "id": "exposure:developed_color_film"
        }
    })
})