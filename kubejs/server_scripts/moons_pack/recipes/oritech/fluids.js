ServerEvents.recipes(e => {

    e.remove("oritech:refinery/oilbase")
    e.custom({
        "type": "oritech:refinery",
        "fluidInput": {
            "fluid": "modern_industrialization:crude_oil"
        },
        "fluidOutputs": [
            {
                "amount": 500,
                "fluid": "oritech:still_heavy_oil"
            },
            {
                "amount": 250,
                "fluid": "oritech:still_naphtha"
            },
            {
                "amount": 250,
                "fluid": "oritech:still_sulfuric_acid"
            }
        ],
        "ingredients": [],
        "results": [],
        "time": 80
    })

    e.remove("oritech:refinery/oilalt")
    e.custom({
        "type": "oritech:refinery",
        "fluidInput": {
            "fluid": "modern_industrialization:crude_oil"
        },
        "fluidOutputs": [
            {
            "amount": 500,
            "fluid": "oritech:still_diesel"
            },
            {
            "amount": 500,
            "fluid": "oritech:still_naphtha"
            },
            {
            "amount": 500,
            "fluid": "oritech:still_sulfuric_acid"
            }
        ],
        "ingredients": [
            {
            "item": "oritech:clay_catalyst_beads"
            }
        ],
        "results": [],
        "time": 128
    })
})