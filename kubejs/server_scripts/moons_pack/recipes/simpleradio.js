ServerEvents.recipes(e => {
    e.replaceInput({ mod: "simpleradio"},
        "simpleradio:copper_wire",
        "modern_industrialization:copper_fine_wire"
    )

    e.replaceInput({ output: "simpleradio:insulator"},
        "#minecraft:planks",
        "modern_industrialization:rubber_sheet"
    )

    const replacements = [
        ["minecraft:ender_pearl", "modern_industrialization:capacitor"],
        ["simpleradio:copper_wire", "modern_industrialization:copper_fine_wire"],
        ["minecraft:iron_bars", "modern_industrialization:inductor"],
        ["minecraft:iron_ingot", "modern_industrialization:iron_plate"],
        ["minecraft:redstone", "modern_industrialization:analog_circuit"],
        ["minecraft:quartz", "modern_industrialization:resistor"]
    ] 

    for (let [before, after] of replacements) {
        e.replaceInput({mod: "simpleradio"}, before, after)
    }
})