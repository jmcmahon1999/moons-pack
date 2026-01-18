ServerEvents.recipes(e => {

    // Pulverizer
    e.remove({ output: "oritech:pulverizer_block" })
    e.shaped("oritech:pulverizer_block",
        [
            "NNN",
            "NCN",
            "MPM"
        ],
        {
            N: "#c:ingots/nickel",
            C: "modern_industrialization:analog_circuit",
            M: "modern_industrialization:motor",
            P: "oritech:machine_core_2" 
        }
    )

    // Assembler
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
            M: "modern_industrialization:motor",
            P: "#oritech:plating" 
        }
    )

    // Foundry
    e.remove({ output: "oritech:foundry_block" })
    e.shaped("oritech:foundry_block",
        [
            "CCC",
            "CMC",
            "EBE"
        ],
        {
            C: "#c:ingots/copper",
            M: "modern_industrialization:motor",
            E: "modern_industrialization:analog_circuit",
            B: "modern_industrialization:electric_blast_furnace"
        }
    )

    // Atomic Forge
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
            P: "#oritech:plating"
        }
    )

    // Basic Generator
    e.remove({ output: "oritech:basic_generator_block" })
    e.shaped("oritech:basic_generator_block",
        [
            "NNN",
            "NCN",
            "IFI"
        ],
        {
            N: "#c:ingots/nickel",
            C: "#c:ingots/copper",
            I: "modern_industrialization:inductor",
            F: "modern_industrialization:lv_storage_unit"
        }
    )

    // Enderic Laser
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
            P: "#oritech:plating"
        }
    )

    // Bedrock Extractor
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
            H: "oritech:heisenberg_compensator",
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
            C: "oritech:super_ai_chip",
            M: "modern_industrialization:advanced_motor",
            S: "oritech:superconductor",
            P: "#oritech:plating"
        }
    )

    // Cybernetic Augmentation Centre
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
            P: "#oritech:plating"
        }
    )

    // Cybernetic Research Station
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
            P: "#oritech:plating"
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
            P: "#oritech:plating"
        }
    )

    // Arcane Research Station
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
            P: "#oritech:plating"
        }
    )

    // Arcane Catalyst
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

    // Particle Accelerator Guide Ring
    e.remove({ output: "oritech:accelerator_ring" })
    e.shaped("oritech:accelerator_ring",
        [
            " P ",
            "PZP",
            "SHH"
        ],
        {
            P: "modern_industrialization:iridium_plate",
            Z: "modern_industrialization:zanite_aperture",
            S: "oritech:superconductor",
            H: "modern_industrialization:large_heat_exchanger"
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
            P: "#c:plates/iridium",
            F: "oritech:flux_gate",
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
            "AQ ",
            "   "
        ],
        {
            A: "oritech:accelerator_ring",
            Q: "modern_industrialization:qubit"
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

    // Equipment Charger
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

})