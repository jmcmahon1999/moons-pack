ServerEvents.recipes(e => {
    e.custom({
        "type": "modern_industrialization:compressor",
        "duration": 100,
        "eu": 2,
        "item_inputs": [
            {
            "amount": 2,
            "item": "modern_industrialization:silicon_tiny_dust"
            }
        ],
        "item_outputs": [
            {
            "amount": 1,
            "item": "ae2:silicon"
            }
        ]
    })
})