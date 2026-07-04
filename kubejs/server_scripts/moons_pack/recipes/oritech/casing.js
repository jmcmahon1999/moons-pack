ServerEvents.recipes(e => {

    let casings = [
        ["oritech:machine_core_1", "#minecraft:planks", "minecraft:copper_block", "#minecraft:planks"],
        ["oritech:machine_core_2", "oritech:machine_core_1", "modern_industrialization:bronze_machine_casing", "#c:plates/copper"],
        ["oritech:machine_core_3", "oritech:machine_core_2", "modern_industrialization:steel_machine_casing", "#c:plates/nickel"],
        ["oritech:machine_core_4", "oritech:machine_core_3", "modern_industrialization:advanced_machine_casing", "oritech:enderic_compound"],
        ["oritech:machine_core_5", "oritech:machine_core_4", "modern_industrialization:turbo_machine_casing", "oritech:adamant_ingot"],
        ["oritech:machine_core_6", "oritech:machine_core_5", "modern_industrialization:highly_advanced_machine_casing", "oritech:duratium_ingot"],
        ["oritech:machine_core_7", "oritech:machine_core_6", "modern_industrialization:quantum_machine_casing", "oritech:prometheum_ingot"],
    ]

    for (let casing of casings) {
        e.remove({ output: casing[0] })
        e.shaped(casing[0], 
            ["POP", "PCP", "POP"],
            { O: casing[1], C: casing[2], P: casing[3]}
        )
    }

    e.shaped("oritech:machine_core_1",
        [
            "WWW",
            "WcW",
            "WWW"
        ],
        {
            W: "#minecraft:planks",
            c: "#oritech:plating"
        }
    )
})