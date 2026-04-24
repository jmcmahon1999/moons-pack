ServerEvents.recipes(e => {

    let replacements = [
    ]

    for (let items of replacements) {
        e.replaceInput({ mod: "oritech", input: `oritech:${items[0]}`},
            `oritech:${items[0]}`,
            `modern_industrialization:${items[1]}`
        )
    }

    e.replaceInput({ mod: "oritech", input: `#c:furnaces`},
        `#c:furnaces`,
        `modern_industrialization:electric_furnace`
    )

    e.remove("oritech:foundry/alloy/adamant")
    e.remove("oritech:crafting/alloy/adamant")
    e.custom({
        "type": "oritech:foundry",
        "ingredients": [
            {
            "tag": "c:gems/diamond"
            },
            {
            "tag": "c:ingots/netherite"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "oritech:adamant_ingot"
            }
        ],
        "time": 80
    })

    e.remove("oritech:foundry/alloy/duratium")
    e.custom({
        "type": "oritech:foundry",
        "ingredients": [
            {
            "item": "oritech:platinum_ingot"
            },
            {
            "item": "enderitemod:enderite_ingot"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "oritech:duratium_ingot"
            }
        ],
        "time": 80
    })
    e.custom({
        "type": "oritech:atomic_forge",
        "ingredients": [
            {
            "item": "oritech:platinum_ingot"
            },
            {
            "item": "enderitemod:enderite_scrap"
            },
            {
            "item": "enderitemod:enderite_scrap"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "oritech:uranium_gem"
            }
        ],
        "time": 20
    })

    e.remove("oritech:foundry/alloy/energite")
    e.custom({
        "type": "oritech:foundry",
        "ingredients": [
            {
            "item": "modern_industrialization:superconductor_ingot"
            },
            {
            "item": "oritech:platinum_ingot"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "oritech:energite_ingot"
            }
        ],
        "time": 80
    })

    e.remove("oritech:laser/plutoniumdust")
    e.custom({
        "type": "oritech:laser",
        "ingredients": [
            {
            "item": "oritech:uranium_crystal"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "modern_industrialization:plutonium_tiny_dust"
            }
        ],
        "time": 10
    })

    e.remove("oritech:atomicforge/urandustgem")
    e.remove("oritech:atomicforge/urandust")
    e.custom({
        "type": "oritech:atomic_forge",
        "ingredients": [
            {
            "item": "oritech:fluxite"
            },
            {
            "item": "modern_industrialization:uranium_235_dust"
            },
            {
            "item": "modern_industrialization:uranium_235_dust"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "oritech:uranium_gem"
            }
        ],
        "time": 5
    })


    e.replaceInput({ id: "oritech:crafting/nukebetter"},
        "minecraft:tnt",
        "modern_industrialization:nuke"
    )

    e.replaceInput({ id: "oritech:crafting/nuke"},
        "minecraft:tnt",
        "modern_industrialization:nuke"
    )


    e.remove("oritech:refinery/siliconwashing")
    e.custom({
        "type": "oritech:refinery",
        "fluidInput": {
            "fluid": "oritech:still_silicon_wash"
        },
        "ingredients": [
            {
            "item": "modern_industrialization:silicon_dust"
            }
        ],
        "results": [
            {
            "count": 4,
            "id": "oritech:silicon"
            }
        ],
        "time": 160
    })

    e.remove("oritech:centrifuge/fluid/siliconwashbad")
    e.remove("oritech:centrifuge/fluid/siliconwash")
    e.custom({
        "type": "oritech:centrifuge_fluid",
        "fluidInput": {
            "fluid": "modern_industrialization:polyvinyl_chloride"
        },
        "fluidOutputs": [
            {
            "fluid": "oritech:still_silicon_wash"
            }
        ],
        "ingredients": [
            {
            "tag": "c:dusts/quartz"
            }
        ],
        "results": [],
        "time": 100
    })


    e.remove("oritech:foundry/alloy/energite")
    
    // REMOVALS ===============================

    // Steel

    e.remove("oritech:biosteel_ingot_from_smelting_biosteel_dust")
    e.remove("oritech:foundry/alloy/steel")
    e.remove("oritech:foundry/alloy/biosteel")
    e.remove("oritech:grinder/biosteel")
    e.remove("oritech:pulverizer/biosteel")

    e.remove("oritech:foundry/alloy/electrum")
    e.remove("oritech:crafting/alloy/electrum")
    e.remove("oritech:foundry/alloy/netherite")
    e.remove("oritech:crafting/alloy/rawsilicon")
    e.remove("oritech:particle/netherite")
    e.remove("oritech:particle/diamond")
    e.remove("oritech:particle/plutonium")
    e.remove("oritech:particle/elytra")
    e.remove("oritech:particle/enderic_compound")
    e.remove("oritech:particle/echo_shard")

    e.remove("oritech:foundry/alloy/compat/mekanism/bronze")
})