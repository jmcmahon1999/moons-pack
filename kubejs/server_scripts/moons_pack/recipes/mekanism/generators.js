ServerEvents.recipes(e => {

    e.shaped("4x mekanismgenerators:fission_reactor_casing",
      [
        " N ",
        "NSN",
        " N "
      ],
      {
        N: "modern_industrialization:nuclear_alloy_plate",
        S: "mekanism:steel_casing"
      }
    )

    e.shaped("4x mekanismgenerators:reactor_glass",
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
    )

    e.shaped("mekanismgenerators:electromagnetic_coil",
      [
        "SGS",
        "GBG",
        "SGS"
      ],
      {
        B: "mekanism:energy_tablet",
        S: "modern_industrialization:stainless_steel_plate",
        G: "modern_industrialization:electrum_plate"
      }
    )

    e.shaped("mekanismgenerators:turbine_blade",
      [
        " S ",
        "SAS",
        " S "
      ],
      {
        A: "mekanism:alloy_infused",
        S: "modern_industrialization:stainless_steel_plate"
      }
    )

    e.shaped("mekanismgenerators:heat_generator",
      [
        "PPP",
        "WOW",
        "CFC"
      ],
      {
        P: "modern_industrialization:steel_large_plate",
        W: "#minecraft:planks",
        O: "mekanism:ingot_osmium",
        C: "minecraft:copper_ingot",
        F: "minecraft:furnace"
      }
    )

    e.shaped("mekanismgenerators:bio_generator",
      [
        "rAr",
        "bCb",
        "PAP"
      ],
      {
        P: "modern_industrialization:steel_large_plate",
        r: "minecraft:redstone",
        A: "mekanism:alloy_infused",
        b: "mekanism:bio_fuel",
        C: "mekanism:basic_control_circuit"
      }
    )

    e.shaped("mekanismgenerators:advanced_solar_generator",
      [
        "sAs",
        "sCs",
        "PPP"
      ],
      {
        P: "modern_industrialization:steel_large_plate",
        A: "mekanism:alloy_infused",
        s: "mekanismgenerators:solar_generator",
        C: "mekanism:basic_control_circuit"
      }
    )

    e.shaped("mekanismgenerators:turbine_rotor",
      [
        "PAP",
        "PAP",
        "PAP"
      ],
      {
        P: "modern_industrialization:stainless_steel_plate",
        A: "mekanism:alloy_infused"
      }
    )

    e.shaped("mekanismgenerators:rotational_complex",
      [
        "PAP",
        "CAC",
        "PAP"
      ],
      {
        P: "modern_industrialization:stainless_steel_plate",
        A: "mekanism:alloy_infused",
        C: "mekanism:advanced_control_circuit"
      }
    )

    e.shaped("4x mekanismgenerators:turbine_casing",
      [
        " P ",
        "POP",
        " P "
      ],
      {
        P: "modern_industrialization:stainless_steel_plate",
        O: "mekanism:ingot_osmium"
      }
    )

    e.shaped("mekanismgenerators:saturating_condenser",
      [
        "PtP",
        "tBt",
        "PtP"
      ],
      {
        P: "modern_industrialization:stainless_steel_plate",
        t: "modern_industrialization:tin_rod",
        B: "minecraft:bucket"
      }
    )

    e.shaped("2x mekanismgenerators:laser_focus_matrix",
      [
        " P ",
        "POP",
        " P "
      ],
      {
        P: "mekanismgenerators:reactor_glass",
        O: "modern_industrialization:zanite_aperture"
      }
    )

    /*e.replaceInput({mod: "mekanismgenerators" },
        "modern_industrialization:lead_ingot",
        "modern_industrialization:nuclear_alloy_plate"
    )*/

    /*e.replaceInput({output: "mekanismgenerators:fusion_reactor_frame"},
      "mekanism:steel_casing",
      "mekanismgenerators:fission_reactor_casing"
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
    )*/
})