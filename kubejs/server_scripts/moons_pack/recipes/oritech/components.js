ServerEvents.recipes(e => {

    // Magentic Coil
    e.remove("oritech:assembler/magnet")
    e.custom({
        "type": "oritech:assembler",
        "ingredients": [
            {
            "item": "modern_industrialization:steel_rod_magnetic"
            },
            {
            "item": "modern_industrialization:inductor"
            },
            {
            "item": "modern_industrialization:inductor"
            },
            {
            "item": "modern_industrialization:nickel_ring"
            }
        ],
        "results": [
            {
            "count": 8,
            "id": "oritech:magnetic_coil"
            }
        ],
        "time": 48
    })

    e.remove("oritech:crafting/magnet")
    e.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "r": {
            "item": "modern_industrialization:steel_rod_magnetic"
            },
            "i": {
            "item": "modern_industrialization:inductor"
            },
            "s": {
            "item": "modern_industrialization:nickel_ring"
            }
        },
        "pattern": [
            "ir ",
            "si ",
            "   "
        ],
        "result": {
            "count": 4,
            "id": "oritech:magnetic_coil"
        }
    })

    e.remove("oritech:assembler/batterybetter")
    e.remove("oritech:assembler/battery")
    e.remove("oritech:centrifuge/fluid/battery_acid")
    e.remove("oritech:motor/manualbattery")

    e.shaped("oritech:basic_battery",
        [
            " p ",
            "cfc",
            "cfc"
        ],
        {
            p: "modern_industrialization:battery_alloy_plate",
            c: "modern_industrialization:battery_alloy_curved_plate",
            f: "oritech:fluxite"

        }
    )
    e.custom({
        "type": "oritech:assembler",
        "ingredients": [
            {
            "item": "modern_industrialization:battery_alloy_plate"
            },
            {
            "item": "oritech:fluxite"
            },
            {
            "item": "oritech:fluxite"
            },
            {
            "item": "modern_industrialization:battery_alloy_curved_plate"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "oritech:basic_battery"
            }
        ],
        "time": 48
    })

    e.remove("oritech:motor/advbattery")
    e.remove("oritech:centrifuge/fluid/advbatteryacid")
    e.shaped("oritech:advanced_battery",
        [
            " p ",
            "cfc",
            "cfc"
        ],
        {
            p: "modern_industrialization:battery_alloy_plate",
            c: "modern_industrialization:battery_alloy_curved_plate",
            f: "oritech:energite_ingot"

        }
    )
    e.custom({
        "type": "oritech:assembler",
        "ingredients": [
            {
            "item": "modern_industrialization:battery_alloy_plate"
            },
            {
            "item": "oritech:energite_ingot"
            },
            {
            "item": "oritech:energite_ingot"
            },
            {
            "item": "modern_industrialization:battery_alloy_curved_plate"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "oritech:advanced_battery"
            }
        ],
        "time": 48
    })

    e.remove("oritech:centrifuge/carbon")
    e.custom({
        "type": "oritech:centrifuge",
        "ingredients": [
            {
            "item": "modern_industrialization:carbon_plate"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "oritech:carbon_fibre_strands"
            }
        ],
        "time": 50
    })

    e.remove("oritech:assembler/superconductor")
    e.custom({
        "type": "oritech:assembler",
        "ingredients": [
            {
            "item": "oritech:flux_gate"
            },
            {
            "item": "modern_industrialization:superconductor_cable"
            },
            {
            "item": "oritech:dubios_container"
            },
            {
            "item": "oritech:energite_ingot"
            }
        ],
        "results": [
            {
            "count": 4,
            "id": "oritech:superconductor"
            }
        ],
        "time": 192
    })


    // CIRCUITS

    e.remove("oritech:assembler/processingunit")
    e.custom({
        "type": "oritech:assembler",
        "ingredients": [
            {
            "tag": "c:plates/plastic"
            },
            {
            "tag": "c:carbon_fibre"
            },
            {
            "item": "modern_industrialization:electrum_fine_wire"
            },
            {
            "item": "modern_industrialization:analog_circuit"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "oritech:processing_unit"
            }
        ],
        "time": 96
    })


    e.remove({ id: "oritech:atomicforge/aicomputer" })
    e.custom({
        type: "oritech:atomic_forge",
        fluidInputAmount: 0,
        fluidInputVariant: "minecraft:empty",
        fluidOutputAmount: 0,
        fluidOutputVariant: "minecraft:empty",
        ingredients: [
          { item: "modern_industrialization:processing_unit" },
          { item: "oritech:advanced_computing_engine" },
          { item: "oritech:advanced_computing_engine" }
        ],
        results: [{
            count: 1,
            id: "oritech:super_ai_chip"
        }],
        time: 400
    })

    e.remove("oritech:atomicforge/compensator")
    e.remove("oritech:atomicforge/compensatoralt")
    e.custom({
        type: "oritech:atomic_forge",
        fluidInputAmount: 0,
        fluidInputVariant: "minecraft:empty",
        fluidOutputAmount: 0,
        fluidOutputVariant: "minecraft:empty",
        ingredients: [
          { item: "oritech:super_ai_chip" },
          { item: "oritech:unholy_intelligence" },
          { item: "oritech:unholy_intelligence"},
        ],
        results: [{
            count: 1,
            id: "oritech:heisenberg_compensator"
        }],
        time: 600
    })

    e.remove("oritech:centrifuge/fluid/unholyai")
    e.custom({
        "type": "oritech:centrifuge_fluid",
        "fluidInput": {
            "fluid": "oritech:still_strange_matter"
        },
        "ingredients": [
            {
            "item": "modern_industrialization:qubit"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "oritech:unholy_intelligence"
            }
        ],
        "time": 800
    })

    e.remove("oritech:assembler/fluxgate")
    e.custom({
        "type": "oritech:assembler",
        "ingredients": [
            {
            "item": "modern_industrialization:electronic_circuit"
            },
            {
            "item": "oritech:fluxite"
            },
            {
            "item": "oritech:uranium_gem"
            },
            {
            "tag": "c:ingots/platinum"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "oritech:flux_gate"
            }
        ],
        "time": 144
    })

    e.remove("oritech:atomicforge/wafer")
    e.custom({
        "type": "oritech:atomic_forge",
        "ingredients": [
            {
            "item": "modern_industrialization:silicon_wafer"
            },
            {
            "tag": "c:carbon_fibre"
            },
            {
            "tag": "c:carbon_fibre"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "oritech:silicon_wafer"
            }
        ],
        "time": 5
    })

    e.remove("oritech:atomicforge/wafer")
    e.custom({
        "type": "oritech:atomic_forge",
        "ingredients": [
            {
            "item": "ae2:silicon"
            },
            {
            "item": "modern_industrialization:silicon_plate"
            },
            {
            "item": "modern_industrialization:silicon_plate"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "oritech:silicon_wafer"
            }
        ],
        "time": 5
    })

    e.remove("oritech:centrifuge/fluid/siliconwafers")
    e.custom({
        "type": "oritech:centrifuge_fluid",
        "fluidInput": {
            "fluid": "oritech:still_silicon_wash"
        },
        "ingredients": [
            {
            "item": "modern_industrialization:monocrystalline_silicon"
            }
        ],
        "results": [
            {
            "count": 4,
            "id": "oritech:silicon_wafer"
            }
        ],
        "time": 200
    })
})