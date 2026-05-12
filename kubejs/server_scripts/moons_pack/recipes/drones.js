ServerEvents.recipes(e => {
    e.replaceInput({ mod: "drones", type: "minecraft:crafting_shaped"},
        "minecraft:iron_ingot",
        "modern_industrialization:aluminum_ingot"
    )
    e.replaceInput({ mod: "drones", type: "minecraft:crafting_shaped"},
        "minecraft:copper_ingot",
        "modern_industrialization:aluminum_rotor"
    )

    e.replaceInput({ mod: "drones", type: "minecraft:crafting_shaped"},
        "minecraft:repeater",
        "modern_industrialization:analog_circuit"
    )

    e.replaceInput({ mod: "drones", type: "minecraft:crafting_shaped"},
        "minecraft:diamond",
        "modern_industrialization:large_motor"
    )

    e.replaceInput({id: "drones:crafting/_ionrotor"},
        "minecraft:stick",
        "modern_industrialization:titanium_curved_plate"
    )

    e.replaceInput({ mod: "drones", type: "minecraft:crafting_shaped"},
        "minecraft:stick",
        "modern_industrialization:iron_rod"
    )
})