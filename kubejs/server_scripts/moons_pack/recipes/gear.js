ServerEvents.recipes(e => {

    let items = [
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "sword",
        "pickaxe",
        "shovel",
        "hoe",
        "axe"
    ]
    let mods = [
        "mekanism",
        "modern_industrialization",
        "extended_industrialization",
        "deeperdarker",
        "advanced_ae"
    ]
    for (let item of items) {
        for (let mod of mods) {
            e.replaceInput({ mod: mod },
                `minecraft:netherite_${item}`,
                `enderitemod:enderite_${item}`
            )
        } 
    }

    let hammer_materials = [
        "wooden",
        "stone",
        "lapis",
        "redstone",
        "emerald",
        "obsidian"
    ]
    for (let material of hammer_materials){
        e.remove({ output: `onlyhammers:${material}_hammer`})
    }
    

    e.shaped("orbital_railgun:orbital_railgun",
        [
            "qb ",
            "wlt",
            "t  "
        ],
        {
            l: "oritech:portable_laser",
            b: "tempad:location_broadcaster",
            w: "draconicevolution:chaotic_capacitor",
            q: "modern_industrialization:quantum_circuit",
            t: "tempad:time_steel"
        }
    )

})