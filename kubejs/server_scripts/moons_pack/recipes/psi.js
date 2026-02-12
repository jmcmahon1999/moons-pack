ServerEvents.recipes(e => {

    e.custom({
        type:"modern_industrialization:macerator",
        duration:200,
        eu:2,
        item_inputs:[{
            amount:1,
            item:"aethersdelight:arkenium_ingot"
        }],
        item_outputs:[{
            amount:1,
            item:"aether:arkenium_dust"
        }]
    })

    e.remove({ id: "psi:psidust" })
    e.custom({
        type: "psi:trick_crafting",
        cad: {
            count: 1,
            id: "psi:cad_assembly_iron"
        },
        input: {
            item: "aether:arkenium_dust"
        },
        output: {
            count: 1,
            id: "psi:psidust"
        }
    })

    e.remove({ id: "psi:psimetal" })
    e.custom({
        type: "psi:trick_crafting",
        cad: {
            count: 1,
            id: "psi:cad_assembly_iron"
        },
        input: {
            item: "aethersdelight:arkenium_ingot"
        },
        output: {
            count: 1,
            id: "psi:psimetal"
        }
    })

    e.remove({ output: "psi:cad_assembly_iron" })
    e.shaped("psi:cad_assembly_iron",
        [
            "Cii",
            "i  ",
            "   "
        ],
        {
            i: "aether_treasure_reforging:valkyrum_ingot",
            C: "modern_industrialization:electronic_circuit"
        }
    )

    e.remove({ output: "psi:cad_assembly_gold" })
    e.shaped("psi:cad_assembly_gold",
        [
            "Cii",
            "i  ",
            "   "
        ],
        {
            i: "aether_treasure_reforging:pyral_ingot",
            C: "modern_industrialization:electronic_circuit"
        }
    )

    e.remove({ output: "psi:cad_assembler" })
    e.shaped("psi:cad_assembler",
        [
            "iAi",
            "ici",
            " i "
        ],
        {
            i: "aethersdelight:arkenium_ingot",
            A: "modern_industrialization:assembler",
            c: "modern_industrialization:electronic_circuit"
        }
    )

    e.remove({ output: "psi:programmer" })
    e.shaped("psi:programmer",
        [
            "iAi",
            "ici",
            " i "
        ],
        {
            i: "aethersdelight:arkenium_ingot",
            A: "computercraft:computer_advanced",
            c: "modern_industrialization:electronic_circuit"
        }
    )

    e.remove({ id: "psi:psimetal_exosuit_helmet" })
    e.shaped("psi:psimetal_exosuit_helmet",
        [
            "gig",
            "iHi",
            "   "
        ],
        {
            i: "psi:psimetal",
            g: "psi:psigem",
            H: "minecraft:netherite_helmet"
        }
    )

    e.remove({ id: "psi:psimetal_exosuit_chestplate" })
    e.shaped("psi:psimetal_exosuit_chestplate",
        [
            "i i",
            "gHg",
            "iii"
        ],
        {
            i: "psi:psimetal",
            g: "psi:psigem",
            H: "minecraft:netherite_chestplate"
        }
    )

    e.remove({ id: "psi:psimetal_exosuit_leggings" })
    e.shaped("psi:psimetal_exosuit_leggings",
        [
            "gig",
            "iHi",
            "i i"
        ],
        {
            i: "psi:psimetal",
            g: "psi:psigem",
            H: "minecraft:netherite_leggings"
        }
    )

    e.remove({ id: "psi:psimetal_exosuit_boots" })
    e.shaped("psi:psimetal_exosuit_boots",
        [
            "   ",
            "gHg",
            "i i"
        ],
        {
            i: "psi:psimetal",
            g: "psi:psigem",
            H: "minecraft:netherite_boots"
        }
    )

    e.replaceInput({ mod: "psi" },
        "minecraft:iron_ingot",
        "aethersdelight:arkenium_ingot"
    )

    e.remove({ id: "psi:ebony_substance" })
    e.custom({
        type: "psi:dimension_trick_crafting",
        cad: {
            count: 1,
            id: "psi:cad_assembly_psimetal"
        },
        dimensionKey: "deeeperdarker:otherside",
        input: {
            item: "aether:ambrosium_shard"
        },
        output: {
            count: 1,
            id: "psi:ebony_substance"
        },
        piece: "psi:trick_ebony_ivory"
    })

    e.remove({ id: "psi:ivory_substance"})
    e.custom({
        type: "psi:dimension_trick_crafting",
        cad: {
            count: 1,
            id: "psi:cad_assembly_psimetal"
        },
        dimensionKey: "aether:the_aether",
        input: {
            item: "deeperdarker:resonarium"
        },
        output: {
            count: 1,
            id: "psi:ivory_substance"
        },
        piece: "psi:trick_ebony_ivory"
    })
})