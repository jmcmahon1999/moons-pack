StartupEvents.registry("item", e => {


    let metals = [
        "lead",
        "brass",
        "silver",
        "nickel",
        "zinc"
    ]

    for (let metal of metals) {
        e.create(`modern_industrialization:${metal}_gear`)
            .texture(`modern_industrialization:item/${metal}_gear`)
            .tag(`c:gears/${metal}`)
        e.create(`modern_industrialization:${metal}_bolt`)
            .texture(`modern_industrialization:item/${metal}_bolt`)
        e.create(`modern_industrialization:${metal}_ring`)
            .texture(`modern_industrialization:item/${metal}_ring`)
        e.create(`modern_industrialization:${metal}_rod`)
            .texture(`modern_industrialization:item/${metal}_rod`)
            .tag(`c:rods/${metal}`)
    }

    // Custom Items
    e.create('modern_industrialization:purified_zanite')
        .texture('modern_industrialization:item/purified_zanite')
    e.create('modern_industrialization:zanite_aperture')
        .texture('modern_industrialization:item/zanite_aperture')
})
