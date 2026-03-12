ServerEvents.recipes(e => {
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

    let inputs = []
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
          item: `railcraft:${output}_rail`,
        },
      ],
    });

    e.custom({
      type: "modern_industrialization:assembler",
      duration: 400,
      eu: 8,
      fluid_inputs: [],
      item_inputs: inputs,
      item_outputs: [
        {
          amount: count,
          item: `railcraft:${output}_rail`,
        },
      ],
    });
  }
})