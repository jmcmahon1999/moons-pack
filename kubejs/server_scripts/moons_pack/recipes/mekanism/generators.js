ServerEvents.recipes(e => {

    /*e.shaped("mekanismgenerators:fission_reactor_casing",
      [
        " N ",
        "NSN",
        " N "
      ],
      {
        N: "modern_industrialization:nuclear_alloy_plate",
        S: "mekanism:steel_plating"
      }
    )

    e.shaped("mekanismgenerators:reactor_glass",
      [
        "iNi",
        "NSN",
        "iNi"
      ],
      {
        N: "modern_industrialization:nuclear_alloy_plate",
        S: "#c:glass_blocks/cheap",
        i: "mekanism:enriched_iron"
      }
    )

    e.shaped("mekanismgenerators:fission_fuel_assembly",
      [
        "NSN",
        "NTN",
        "NSN"
      ],
      {
        N: "modern_industrialization:nuclear_alloy_plate",
        S: "modern_industrialization:stainless_steel_plate",
        T: "mekanism:basic_chemical_tank"
      }
    )

    e.shaped("mekanismgenerators:control_rod_assembly",
      [
        "NEN",
        "SNS",
        "SNS"
      ],
      {
        N: "modern_industrialization:nuclear_alloy_plate",
        S: "modern_industrialization:stainless_steel_plate",
        E: "mekanism:elite_control_circuit"
      }
    )*/

    e.replaceInput({mod: "mekanismgenerators" },
        "modern_industrialization:lead_ingot",
        "modern_industrialization:nuclear_alloy_plate"
    )

    e.replaceInput({output: "mekanismgenerators:fusion_reactor_frame"},
      "mekanism:steel_casing",
      "mekanism:fission_reactor_casing"
    )

    e.replaceInput({mod: "mekanismgenerators" },
        "minecraft:gold_ingot",
        "modern_industrialization:electrum_plate"
    )

    e.replaceInput({mod: "mekanismgenerators" },
        "modern_industrialization:steel_ingot",
        "modern_industrialization:stainless_steel_plate"
    )

    e.replaceInput({mod: "mekanismgenerators" },
        "minecraft:iron_ingot",
        "modern_industrialization:steel_large_plate"
    )
})