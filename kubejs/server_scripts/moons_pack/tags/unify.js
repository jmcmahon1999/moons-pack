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
        'platinum',
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
})