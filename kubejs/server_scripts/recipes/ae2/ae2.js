ServerEvents.recipes(e => {
    // ================ AE2 ================

    e.remove({ type: 'minecraft:crafting_shaped', output: 'ae2:charger'})
    e.shaped('ae2:charger',
        [
            'iiI',
            'C  ',
            'iiI'
        ],
        {
            i: 'minecraft:iron_ingot',
            I: 'modern_industrialization:inductor',
            C: 'modern_industrialization:analog_circuit'
        }
    )
    
    e.remove({ type: 'minecraft:crafting_shaped', output: 'ae2:inscriber'})
    e.shaped('ae2:inscriber',
        [
            'iIi',
            'C  ',
            'iIi'
        ],
        {
            i: 'minecraft:iron_ingot',
            I: 'modern_industrialization:robot_arm',
            C: 'modern_industrialization:analog_circuit'
        }
    )

    e.remove({ output: 'ae2:controller' })
    e.shaped('ae2:controller',
        [
            'SFS',
            'FPF',
            'SCS'
        ],
        {
            S: 'ae2:smooth_sky_stone_block',
            F: 'ae2:fluix_crystal',
            C: 'modern_industrialization:electronic_circuit',
            P: 'ae2:engineering_processor'
        }
    )

    e.remove({ id: 'ae2wtlib:quantum_bridge_card' })
    e.shaped('ae2wtlib:quantum_bridge_card',
        [
            'RCR',
            'LAL',
            'RPR'
        ],
        {
            R: 'ae2:quantum_ring',
            L: 'ae2:quantum_link',
            C: 'modern_industrialization:quantum_circuit',
            P: 'advanced_ae:quantum_processor',
            A: 'ae2:advanced_card'
        }
    )

    e.custom({
        type: "ae2:transform",
        ingredients: [
            {
                item: "ae2:certus_quartz_crystal"
            },
            {
                item: "minecraft:book"
            }
        ],
        result: {
            count: 1,
            id: "ae2:guide"
        }
    })

    // Remove Recipes
    e.remove({ output: 'ae2:silicon' })
    e.remove({ id: 'ae2:smelting/silicon_from_certus_quartz_dust' })
    e.remove({ type: 'minecraft:crafting_shaped', output: 'ae2:crystal_resonance_generator'})
    e.remove({ type: 'minecraft:crafting_shaped', output: 'ae2:vibration_chamber'})
})