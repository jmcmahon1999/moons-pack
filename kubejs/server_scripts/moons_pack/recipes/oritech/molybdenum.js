ServerEvents.recipes(e => {
    e.remove("oritech:pulverizer/ore/platinum")
    e.custom({
        "type": "oritech:pulverizer",
        "ingredients": [
            {
            "item": "oritech:endstone_platinum_ore"
            }
        ],
        "results": [
            {
            "count": 2,
            "id": "oritech:raw_platinum"
            }
        ],
        "time": 150
    })

    e.remove("oritech:grinder/ore/nickel")
    e.custom({
        "type": "oritech:grinder",
        "ingredients": [
            {
            "tag": "c:ores/nickel"
            }
        ],
        "results": [
            {
            "count": 2,
            "id": "oritech:raw_nickel"
            }
        ],
        "time": 40
    })

    e.remove("oritech:grinder/compat/mekanism/ore/osmium")
    e.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:mod_loaded",
            "modid": "mekanism"
            },
            {
            "type": "neoforge:not",
            "value": {
                "type": "neoforge:mod_loaded",
                "modid": "jaopca"
            }
            }
        ],
        "type": "oritech:grinder",
        "ingredients": [
            {
            "tag": "c:ores/osmium"
            }
        ],
        "results": [
            {
            "count": 2,
            "id": "mekanism:raw_osmium"
            }
        ]
    })

    e.remove("oritech:grinder/raw/platinum")
    e.custom({
        "type": "oritech:grinder",
        "ingredients": [
            {
            "item": "oritech:raw_platinum"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "oritech:platinum_clump"
            },
            {
            "count": 3,
            "id": "oritech:small_platinum_clump"
            },
            {
            "count": 1,
            "id": "oritech:fluxite"
            }
        ]
    })
    e.remove("oritech:pulverizer/raw/platinum")
    e.custom({
        "type": "oritech:grinder",
        "ingredients": [
            {
            "item": "oritech:raw_platinum"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "oritech:platinum_clump"
            },
            {
            "count": 3,
            "id": "oritech:small_platinum_clump"
            },
            {
            "count": 1,
            "id": "oritech:fluxite"
            }
        ]
    })
    e.remove("oritech:grinder/raw/nickel")
    e.custom({
        "type": "oritech:grinder",
        "ingredients": [
            {
            "tag": "c:raw_materials/nickel"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "oritech:nickel_clump"
            },
            {
            "count": 3,
            "id": "oritech:small_nickel_clump"
            }
        ],
        "time": 40
    })
    e.remove("oritech:grinder/compat/mekanism/raw/osmium")
    e.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:mod_loaded",
            "modid": "mekanism"
            },
            {
            "type": "neoforge:not",
            "value": {
                "type": "neoforge:mod_loaded",
                "modid": "jaopca"
            }
            }
        ],
        "type": "oritech:grinder",
        "ingredients": [
            {
            "tag": "c:raw_materials/osmium"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "mekanism:clump_osmium"
            },
            {
            "count": 3,
            "id": "mekanism:nugget_osmium"
            }
        ]
    })
    e.remove("oritech:grinder/smalldust/platinum")
    e.custom({
        "type": "oritech:grinder",
        "ingredients": [
            {
            "item": "oritech:platinum_nugget"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "oritech:small_platinum_dust"
            },
        ],
        "time": 40
    })
    e.custom({
        "type": "oritech:grinder",
        "ingredients": [
            {
            "item": "modern_industrialization:platinum_nugget"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "modern_industrialization:platinum_tiny_dust"
            },
        ],
        "time": 40
    })
    e.remove("oritech:grinder/dust/platinum")
    e.custom({
        "type": "oritech:grinder",
        "ingredients": [
            {
            "item": "oritech:platinum_ingot"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "oritech:platinum_dust"
            },
        ],
        "time": 40
    })
    e.custom({
        "type": "oritech:grinder",
        "ingredients": [
            {
            "item": "modern_industrialization:platinum_ingot"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "modern_industrialization:platinum_dust"
            },
        ],
        "time": 40
    })

    e.remove("oritech:pulverizer/smalldust/platinum")
    e.custom({
        "type": "oritech:pulverizer",
        "ingredients": [
            {
            "item": "oritech:platinum_nugget"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "oritech:small_platinum_dust"
            },
        ],
        "time": 40
    })
    e.custom({
        "type": "oritech:pulverizer",
        "ingredients": [
            {
            "item": "modern_industrialization:platinum_nugget"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "modern_industrialization:platinum_tiny_dust"
            },
        ],
        "time": 40
    })
    e.remove("oritech:pulverizer/dust/platinum")
    e.custom({
        "type": "oritech:pulverizer",
        "ingredients": [
            {
            "item": "oritech:platinum_ingot"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "oritech:platinum_dust"
            },
        ],
        "time": 100
    })
    e.custom({
        "type": "oritech:pulverizer",
        "ingredients": [
            {
            "item": "modern_industrialization:platinum_ingot"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "modern_industrialization:platinum_dust"
            },
        ],
        "time": 100
    })

    e.replaceInput({id: "oritech:platinum_blockblock"},
        "modern_industrialization:platinum_ingot",
        "oritech:platinum_ingot"
    )

    e.replaceInput({id: "oritech:platinum_blockblockinv"},
        "modern_industrialization:platinum_block",
        "oritech:platinum_block"
    )

    e.replaceInput({id: "oritech:raw_platinum_blockblock"},
        "modern_industrialization:raw_platinum",
        "oritech:raw_platinum"
    )

    e.replaceInput({id: "oritech:raw_platinum_blockblock"},
        "modern_industrialization:platinum_block",
        "oritech:platinum_block"
    )
})