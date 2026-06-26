ServerEvents.recipes(e => {


    e.remove({ output: "mekanism:basic_control_circuit" })
    e.remove({ output: "mekanism:advanced_control_circuit" })
    e.remove({ output: "mekanism:elite_control_circuit" })
    e.remove({ output: "mekanism:ultimate_control_circuit" })

    e.remove({ id: "oritech:atomicforge/compat/mekanism/basic_control_circuit" })
    e.remove({ id: "oritech:atomicforge/compat/mekanism/advanced_control_circuit" })
    e.remove({ id: "oritech:atomicforge/compat/mekanism/elite_control_circuit" })
    e.remove({ id: "oritech:atomicforge/compat/mekanism/ultimate_control_circuit" })

    e.custom({
      "type": "mekanism:metallurgic_infusing",
      "chemical_input": {
        "amount": 20,
        "tag": "mekanism:redstone"
      },
      "item_input": {
        "count": 1,
        "item": "modern_industrialization:analog_circuit"
      },
      "output": {
        "count": 1,
        "id": "mekanism:basic_control_circuit"
      },
      "per_tick_usage": false
    })

    e.shaped("mekanism:advanced_control_circuit",
      [
        "BEB"
      ],
      {
        B: "mekanism:basic_control_circuit",
        E: "modern_industrialization:electronic_circuit"
      }
    )

    e.shaped("mekanism:elite_control_circuit",
      [
        "ADA"
      ],
      {
        A: "mekanism:advanced_control_circuit",
        D: "modern_industrialization:digital_circuit"
      }
    )

    e.shaped("mekanism:ultimate_control_circuit",
      [
        "EPE"
      ],
      {
        E: "mekanism:elite_control_circuit",
        P: "modern_industrialization:processing_unit"
      }
    )

    e.shaped("mekanism:quantum_control_circuit",
      [
        "UQU"
      ],
      {
        U: "mekanism:ultimate_control_circuit",
        Q: "modern_industrialization:quantum_circuit"
      }
    )

    e.replaceInput({ output: "mekanism:supercharged_coil"},
      "mekanism:ultimate_control_circuit",
      "mekanism:quantum_control_circuit"
    )

    e.replaceInput({ output: "mekanism:antiprotonic_nucleosynthesizer"},
      "mekanism:ultimate_control_circuit",
      "mekanism:quantum_control_circuit"
    )

    e.replaceInput({ output: "mekanismgenerators:fusion_reactor_controller"},
      "mekanism:ultimate_control_circuit",
      "mekanism:quantum_control_circuit"
    )

    e.replaceInput({ output: "mekanismgenerators:fusion_reactor_port"},
      "mekanism:ultimate_control_circuit",
      "mekanism:quantum_control_circuit"
    )

    /*
    e.replaceInput(
        { input: "mekanism:basic_control_circuit" },
        "mekanism:basic_control_circuit",
        "modern_industrialization:analog_circuit"
    )
    
    e.replaceInput(
        { input: "mekanism:advanced_control_circuit" },
        "mekanism:advanced_control_circuit",
        "modern_industrialization:electronic_circuit"
    )

    e.replaceInput(
        { input: "mekanism:elite_control_circuit" },
        "mekanism:elite_control_circuit",
        "modern_industrialization:digital_circuit"
    )

    e.replaceInput(
        { input: "mekanism:ultimate_control_circuit" },
        "mekanism:ultimate_control_circuit",
        "modern_industrialization:quantum_circuit"
    )*/

    e.remove({ output: "mekanism:metallurgic_infuser"})
    e.shaped(
        "mekanism:metallurgic_infuser",
        [
            'iFi',
            'rCr',
            'iFi'
        ],
        {
            i: 'minecraft:iron_ingot',
            r: 'mekanism:ingot_osmium',
            F: 'minecraft:furnace',
            C: 'modern_industrialization:analog_circuit'
        }
    )

    e.replaceInput({mod: "mekanism", output: "mekanism:teleportation_core"},
        "minecraft:diamond",
        "modern_industrialization:digital_circuit"
    )

    e.replaceInput({mod: "mekanism", output: "mekanism:teleportation_core"},
        "minecraft:gold_ingot",
        "oritech:platinum_ingot"
    )

    e.replaceInput({mod: "mekanism", output: "mekanism:portable_teleporter"},
      "mekanism:teleportation_core",
      "modern_industrialization:qubit"
    )
    e.replaceInput({mod: "mekanism", output: "mekanism:portable_teleporter"},
      "mekanism:basic_control_circuit",
      "mekanism:teleportation_core"
    )
})