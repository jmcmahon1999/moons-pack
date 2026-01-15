RecipeViewerEvents.removeEntries('item', e => {
    let hammer_materials = [
        "wooden",
        "stone",
        "lapis",
        "redstone",
        "emerald",
        "obsidian"
    ]
    for (let material of hammer_materials) {
        e.remove(`onlyhammers:${material}_hammer`)
    }
})