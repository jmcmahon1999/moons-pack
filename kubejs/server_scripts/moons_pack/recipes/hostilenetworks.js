ServerEvents.recipes(e => {
    e.remove({output: "hostilenetworks:sim_chamber" })
    e.shaped("hostilenetworks:sim_chamber",
        [
            "rrr",
            "mCa",
            "epe"
        ],
        {
            p: "modern_industrialization:processing_unit",
            e: "minecraft:echo_shard",
            m: "modern_industrialization:memory_management_unit",
            a: "modern_industrialization:arithmetic_logic_unit",
            r: "modern_industrialization:random_access_memory",
            C: "computercraft:monitor_advanced"
        }
    )

    e.remove({ output: "hostilenetworks:loot_fabricator" })
    e.shaped("hostilenetworks:loot_fabricator",
        [
            " e ",
            "sPs",
            "mcm"
        ],
        {
            c: "modern_industrialization:processing_unit",
            P: "computercraft:printer",
            e: "enderitemod:enderite_ingot",
            s: "minecraft:echo_shard",
            m: "modern_industrialization:memory_management_unit"
        }
    )

    e.remove({ output: "hostilenetworks:deep_learner" })
    e.shaped("hostilenetworks:deep_learner",
        [
            "ere",
            "aPm",
            "ece"
        ],
        {
            c: "modern_industrialization:processing_unit",
            P: "computercraft:pocket_computer_advanced",
            e: "minecraft:echo_shard",
            m: "modern_industrialization:memory_management_unit",
            a: "modern_industrialization:arithmetic_logic_unit",
            r: "modern_industrialization:random_access_memory",
        }
    )

    e.remove({ id: "hostilenetworks:framework" })
    e.remove({ id: "hostile_neural_industrialization:hostilenetworks/blank_data_model_assembler" })
    e.shaped("hostilenetworks:blank_data_model",
        [
            "gRg",
            "rSr",
            "gRg"
        ],
        {
            R: "modern_industrialization:random_access_memory",
            r: "minecraft:redstone",
            S: "minecraft:smooth_stone",
            g: "minecraft:gold_ingot"
        }
    )

    e.remove({ id: "hostilenetworks:prediction_matrix" })
    e.shaped("hostilenetworks:prediction_matrix",
        [
            "sg ",
            "gSg",
            " gs"
        ],
        {
            S: "modern_industrialization:silicon_wafer",
            g: "#c:glass_panes",
            s: "modern_industrialization:silver_ingot"
        }
    )
})