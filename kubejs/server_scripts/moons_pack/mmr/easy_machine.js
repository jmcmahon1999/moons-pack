MMREvents.machines(e => {
  e.create("mmr:easy_machine")
    .name("Grind-Skipper 3000")
    .color("#FFdf81a7")
    .structure(
      MMRStructureBuilder.create()
        .pattern(
          [
            ["ccc"],
            ["omi"],
            ["ccc"]
          ]
        )
        .keys(
          {
            "c": "modular_machinery_reborn:casing_plain",
            "i": "#modular_machinery_reborn:inputbus",
            "o": "#modular_machinery_reborn:outputbus"
          }
        )
    )
})

ServerEvents.recipes(e => {
    let materials = [
      "bronze",
      "copper",
      "steel",
      "iron",
      "tin",
      "gold"
    ]

    let transitions = [
      ["ingot", "plate", 4, []],
      ["plate", "rod", 2, []],
      ["rod", "curved_plate", 1, ["iron"]],
      ["nugget", "ring", 1, []],
      ["ring", "bolt", 4, []],
    ]

    for (let material of materials) {
      for (let [input, output, ratio, blacklist] of transitions) {
        let mod = "modern_industrialization";
        if (["copper", "gold", "iron"].includes(material) && input == "ingot") {
          mod = "minecraft";
        }
        if (["gold", "iron"].includes(material) && input == "nugget") {
          mod = "minecraft";
        }
        if (blacklist.includes(material)) continue;
        e.recipes.modular_machinery_reborn.machine_recipe("mmr:easy_machine", 40)
          .requireItem(`1x ${mod}:${material}_${input}`, 32, 8)
          .produceItem(`${ratio}x modern_industrialization:${material}_${output}`, 84, 8)
          .width(128)
          .height(64)
          .progressData(
              ProgressData.create()
                  .x(56)
                  .y(8)
                  .direction('left')
          )
      }
    }

    let crafts = [
      ["block", "bolt", "gear", 3, []],
      ["curved_plate", "bolt", "blade", 1, ["steel", "iron", "gold"]],
      ["blade", "bolt", "rotor", 1, ["steel", "iron", "gold"]]
    ]
    for (let material of materials) {
      for (let [input1, input2, output, ratio, blacklist] of crafts) {
        let mod = "modern_industrialization";
        if (["copper", "gold", "iron"].includes(material) && input1 == "block") {
          mod = "minecraft";
        }
        if (blacklist.includes(material)) continue;
        e.recipes.modular_machinery_reborn.machine_recipe("mmr:easy_machine", 100)
          .requireItem(`1x ${mod}:${material}_${input1}`, 32, 8)
          .requireItem(`1x modern_industrialization:${material}_${input2}`, 14, 8)
          .produceItem(`${ratio}x modern_industrialization:${material}_${output}`, 84, 8)
          .width(128)
          .height(64)
          .progressData(
              ProgressData.create()
                  .x(56)
                  .y(8)
                  .direction('left')
          )
      }
    }
    e.recipes.modular_machinery_reborn.machine_recipe("mmr:easy_machine", 100)
          .requireItem(`1x minecraft:redstone`, 14, 8)
          .requireItem(`1x mekanism:ingot_osmium`, 32, 8)
          .produceItem(`1x modular_machinery_reborn:modularium`, 84, 8)
          .width(128)
          .height(64)
          .progressData(
              ProgressData.create()
                  .x(56)
                  .y(8)
                  .direction('left')
          )
    e.recipes.modular_machinery_reborn.machine_recipe("mmr:easy_machine", 100)
          .requireItem(`1x modular_machinery_reborn:casing_plain`, 32, 8)
          .produceItem("1x modular_machinery_reborn:controller[modular_machinery_reborn:machine='mmr:easy_machine']", 84, 8)
          .width(128)
          .height(64)
          .progressData(
              ProgressData.create()
                  .x(56)
                  .y(8)
                  .direction('left')
          )

      let mekanism_recipes = [
        ["mekanism:basic_control_circuit", "minecraft:redstone", "mekanism:ingot_osmium"],
        ["mekanism:advanced_control_circuit", "4x mekanism:alloy_infused", "mekanism:basic_control_circuit"],
        ["mekanism:elite_control_circuit", "4x mekanism:alloy_reinforced", "1x mekanism:advanced_control_circuit"],
        ["mekanism:ultimate_control_circuit", "4x mekanism:alloy_atomic", "1x mekanism:elite_control_circuit"],
        ["mekanism:quantum_control_circuit", "4x mekanism:pellet_plutonium", "1x mekanism:ultimate_control_circuit"],
        ["modern_industrialization:nuclear_alloy_plate", "4x modern_industrialization:lead_plate", "2x mekanism:hdpe_sheet"],
        ["modern_industrialization:stainless_steel_ingot", "2x modern_industrialization:stainless_steel_dust", "2x mekanism:dust_osmium"]
      ]

      for (let [output, input1, input2] of mekanism_recipes) {
        e.recipes.modular_machinery_reborn.machine_recipe("mmr:easy_machine", 100)
          .requireItem(input1, 14, 8)
          .requireItem(input2, 32, 8)
          .produceItem(output, 84, 8)
          .width(128)
          .height(64)
          .progressData(
              ProgressData.create()
                  .x(56)
                  .y(8)
                  .direction('left')
          )
      }
})