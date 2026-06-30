ServerEvents.recipes(e => {
    // ================ AE2 ================

    e.remove({ type: 'minecraft:crafting_shaped', output: 'ae2:charger'})
    e.shaped('ae2:charger',
        [
            'iiI',
            'i  ',
            'iiI'
        ],
        {
            i: 'minecraft:iron_ingot',
            I: 'modern_industrialization:inductor'
        }
    )
    
    e.remove({ type: 'minecraft:crafting_shaped', output: 'ae2:inscriber'})
    e.shaped('ae2:inscriber',
        [
            'iIi',
            'i  ',
            'iCi'
        ],
        {
            i: 'minecraft:iron_ingot',
            I: 'modern_industrialization:inductor',
            C: 'modern_industrialization:analog_circuit'
        }
    )

    e.remove({ output: 'ae2:controller' })
    e.shaped('ae2:controller',
        [
            'SFS',
            'FPF',
            'SFS'
        ],
        {
            S: 'ae2:smooth_sky_stone_block',
            F: 'ae2:fluix_crystal',
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

    // Remove Recipes
    // e.remove({ output: 'ae2:silicon' })
    // e.remove({ id: 'ae2:smelting/silicon_from_certus_quartz_dust' })
    e.remove({ type: 'minecraft:crafting_shaped', output: 'ae2:crystal_resonance_generator'})
    e.remove({ type: 'minecraft:crafting_shaped', output: 'ae2:vibration_chamber'})
})