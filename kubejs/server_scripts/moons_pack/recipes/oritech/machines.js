ServerEvents.recipes(e => {

    function basicTier() {
        const core = "oritech:machine_core_2";
        e.remove("oritech:crafting/pulverizer")
        e.remove("oritech:crafting/pulverizeralt")
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
                P: core
            }
        )
        e.remove("oritech:crafting/cooler")
        e.shaped("oritech:cooler_block",
            [
                "NNN",
                "NMN",
                "CPC"
            ],
            {
                N: "#c:ingots/nickel",
                C: "minecraft:ice",
                M: "oritech:motor",
                P: core
            }
        )
        
        e.remove("oritech:crafting/destroyer")
        e.shaped("oritech:destroyer_block",
            [
                "MAM",
                "MBM",
                "PPP"
            ],
            {
                P: core,
                M: "oritech:motor",
                B: "oritech:pulverizer_block",
                A: "oritech:machine_frame_block"
            }
        )

        e.remove("oritech:crafting/placer")
        e.shaped("oritech:placer_block",
            [
                "NNN",
                "CFC",
                "MPM"
            ],
            {
                P: core,
                M: "oritech:motor",
                F: "oritech:machine_frame_block",
                C: "oritech:processing_unit",
                N: "minecraft:copper_ingot"
            }
        )

        e.remove("oritech:crafting/fertilizer")
        e.shaped("oritech:fertilizer_block",
            [
                "NNN",
                "FCF",
                "MPM"
            ],
            {
                P: core,
                M: "oritech:motor",
                F: "ae2:silicon",
                C: "oritech:processing_unit",
                N: "minecraft:copper_ingot"
            }
        )

        e.remove("oritech:crafting/treefeller")
        e.shaped("oritech:treefeller_block",
            [
                "NNN",
                "NMN",
                "APA"
            ],
            {
                P: core,
                M: "oritech:motor",
                A: "minecraft:iron_axe",
                N: "minecraft:copper_ingot"
            }
        )

        e.remove("oritech:crafting/electricfurnace")
        e.remove("oritech:crafting/electricfurnacealt")
        e.shaped("oritech:powered_furnace_block",
            [
                "NEN",
                "SFS",
                "CPC"
            ],
            {
                P: core,
                S: "ae2:silicon",
                C: "oritech:magnetic_coil",
                N: "minecraft:copper_ingot",
                E: "modern_industrialization:electrum_ingot",
                F: "minecraft:furnace"
            }
        )

        e.remove("oritech:crafting/basicgen")
        e.shaped("oritech:basic_generator_block",
            [
                "NNN",
                "NFN",
                "IPI"
            ],
            {
                N: "#c:ingots/nickel",
                P: core,
                I: "oritech:magnetic_coil",
                F: "minecraft:furnace",
            }
        )

        e.remove("oritech:crafting/pump")
        e.shaped("oritech:pump_block",
            [
                "NNN",
                "NMN",
                "SPS"
            ],
            {
                N: "minecraft:copper_ingot",
                M: "oritech:motor",
                S: "ae2:silicon",
                P: core
            }
        )
    }

    function improvedTier() {
        const core = "oritech:machine_core_3";
        e.remove("oritech:crafting/foundry")
        e.shaped("oritech:foundry_block",
            [
                "CCC",
                "CBC",
                "MPM"
            ],
            {
                C: "#c:ingots/copper",
                M: "oritech:motor",
                P: core,
                B: "modern_industrialization:steam_blast_furnace"
            }
        )

        e.remove("oritech:crafting/assembler")
        e.remove("oritech:crafting/assembleralt")
        e.shaped("oritech:assembler_block",
            [
                "CCC",
                "IAI",
                "MPM"
            ],
            {
                C: "#c:ingots/copper",
                I: "oritech:adamant_ingot",
                A: "minecraft:crafter",
                M: "oritech:motor",
                P: core
            }
        )

        e.remove("oritech:crafting/lavagen")
        e.shaped("oritech:lava_generator_block",
            [
                "NNN",
                "NCN",
                "PGP"
            ],
            {
                N: "#c:ingots/electrum",
                P: core,
                C: "oritech:magnetic_coil",
                G: "oritech:basic_generator_block",
            }
        )

        e.remove("oritech:crafting/biogen")
        e.shaped("oritech:bio_generator_block",
            [
                "NNN",
                "CFC",
                "PGP"
            ],
            {
                N: "modern_industrialization:steel_ingot",
                P: core,
                C: "oritech:magnetic_coil",
                G: "oritech:basic_generator_block",
                F: "oritech:flux_gate"
            }
        )

        e.remove("oritech:crafting/steamgen")
        e.shaped("oritech:steam_engine_block",
            [
                "NNN",
                "ICI",
                "PGP"
            ],
            {
                N: "modern_industrialization:electrum_ingot",
                P: core,
                C: "oritech:magnetic_coil",
                I: "minecraft:copper_ingot",
                G: "oritech:basic_generator_block"
            }
        )

        e.remove("oritech:crafting/refinery")
        e.shaped("oritech:refinery_block",
            [
                "NMN",
                "RRR",
                "PCP"
            ],
            {
                N: "modern_industrialization:steel_ingot",
                M: "oritech:motor",
                R: "oritech:refinery_module_block",
                C: "minecraft:cauldron",
                P: core
            }
        )
    }

    function advancedTier() {
        const core = "oritech:machine_core_4";
        e.remove("oritech:crafting/crusher")
        e.shaped("oritech:fragment_forge_block",
            [
                "NNN",
                "NCN",
                "MPM"
            ],
            {
                N: "oritech:plastic_sheet",
                C: "oritech:flux_gate",
                M: "oritech:motor",
                P: core
            }
        )

        e.remove("oritech:crafting/centrifuge")
        e.remove("oritech:crafting/centrifugealt")
        e.shaped("oritech:centrifuge_block",
            [
                "bbb",
                "msm",
                "cPc"
            ],
            {
                b: "minecraft:glass_bottle",
                m: "oritech:motor",
                s: "modern_industrialization:steel_ingot",
                c: "oritech:processing_unit",
                P: core
            }
        )

        e.remove("oritech:crafting/fuelgen")
        e.shaped("oritech:fuel_generator_block",
            [
                "NNN",
                "CFC",
                "GPG"
            ],
            {
                N: "modern_industrialization:steel_ingot",
                P: core,
                C: "oritech:magnetic_coil",
                G: "oritech:basic_generator_block",
                F: "oritech:enderic_lens"
            }
        )
    }

    function eliteTier() {
        const core = "oritech:machine_core_5"
        e.remove("oritech:crafting/laserarm")
        e.shaped("oritech:laser_arm_block",
            [
                "CLC",
                "MDM",
                "PPP"
            ],
            {
                C: "oritech:carbon_fibre_strands",
                L: "oritech:enderic_lens",
                M: "oritech:motor",
                D: "modern_industrialization:electrum_ingot",
                P: core
            }
        )

        e.remove("oritech:crafting/solar")
        e.shaped("oritech:big_solar_panel_block",
            [
                "NNN",
                "CFC",
                "PGP"
            ],
            {
                N: "oritech:fluxite",
                P: core,
                C: "oritech:flux_gate",
                G: "oritech:basic_generator_block",
                F: "oritech:advanced_battery"
            }
        )
        
    }

    function ultraTier() {
        const core = "oritech:machine_core_6"
        e.remove("oritech:crafting/atomicforge")
        e.shaped("oritech:atomic_forge_block",
            [
                "FDF",
                "CEC",
                "PPP"
            ],
            {
                F: "oritech:flux_gate",
                D: "oritech:duratium_ingot",
                C: "oritech:plastic_sheet",
                E: "oritech:enderic_compound",
                P: core
            }
        )

        e.remove("oritech:crafting/deepdrill")
        e.shaped("oritech:deep_drill_block",
            [
                "DCD",
                "MHM",
                "PPP"
            ],
            {
                D: "oritech:duratium_ingot",
                C: "oritech:overcharged_crystal",
                M: "oritech:motor",
                H: "oritech:heisenberg_compensator",
                P: core
            }
        )

        e.remove("oritech:crafting/droneport")
        e.remove("oritech:crafting/droneportalt")
        e.shaped("oritech:drone_port_block",
            [
                "ACA",
                "MSM",
                "PPP"
            ],
            {
                A: "oritech:advanced_computing_engine",
                C: "oritech:super_ai_chip",
                M: "oritech:motor",
                S: "oritech:superconductor",
                P: core
            }
        )

        e.remove("oritech:crafting/augment/basic")
        e.shaped("oritech:simple_augment_station",
            [
                "CCC",
                "CSC",
                "PBP"
            ],
            {
                C: "oritech:adamant_ingot",
                S: "oritech:flux_gate",
                P: core,
                B: "oritech:centrifuge_block"
            }
        )

        e.remove("oritech:crafting/controller")
        e.shaped("oritech:reactor_controller",
            [
                "WWW",
                "CPC",
                "WWW"
            ],
            {
                W: "oritech:reactor_wall",
                C: "oritech:advanced_computing_engine",
                P: core
            }
        )
    }

    function ultimateTier() {
        const core = "oritech:machine_core_7"
        e.remove("oritech:crafting/augment/applicator")
        e.shaped("oritech:augment_application_block",
            [
                "DCD",
                "MSM",
                "PPP"
            ],
            {
                D: "oritech:dubios_container",
                C: "oritech:carbon_fibre_strands",
                M: "oritech:motor",
                S: "oritech:large_storage_block",
                P: core
            }
        )

        e.remove("oritech:crafting/augment/advanced")
        e.shaped("oritech:advanced_augment_station",
            [
                "III",
                "ISI",
                "PCP"
            ],
            {
                I: "oritech:duratium_ingot",
                C: "oritech:centrifuge_block",
                S: "oritech:unholy_intelligence",
                P: core
            }
        )

        e.remove("oritech:crafting/augment/arcane")
        e.shaped("oritech:arcane_augment_station",
            [
                "III",
                "ISI",
                "PCP"
            ],
            {
                I: "oritech:overcharged_crystal",
                C: "endrem:cryptic_eye",
                S: "oritech:enderic_lens",
                P: core
            }
        )
    }

    basicTier()
    improvedTier()
    advancedTier()
    eliteTier()
    ultraTier()
    ultimateTier()

    e.remove("oritech:crafting/catalyst_alt")
    e.remove("oritech:crafting/catalyst")
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
})