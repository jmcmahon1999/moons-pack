ServerEvents.tags('item', e => {
    e.add('c:plates/plastic', 'pneumaticcraft:plastic')
    e.add('c:plates/plastic', 'oritech:plastic_sheet')
    e.add('c:silicon', 'modern_industrialization:silicon_nugget')
    
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