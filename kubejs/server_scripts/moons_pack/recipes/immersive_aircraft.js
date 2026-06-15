ServerEvents.recipes(e => {
    e.replaceInput({mod: "immersive_aircraft"},
        "immersive_aircraft:propeller",
        "modern_industrialization:aluminum_rotor"
    )

    e.replaceInput({mod: "immersive_aircraft"},
        "immersive_aircraft:engine",
        "modern_industrialization:motor"
    )

    e.replaceInput({mod: "immersive_aircraft"},
        "minecraft:lever",
        "modern_industrialization:piston"
    )

    e.replaceInput({mod: "immersive_aircraft"},
        "minecraft:comparator",
        "modern_industrialization:analog_circuit"
    )
})