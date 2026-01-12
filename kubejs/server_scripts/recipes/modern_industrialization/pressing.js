ServerEvents.recipes(e => {

    let metals = [
        "bronze",
        "silver",
        "steel",
        "tin",
        "compressed_iron"
    ]

    for (let metal of metals) {
        e.custom({
            type: "create:pressing",
            ingredients: [
                { item: `modern_industrialization:${metal}_ingot` },
            ],
            results: [{
                item: {
                    id: `modern_industrialization:${metal}_plate`
                }
            }]
        })
    }

    metals = [
        "bronze",
        "silver",
        "steel",
        "tin",
        "copper",
        "gold",
        "iron",

    ]
    for (let metal of metals) {
        e.remove({ type: "modern_industrialization:forge_hammer", output: `modern_industrialization:${metal}_plate`})
    }

})