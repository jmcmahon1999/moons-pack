ServerEvents.recipes(e => {

    e.remove({ output: "oritech:pulverizer_block" })
    e.shaped("oritech:pulverizer_block",
        [
            "NNN",
            "NCN",
            "MPM"
        ],
        {
            N: "#c:ingots/nickel",
            C: "minecraft:diamond",
            M: "oritech:motor",
            P: "oritech:machine_core_2" 
        }
    )

    e.shaped("oritech:fragment_forge_block",
        [
            "NNN",
            "NCN",
            "MPM"
        ],
        {
            N: "oritech:plastic_sheet",
            C: "modern_industrialization:analog_circuit",
            M: "oritech:motor",
            P: "oritech:machine_core_4" 
        }
    )


    e.remove({ output: "oritech:assembler_block" })
    e.shaped("oritech:assembler_block",
        [
            "CCC",
            "IAI",
            "MPM"
        ],
        {
            C: "#c:ingots/copper",
            I: "oritech:adamant_ingot",
            A: "modern_industrialization:assembler",
            M: "oritech:motor",
            P: "oritech:machine_core_4" 
        }
    )

    e.remove({ output: "oritech:foundry_block" })
    e.shaped("oritech:foundry_block",
        [
            "CCC",
            "CBC",
            "MEM"
        ],
        {
            C: "#c:ingots/copper",
            M: "oritech:motor",
            E: "oritech:machine_core_3",
            B: "modern_industrialization:electric_blast_furnace"
        }
    )

    e.remove({ output: "oritech:atomic_forge_block" })
    e.shaped("oritech:atomic_forge_block",
        [
            "FDF",
            "CEC",
            "PPP"
        ],
        {
            F: "oritech:flux_gate",
            D: "oritech:duratium_ingot",
            C: "modern_industrialization:digital_circuit",
            E: "oritech:enderic_compound",
            P: "oritech:machine_core_5"
        }
    )

    e.remove({ output: "oritech:basic_generator_block" })
    e.shaped("oritech:basic_generator_block",
        [
            "NNN",
            "NFN",
            "ICI"
        ],
        {
            N: "#c:ingots/nickel",
            C: "oritech:machine_core_2",
            I: "oritech:magnetic_coil",
            F: "modern_industrialization:lv_storage_unit"
        }
    )

    e.remove({ output: "oritech:laser_arm_block" })
    e.shaped("oritech:laser_arm_block",
        [
            "CLC",
            "MDM",
            "PPP"
        ],
        {
            C: "oritech:carbon_fibre_strands",
            L: "oritech:enderic_lens",
            M: "modern_industrialization:advanced_motor",
            D: "modern_industrialization:digital_circuit",
            P: "oritech:machine_core_5"
        }
    )

    e.remove({ output: "oritech:augment_application_block" })
    e.shaped("oritech:augment_application_block",
        [
            "DCD",
            "MSM",
            "PPP"
        ],
        {
            D: "oritech:dubios_container",
            C: "modern_industrialization:processing_unit",
            M: "modern_industrialization:advanced_motor",
            S: "oritech:large_storage_block",
            P: "oritech:machine_core_5"
        }
    )

    e.remove({ output: "oritech:simple_augment_station" })
    e.shaped("oritech:simple_augment_station",
        [
            "CCC",
            "CSC",
            "PPP"
        ],
        {
            C: "#c:plates/chromium",
            S: "modern_industrialization:digital_circuit",
            P: "oritech:machine_core_4"
        }
    )

    // Quantum Research Station
    e.remove({ output: "oritech:advanced_augment_station" })
    e.shaped("oritech:advanced_augment_station",
        [
            "III",
            "ISI",
            "PCP"
        ],
        {
            I: "#c:plates/iridium",
            C: "oritech:centrifuge_block",
            S: "modern_industrialization:processing_unit",
            P: "oritech:machine_core_5"
        }
    )

    e.remove({ output: "oritech:arcane_augment_station" })
    e.shaped("oritech:arcane_augment_station",
        [
            "III",
            "ISI",
            "PCP"
        ],
        {
            I: "oritech:overcharged_crystal",
            C: "aether:enchanted_gravitite",
            S: "modern_industrialization:processing_unit",
            P: "oritech:machine_core_5"
        }
    )

    e.remove({ output: "oritech:destroyer_block"})
    e.shaped("oritech:destroyer_block",
        [
            "MAM",
            "MPM",
            "CCC"
        ],
        {
            C: "oritech:machine_core_2",
            M: "oritech:motor",
            P: "oritech:pulverizer_block",
            A: "modern_industrialization:steel_rod"
        }
    )

    e.remove({ output: "oritech:deep_drill_block" })
    e.shaped("oritech:deep_drill_block",
        [
            "DCD",
            "MHM",
            "PPP"
        ],
        {
            D: "oritech:duratium_ingot",
            C: "oritech:overcharged_crystal",
            M: "modern_industrialization:advanced_motor",
            H: "oritech:super_ai_chip",
            P: "#oritech:plating"
        }
    )

    // Drone Port
    e.remove({ output: "oritech:drone_port_block" })
    e.shaped("oritech:drone_port_block",
        [
            "ACA",
            "MSM",
            "PPP"
        ],
        {
            A: "oritech:advanced_computing_engine",
            C: "modern_industrialization:digital_circuit",
            M: "modern_industrialization:advanced_motor",
            S: "oritech:charger_block",
            P: "#oritech:plating"
        }
    )

    e.remove({ output: "oritech:accelerator_ring" })
    e.shaped("oritech:accelerator_ring",
        [
            " P ",
            "PZP",
            "SCH"
        ],
        {
            P: "modern_industrialization:iridium_plate",
            Z: "modern_industrialization:zanite_aperture",
            S: "oritech:superconductor",
            H: "modern_industrialization:large_heat_exchanger",
            C: "modern_industrialization:plasma_handling_iridium_machine_casing",
        }
    )

    // Particle Accelerator Linear Motor
    e.remove({ output: "oritech:accelerator_motor" })
    e.shaped("oritech:accelerator_motor",
        [
            "PPP",
            "SSS",
            "BCB"
        ],
        {
            P: "modern_industrialization:iridium_plate",
            B: "modern_industrialization:plutonium_battery",
            S: "oritech:superconductor",
            C: "modern_industrialization:quantum_circuit"
        }
    )

    // Particle Accelerator
    e.remove({ output: "oritech:accelerator_controller" })
    e.shaped("oritech:accelerator_controller",
        [
            "PPP",
            "zAz",
            "FQF"
        ],
        {
            P: "modern_industrialization:plasma_handling_iridium_machine_casing",
            F: "oritech:heisenberg_compensator",
            A: "oritech:accelerator_motor",
            Q: "modern_industrialization:quantum_circuit",
            z: "modern_industrialization:zanite_aperture"
        }
    )

    // Particle Accelerator Sensor
    e.remove({ output: "oritech:accelerator_sensor" })
    e.shaped("oritech:accelerator_sensor",
        [
            "   ",
            "AZ ",
            "FQF"
        ],
        {
            A: "oritech:accelerator_ring",
            Q: "modern_industrialization:qubit",
            F: "oritech:flux_gate",
            Z: "modern_industrialization:zanite_aperture"
        }
    )

    // Tachyon Absorber
    e.remove({ output: "oritech:particle_collector_block" })
    e.shaped("oritech:particle_collector_block",
        [
            "SSS",
            "HFH",
            "SSS"
        ],
        {
            S: "oritech:superconductor",
            H: "oritech:heisenberg_compensator",
            F: "modern_industrialization:fusion_chamber"
        }
    )

    // Schrodinger's Safe
    e.remove({ output: "oritech:unstable_container" })
    e.shaped("oritech:unstable_container",
        [
            "SFS",
            "BFB",
            "QQQ"
        ],
        {
            S: "oritech:super_ai_chip",
            F: "oritech:superconductor",
            B: "modern_industrialization:blastproof_alloy_large_plate",
            Q: "modern_industrialization:blastproof_casing"
        }
    )

    e.remove({ output: "oritech:enchantment_catalyst_block" })
    e.shaped("oritech:enchantment_catalyst_block",
        [
            "FFF",
            "GSG",
            "PEP"
        ],
        {
            F: "oritech:fluxite",
            G: "aether:enchanted_gravitite",
            S: "oritech:super_ai_chip",
            E: "minecraft:enchanting_table",
            P: "oritech:adamant_ingot"
        }
    )

    e.remove({ output: "oritech:charger_block" })
    e.shaped("oritech:charger_block",
        [
            "SFS",
            "BPB",
            "EQE"
        ],
        {
            S: "#c:ingots/steel",
            F: "ae2:charger",
            B: "oritech:energy_pipe",
            P: "oritech:processing_unit",
            E: "oritech:small_storage_block",
            Q: "minecraft:chest"
        }
    )

    e.remove({ output: "oritech:reactor_wall" })
    e.remove("oritech:assembler/reactorplatingalt")
    e.shaped("oritech:reactor_wall",
        [
            "sNs",
            "NsN",
            "sNs"
        ],
        {
            s: "modern_industrialization:lead_plate",
            N: "modern_industrialization:nuclear_casing"
        }
    )
    e.custom({
        "type": "oritech:assembler",
        "ingredients": [
            {
            "item": "modern_industrialization:nuclear_casing"
            },
            {
            "item": "modern_industrialization:nuclear_casing"
            },
            {
            "item": "modern_industrialization:lead_plate",
            },
            {
            "item": "modern_industrialization:tungsten_plate",
            }
        ],
        "results": [
            {
            "count": 3,
            "id": "oritech:reactor_wall"
            }
        ],
        "time": 96
    })

    e.remove("oritech:crafting/centrifugealt")
    e.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "b": {
            "item": "oritech:motor"
            },
            "c": {
            "item": "oritech:motor"
            },
            "f": {
            "item": "minecraft:glass_bottle"
            },
            "m": {
            "tag": "c:ingots/copper"
            },
            "s": {
            "item": "modern_industrialization:analog_circuit"
            }
        },
        "pattern": [
            "fff",
            "mcm",
            "sbs"
        ],
        "result": {
            "count": 1,
            "id": "oritech:centrifuge_block"
        }
    })

    let circuit_tier = [
        "modern_industrialization:analog_circuit",
        "oritech:processing_unit",
        "oritech:flux_gate"
    ]

    e.replaceInput({id: "oritech:crafting/crusher" },
        "oritech:flux_gate",
        "modern_industrialization:electronic_circuit"
    )
})