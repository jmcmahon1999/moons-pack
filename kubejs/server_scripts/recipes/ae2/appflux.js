ServerEvents.recipes(e => {
    e.remove({ id: "appflux:insulating_resin" })
    e.custom({
        type: "modern_industrialization:mixer",
        duration: 100,
        eu: 2,
        item_inputs: [
            {
            amount: 1,
            tag: "c:dusts/lead"
            },
            {
            amount: 1,
            tag: "c:slime_balls"
            },
            {
                amount: 1,
                item: "ae2:silicon"
            }
        ],
        fluid_inputs: [
            {
                amount: 100,
                fluid: "modern_industrialization:synthetic_rubber"
            }
        ],
        item_outputs: [
            {
                amount: 2,
                item: "appflux:insulating_resin"
            }
        ]
    })

    e.remove({ id: "appflux:transform/redstone_crystal" })
    e.custom({
        type: "ae2:transform",
        ingredients: [
            {
            item: "minecraft:redstone_block"
            },
            {
            item: "ae2:fluix_crystal"
            },
            {
            item: "modern_industrialization:battery_alloy_dust"
            }
        ],
        result: {
            count: 2,
            id: "appflux:redstone_crystal"
        }
    })

    e.remove({ id: "advanced_ae:redstone_crystal" })
    e.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:mod_loaded",
            "modid": "appflux"
            }
        ],
        "type": "advanced_ae:reaction",
        "input_energy": 20000,
        "input_fluid": {
            "amount": 500,
            "ingredient": {
            "fluid": "minecraft:water"
            }
        },
        "input_items": [
            {
            "amount": 16,
            "ingredient": {
                "item": "minecraft:redstone_block"
            }
            },
            {
            "amount": 16,
            "ingredient": {
                "item": "ae2:fluix_crystal"
            }
            },
            {
            "amount": 16,
            "ingredient": {
                "item": "modern_industrialization:battery_alloy_dust"
            }
            }
        ],
        "output": {
            "#": 64,
            "#t": "ae2:i",
            "id": "appflux:redstone_crystal"
        }
    })

    e.replaceInput({ id: "me_beam_former:beam_former_part"},
        "ae2:logic_processor",
        "appflux:energy_processor"
    )

    e.replaceInput({ mod: "me_beam_former" },
        "ae2:energy_acceptor",
        "appflux:flux_accessor"
    )

    e.remove({ id: "me_beam_former:wireless_energy_tower" })
    e.shaped("me_beam_former:wireless_energy_tower",
        [
            " w ",
            " R ",
            "iBi"
        ],
        {
            w: "ae2:wireless_receiver",
            R: "appflux:charged_redstone_block",
            i: "appflux:harden_insulating_resin",
            B: "appflux:flux_accessor" 
        }
    )
})