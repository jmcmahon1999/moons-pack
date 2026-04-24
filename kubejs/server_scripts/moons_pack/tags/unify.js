ServerEvents.tags('item', e => {
    e.add('c:plates/plastic', 'pneumaticcraft:plastic')
    e.add('c:plates/plastic', 'oritech:plastic_sheet')
    e.add("c:ingots", "aether_treasure_reforging:valkyrum_ingot");
    e.add("c:ingots", "aether_treasure_reforging:pyral_ingot");
    e.add("c:ingots", "avaritia:neutronium_ingot");
    e.add("c:ingots", "avaritia:infinity_ingot");
    e.add("c:ingots", "modern_industrialization:mixed_ingot_blastproof")
    e.add("c:ingots", "modern_industrialization:mixed_ingot_iridium")
    e.add("c:ingots", "modern_industrialization:mixed_ingot_nuclear")
    
    let small_dust_materials = [
        'nickel',
        'iron',
        'copper',
        'gold',
        'uranium',
        'plutonium'
    ]
    for (let material of small_dust_materials) {
        e.add(`c:small_dusts/${material}`, `oritech:small_${material}_dust`)
        e.add(`c:small_dusts/${material}`, `modern_industrialization:${material}_tiny_dust`)
    }

    e.remove(`c:ores/platinum`, `oritech:endstone_platinum_ore`)

    let materials = [
        "platinum",
    ]

    for (let material of materials) {
        e.remove(`c:raw_materials/${material}`, `oritech:raw_${material}`)
        e.remove(`c:storage_blocks/${material}`, `oritech:${material}_block`)
        e.remove(`c:storage_blocks/raw_${material}`, `oritech:raw_${material}_block`)
        e.remove(`c:ingots/${material}`, `oritech:${material}_ingot`)
        e.remove(`c:dusts/${material}`, `oritech:${material}_dust`)
        e.remove(`c:nuggets/${material}`, `oritech:${material}_nugget`)
    }
    
})