ServerEvents.recipes(e => {
    e.remove({id: "dimdoors:rift_signature"})
    e.custom({
        "type": "dimdoors:shaped_tesselating",
        "key": {
            "O": {
            "item": "psi:psigem"
            },
            "X": {
            "tag": "c:ingots/iron"
            }
        },
        "pattern": [
            " X ",
            "XOX",
            " X "
        ],
        "result": {
            "count": 1,
            "id": "dimdoors:rift_signature"
        }
    })

    e.remove({id: "dimdoors:stabilized_rift_signature"})
    e.custom({
        "type": "dimdoors:shaped_tesselating",
        "key": {
            "O": {
            "item": "psi:psigem"
            },
            "X": {
            "item": "dimdoors:rift_signature"
            }
        },
        "pattern": [
            " X ",
            "XOX",
            " X "
        ],
        "result": {
            "count": 1,
            "id": "dimdoors:stabilized_rift_signature"
        }
    })

    e.remove({id: "dimdoors:rift_remover"})
    e.custom({
        "type": "dimdoors:shaped_tesselating",
        "key": {
            "O": {
            "item": "psi:psigem"
            },
            "X": {
            "tag": "c:ingots/gold"
            }
        },
        "pattern": [
            " X ",
            "XOX",
            " X "
        ],
        "result": {
            "count": 1,
            "id": "dimdoors:rift_remover"
        }
    })

    e.remove({id: "dimdoors:rift_stabilizer"})
    e.custom({
        "type": "dimdoors:shaped_tesselating",
        "key": {
            "O": {
            "item": "psi:psigem"
            },
            "X": {
            "item": "dimdoors:rift_remover"
            }
        },
        "pattern": [
            " X ",
            "XOX",
            " X "
        ],
        "result": {
            "count": 1,
            "id": "dimdoors:rift_stabilizer"
        }
    })

    e.remove({id: "dimdoors:stable_fabric"})
    e.custom({
        "type": "dimdoors:shaped_tesselating",
        "key": {
            "O": {
            "item": "psi:psigem"
            },
            "X": {
            "item": "dimdoors:world_thread"
            }
        },
        "pattern": [
            "XXX",
            "XOX",
            "XXX"
        ],
        "result": {
            "count": 1,
            "id": "dimdoors:stable_fabric"
        }
    })

    e.remove({id: "dimdoors:rift_blade"})
    e.custom({
        "type": "dimdoors:shaped_tesselating",
        "key": {
            "O": {
            "item": "dimdoors:world_thread"
            },
            "X": {
            "item": "psi:psimetal_sword"
            }
        },
        "pattern": [
            "  O",
            " O ",
            "X  "
        ],
        "result": {
            "count": 1,
            "id": "dimdoors:rift_blade"
        }
    })


    e.replaceInput({mod: "dimdoors", output: "#dimdoors:dimensional_doors"},
        "#c:ender_pearls",
        "dimdoors:world_thread"
    )

    const colours = [
        "white",
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "gray",
        "light_gray",
        "cyan",
        "purple",
        "blue",
        "brown",
        "green",
        "red",
        "black"
    ]

    for (let colour of colours) {
        e.remove({id: `dimdoors:${colour}_fabric`})
        e.custom({
            "type": "dimdoors:shaped_tesselating",
            "key": {
                "O": {
                "item": `minecraft:${colour}_dye`
                },
                "X": {
                "item": "dimdoors:world_thread"
                }
            },
            "pattern": [
                " X ",
                "XOX",
                " X "
            ],
            "result": {
                "count": 1,
                "id": `dimdoors:${colour}_fabric`
            }
        })
    }

    e.remove({id: "dimdoors:rift_pearl"})
    e.custom({
        "type": "dimdoors:shaped_tesselating",
        "key": {
            "O": {
            "item": "dimdoors:stable_fabric"
            },
            "X": {
            "item": "mekanism:teleportation_core"
            }
        },
        "pattern": [
            "OOO",
            "OXO",
            "OOO"
        ],
        "result": {
            "count": 1,
            "id": "dimdoors:rift_pearl"
        }
    })
})