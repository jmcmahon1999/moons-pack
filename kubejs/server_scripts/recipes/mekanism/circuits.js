ServerEvents.recipes(e => {


    e.remove({ output: "mekanism:basic_control_circuit" })
    e.remove({ output: "mekanism:advanced_control_circuit" })
    e.remove({ output: "mekanism:elite_control_circuit" })
    e.remove({ output: "mekanism:ultimate_control_circuit" })

    e.remove({ id: "oritech:atomicforge/compat/mekanism/basic_control_circuit" })
    e.remove({ id: "oritech:atomicforge/compat/mekanism/advanced_control_circuit" })
    e.remove({ id: "oritech:atomicforge/compat/mekanism/elite_control_circuit" })
    e.remove({ id: "oritech:atomicforge/compat/mekanism/ultimate_control_circuit" })

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
    )

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
})