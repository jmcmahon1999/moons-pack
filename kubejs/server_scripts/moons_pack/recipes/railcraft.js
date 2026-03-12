ServerEvents.recipes((e) => {
  e.remove({
    type: "railcraft:rolling",
    output: "#railcraft:plate_chest_loot",
  });
  e.remove({ id: `railcraft:rolling/bushing_gear_bronze` });
  e.remove({ id: `railcraft:rolling/bushing_gear_brass` });

  e.replaceInput(
    { type: "minecraft:crafting_shaped", mod: "railcraft" },
    "railcraft:rebar",
    "modern_industrialization:bronze_rod",
  );

  e.replaceInput(
    { type: "minecraft:crafting_shaped", mod: "railcraft" },
    "railcraft:charge_motor",
    "modern_industrialization:motor",
  );

  e.replaceInput(
    { id: "railcraft:bag_of_cement" },
    "minecraft:quartz",
    "minecraft:clay_ball"
  )

  let electrodes = [
    "iron",
    "gold",
    "zinc",
    "nickel",
    "carbon",
    "tin",
    "lead",
    "brass",
    "invar",
    "steel",
    "bronze",
    "copper",
    "silver",
  ];
  for (let material of electrodes) {
    e.remove({ id: `railcraft:rolling/${material}_electrode` });
    e.replaceInput(
      { type: "minecraft:crafting_shaped", mod: "railcraft" },
      `railcraft:${material}_electrode`,
      `modern_industrialization:${material}_rod`,
    );
  }

  e.remove({ id: "railcraft:rolling/nickel_turbine_blade" })
  e.remove({ id: "railcraft:rolling/steel_turbine_blade" })
  e.shaped(Item.of("railcraft:turbine_blade", 4),
    [" C ", " C ", " R "],
    {
      C: "modern_industrialization:steel_curved_plate",
      R: "modern_industrialization:steel_rod"
    }
  )

  let gears = [
    "bronze",
    "copper",
    "gold",
    "invar",
    "iron",
    "steel",
    "tin",
    "brass",
  ];

  for (let gear of gears) {
    e.remove({ id: `railcraft:${gear}_gear` });
  }

  let metals = ["lead", "brass", "silver", "nickel", "zinc"];

  for (let metal of metals) {
    e.remove({ id: `railcraft:${metal}_gear` });
    e.shaped(`modern_industrialization:${metal}_gear`, ["PBP", "BRB", "PBP"], {
      P: `modern_industrialization:${metal}_plate`,
      B: `modern_industrialization:${metal}_bolt`,
      R: `modern_industrialization:${metal}_ring`,
    });
    e.custom({
      type: "minecraft:crafting_shaped",
      category: "misc",
      key: {
        R: {
          tag: `c:rods/${metal}`,
        },
        b: {
          item: `modern_industrialization:${metal}_bolt`,
        },
      },
      pattern: ["bRb", "R R", "bRb"],
      result: {
        count: 2,
        id: `modern_industrialization:${metal}_ring`,
      },
    });

    e.custom({
      type: "modern_industrialization:cutting_machine",
      duration: 100,
      eu: 2,
      fluid_inputs: [
        {
          amount: 1,
          fluid: "modern_industrialization:lubricant",
        },
      ],
      item_inputs: [
        {
          amount: 1,
          tag: `c:rods/${metal}`,
        },
      ],
      item_outputs: [
        {
          amount: 2,
          item: `modern_industrialization:${metal}_bolt`,
        },
      ],
    });

    e.custom({
      type: "extended_industrialization:bending_machine",
      duration: 50,
      eu: 2,
      item_inputs: [
        {
          amount: 1,
          tag: `c:rods/${metal}`,
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: `modern_industrialization:${metal}_ring`,
        },
      ],
    });

    e.custom({
      type: "modern_industrialization:cutting_machine",
      duration: 100,
      eu: 2,
      fluid_inputs: [
        {
          amount: 1,
          fluid: "modern_industrialization:lubricant",
        },
      ],
      item_inputs: [
        {
          amount: 1,
          tag: `c:ingots/${metal}`,
        },
      ],
      item_outputs: [
        {
          amount: 2,
          item: `modern_industrialization:${metal}_rod`,
        },
      ],
    });

    e.custom({
      type: "modern_industrialization:assembler",
      duration: 100,
      eu: 2,
      fluid_inputs: [
        {
          amount: 100,
          fluid: "modern_industrialization:soldering_alloy",
        },
      ],
      item_inputs: [
        {
          amount: 4,
          tag: `c:plates/${metal}`,
        },
        {
          amount: 1,
          item: `modern_industrialization:${metal}_ring`,
        },
      ],
      item_outputs: [
        {
          amount: 2,
          item: `modern_industrialization:${metal}_gear`,
        },
      ],
    });
  }

  metals = ["lead", "silver", "nickel"];

  for (let metal of metals) {
    e.custom({
      type: "modern_industrialization:cutting_machine",
      duration: 100,
      eu: 2,
      fluid_inputs: [
        {
          amount: 1,
          fluid: "modern_industrialization:lubricant",
        },
      ],
      item_inputs: [
        {
          amount: 1,
          item: `modern_industrialization:${metal}_double_ingot`,
        },
      ],
      item_outputs: [
        {
          amount: 4,
          item: `modern_industrialization:${metal}_rod`,
        },
      ],
    });
  }

  e.custom({
    type: "railcraft:blasting",
    experience: 0.0,
    ingredient: {
      tag: "c:raw_materials/iron",
    },
    result: {
      count: 1,
      id: "minecraft:iron_ingot",
    },
    slagOutput: 1,
  });

  e.remove({ id: "modern_industrialization:vanilla_recipes/assembler/powered_rail" })
  e.custom({
    type: "modern_industrialization:assembler",
    duration: 200,
    eu: 8,
    fluid_inputs: [
      {
        amount: 100,
        fluid: "modern_industrialization:creosote",
      },
    ],
    item_inputs: [
      {
        amount: 6,
        item: "modern_industrialization:gold_rod"
      },
      {
        amount: 1,
        item: "minecraft:redstone"
      },
      {
        amount: 1,
        item: "minecraft:stick"
      }
    ],
    item_outputs: [
      {
        amount: 16,
        item: "minecraft:powered_rail",
      },
    ],
  });

  e.remove({ id: "modern_industrialization:vanilla_recipes/assembler/rail" })
  e.custom({
    type: "modern_industrialization:assembler",
    duration: 200,
    eu: 8,
    fluid_inputs: [
      {
        amount: 100,
        fluid: "modern_industrialization:creosote",
      },
    ],
    item_inputs: [
      {
        amount: 6,
        item: "modern_industrialization:iron_rod"
      },
      {
        amount: 1,
        item: "minecraft:stick"
      }
    ],
    item_outputs: [
      {
        amount: 16,
        item: "minecraft:rail",
      },
    ],
  });

  let rails = [
    { 
      output: "standard", 
      count: 16,
      ingredients: ["modern_industrialization:steel_rod"],
      amounts: [6]
    },
    { 
      output: "standard", 
      count: 8,
      ingredients: ["modern_industrialization:bronze_rod"],
      amounts: [6]
    },
    { 
      output: "standard", 
      count: 12,
      ingredients: ["modern_industrialization:invar_rod"],
      amounts: [6]
    },
    { 
      output: "advanced", 
      count: 8,
      ingredients: ["minecraft:redstone", "modern_industrialization:gold_rod"],
      amounts: [3, 3]
    },
    { 
      output: "reinforced", 
      count: 8,
      ingredients: ["modern_industrialization:steel_rod", "mekanism:dust_obsidian"],
      amounts: [6, 3]
    },
    { 
      output: "high_speed", 
      count: 8,
      ingredients: ["modern_industrialization:steel_rod", "minecraft:blaze_powder", "modern_industrialization:gold_rod"],
      amounts: [3, 3, 3]
    },
    { 
      output: "electric", 
      count: 12,
      ingredients: ["modern_industrialization:steel_rod", "modern_industrialization:copper_rod"],
      amounts: [6, 3]
    },
    { 
      output: "electric", 
      count: 6,
      ingredients: ["modern_industrialization:copper_rod", "modern_industrialization:copper_rod"],
      amounts: [3, 3]
    }
  ]

  for (let {output, count, ingredients, amounts} of rails) {

    inputs = []
    for (let i=0; i<ingredients.length; i++) {
      inputs.push({
        amount: amounts[i],
        item: ingredients[i]
      })
    }
    e.custom({
      type: "modern_industrialization:assembler",
      duration: 200,
      eu: 8,
      fluid_inputs: [
        {
          amount: 100,
          fluid: "modern_industrialization:creosote",
        },
      ],
      item_inputs: inputs,
      item_outputs: [
        {
          amount: count,
          item: output,
        },
      ],
    });

    e.custom({
      type: "modern_industrialization:assembler",
      duration: 400,
      eu: 8,
      fluid_inputs: [],
      item_inputs: [
        ...item_inputs,
        {
          amount: 1,
          item: "minecraft:stick"
        }
      ],
      item_outputs: [
        {
          amount: count,
          item: output,
        },
      ],
    });
  }

  e.custom({
      type: "modern_industrialization:assembler",
      duration: 100,
      eu: 2,
      fluid_inputs: [
        {
          amount: 100,
          fluid: "modern_industrialization:soldering_alloy",
        },
      ],
      item_inputs: [
        {
          amount: 4,
          tag: `c:plates/${metal}`,
        },
        {
          amount: 1,
          item: `modern_industrialization:${metal}_ring`,
        },
      ],
      item_outputs: [
        {
          amount: 2,
          item: `modern_industrialization:${metal}_gear`,
        },
      ],
  });

  e.remove({ id: "railcraft:blast_furnace/blasting_steel_boots" });
  e.remove({ id: "railcraft:blast_furnace/blasting_iron_hoe" });
  e.remove({ id: "railcraft:blast_furnace/blasting_iron_boots" });
  e.remove({ id: "railcraft:blast_furnace/blasting_steel_hoe" });
  e.remove({ id: "railcraft:blast_furnace/blasting_iron_helmet" });
  e.remove({ id: "railcraft:blast_furnace/blasting_iron_shovel" });
  e.remove({ id: "railcraft:blast_furnace/blasting_steel_helmet" });
  e.remove({ id: "railcraft:blast_furnace/blasting_iron_pickaxe" });
  e.remove({ id: "railcraft:blast_furnace/blasting_steel_chestplate" });
  e.remove({ id: "railcraft:blast_furnace/blasting_iron_door" });
  e.remove({ id: "railcraft:blast_furnace/blasting_iron_sword" });
  e.remove({ id: "railcraft:blast_furnace/blasting_iron_crowbar" });
  e.remove({ id: "railcraft:blast_furnace/blasting_iron_horse_armor" });
  e.remove({ id: "railcraft:blast_furnace/blasting_iron_axe" });
  e.remove({ id: "railcraft:blast_furnace/blasting_bucket" });
  e.remove({ id: "railcraft:blast_furnace/blasting_steel_leggings" });
  e.remove({ id: "railcraft:blast_furnace/blasting_steel_axe" });
  e.remove({ id: "railcraft:blast_furnace/blasting_steel_shears" });
  e.remove({ id: "railcraft:blast_furnace/blasting_steel_pickaxe" });
  e.remove({ id: "railcraft:blast_furnace/blasting_iron_trapdoor" });
  e.remove({ id: "railcraft:blast_furnace/blasting_iron_leggings" });
  e.remove({ id: "railcraft:blast_furnace/blasting_shears" });
  e.remove({ id: "railcraft:blast_furnace/blasting_iron_chestplate" });
  e.remove({ id: "railcraft:blast_furnace/blasting_iron_ingot" });
  e.remove({ id: "railcraft:blast_furnace/blasting_steel_sword" });
  e.remove({ id: "railcraft:blast_furnace/blasting_steel_block" });

  let crusher_materials = [
    "iron",
    "nickel",
    "gold",
    "copper",
    "silver",
    "lead",
  ];
  for (let material of crusher_materials) {
    e.remove({
      id: `railcraft:crusher/crushing_tags_raw_materials_${material}`,
    });
    e.remove({ id: `railcraft:crusher/crushing_tags_ores_${material}` });
    e.remove({
      id: `railcraft:crusher/crushing_tags_storage_blocks_raw_${material}`,
    });
  }

  e.remove({ id: "railcraft:crusher/crushing_ender_pearl" });
  e.remove({ id: "railcraft:crusher/crushing_coal" });
  e.remove({ id: "railcraft:crusher/crushing_coal_block" });
  e.remove({ id: "railcraft:crusher/crushing_charcoal" });
  e.remove({ id: "railcraft:crusher/crushing_tags_ores_diamond" });
  e.remove({ id: "railcraft:crusher/crushing_tags_ores_redstone" });
  e.remove({ id: "railcraft:crusher/crushing_tags_ores_emerald" });
  e.remove({ id: "minecraft:gunpowder" });

  e.remove({ output: "railcraft:coal_coke" });
  e.remove({ output: "railcraft:coal_coke_block" });
  e.remove({ output: "railcraft:coke_oven_bricks" });

  e.remove({ id: "railcraft:crusher/crushing_firestone_ore" })
  e.remove({ id: "railcraft:cut_firestone" })
  e.remove({ id: "railcraft:firestone_cracked_fixing"})
  e.remove({ id: "railcraft:firestone_lava_refinement"})

  e.remove({ type: "railcraft:crushing_category" })
  e.remove({ id: "railcraft:steam_oven" })
  e.remove({ id: "railcraft:blasting_category" })
  e.remove({ id: "mekanism:rails" })
});
