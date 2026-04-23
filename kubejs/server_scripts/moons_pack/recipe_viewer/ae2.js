RecipeViewerEvents.removeEntries('item', e => {
//     // e.remove('ae2:inscriber')
//     // e.remove('ae2:silicon')
//     e.remove('ae2:crystal_resonance_generator')
//     e.remove('ae2:vibration_chamber')

    const sizes = [
        "1",
        "4",
        "16",
        "64",
        "256"
    ]
    
    e.remove("megacells:mega_mana_cell_housing")
    e.remove("megacells:mega_source_cell_housing")

    for (let size of sizes) {
        e.remove(`megacells:mana_storage_cell_${size}m`)
        e.remove(`megacells:portable_mana_cell_${size}m`)
        e.remove(`megacells:source_storage_cell_${size}m`)
        e.remove(`megacells:portable_source_cell_${size}m`)
    }
})