ServerEvents.recipes(e => {
    e.remove({ type: "avaritia:shaped_extreme_craft" })
    //e.remove({ type: "crafting_shaped", mod: "avaritia" })

    e.remove({ id: "avaritia:infinity_chest" })
    e.remove({ id: "avaritia:neutron_collector" })
    e.remove({ id: "avaritia:neutronium_compressor" })
    e.remove({ id: "avaritia:cosmic_meatballs" })
    e.remove({ id: "avaritia:ultimate_stew" })
    e.remove({ id: "avaritia:infinity_singularity" })
    e.remove({ id: "avaritia:infinity_catalyst" })
    e.remove({ id: "avaritia:endest_pearl" })
    e.remove({ id: "avaritia:infinity_helmet" })
    e.remove({ id: "avaritia:infinity_chestplate" })
    e.remove({ id: "avaritia:infinity_leggings" })
    e.remove({ id: "avaritia:infinity_boots" })
    e.remove({ id: "avaritia:infinity_bow" })
    e.remove({ id: "avaritia:infinity_hoe" })
    e.remove({ id: "avaritia:infinity_shovel" })
    e.remove({ id: "avaritia:infinity_pickaxe" })
    e.remove({ id: "avaritia:infinity_axe" })
    e.remove({ id: "avaritia:infinity_sword" })
    e.remove({ id: "avaritia:skullfire_sword" })
    e.remove({ id: "avaritia:/collector"})
    e.remove({ id: "avaritia:infinity_catalyst_from_infinity_singularity" })
    e.remove({ id: "avaritia:neutron_pile" })
    e.remove({ id: "avaritia:compressor" })
    e.remove({ id: "avaritia:infinity_block" })
    e.remove({ id: "avaritia:infinity_ingot" })
    e.remove({ id: "avaritia:infinity_singularity"})
    e.remove({ id: "avaritia:netherite_singularity"})
    e.remove({ id: "avaritia:amethyst_singularity"})
    e.remove({ id: "avaritia:emerald_singularity"})
    e.remove({ id: "avaritia:diamond_singularity"})
    e.remove({ id: "avaritia:quartz_singularity"})
    e.remove({ id: "avaritia:redstone_singularity"})
    e.remove({ id: "avaritia:lapis_singularity"})
    e.remove({ id: "avaritia:gold_singularity"})
    e.remove({ id: "avaritia:iron_singularity"})
    e.remove({ id: "avaritia:copper_singularity"})
    e.remove({ id: "avaritia:compressed_crafting_table" })
    e.remove({ id: "avaritia:double_compressed_crafting_table" })
    e.remove({ id: "avaritia:extreme_crafting_table" })
    e.remove({ id: "avaritia:diamond_lattice" })
    e.remove({ id: "avaritia:crystal_matrix_ingot" })
    e.remove({ id: "avaritia:crystal_matrix_block" })

    e.custom({
        "type": "oritech:particle_collision",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
            "item": "modern_industrialization:singularity"
            },
            {
            "item": "modern_industrialization:singularity"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "avaritia:neutron_pile"
            }
        ],
        "time": 15000
    })
})