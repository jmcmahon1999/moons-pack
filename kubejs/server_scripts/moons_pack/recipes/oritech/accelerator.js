ServerEvents.recipes(e => {
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
})