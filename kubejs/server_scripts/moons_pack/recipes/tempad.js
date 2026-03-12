ServerEvents.recipes(e => {
    e.replaceInput({ type: "minecraft:crafting_shaped", mod: "tempad" },
        "minecraft:amethyst_shard",
        "ae2:singularity"
    )

    e.replaceInput({ type: "minecraft:crafting_shaped", mod: "tempad" },
        "minecraft:iron_ingot",
        "modern_industrialization:stainless_steel_ingot"
    )

    e.replaceInput({ type: "minecraft:crafting_shaped", mod: "tempad" },
        "minecraft:copper_ingot",
        "aquaculture:neptunium_ingot"
    )

    e.replaceInput({ type: "minecraft:crafting_shaped", mod: "tempad" },
        "minecraft:emerald",
        "psi:psigem"
    )

    e.replaceInput({ type: "minecraft:crafting_shaped", mod: "tempad" },
        "minecraft:ender_pearl",
        "endrem:cryptic_eye"
    )

    e.replaceInput({ type: "minecraft:crafting_shaped", mod: "tempad" },
        "minecraft:redstone",
        "advanced_ae:quantum_processor"
    )

    e.replaceInput({ type: "minecraft:crafting_shaped", mod: "tempad" },
        "minecraft:quartz",
        "modern_industrialization:quantum_circuit"
    )

    e.replaceInput({ type: "minecraft:crafting_shaped", mod: "tempad" },
        "minecraft:book",
        "computercraft:disk"
    )

    e.replaceInput({ type: "minecraft:crafting_shaped", mod: "tempad" },
        "minecraft:iron_block",
        "modern_industrialization:stainless_steel_block"
    )

    e.remove({ id: "tempad:time_steel_shapeless" })
    e.custom({
        "type": "oritech:particle_collision",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
            "item": "ae2:singularity"
            },
            {
            "item": "modern_industrialization:stainless_steel_ingot"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "tempad:time_steel"
            }
        ],
        "time": 15000
    })
})