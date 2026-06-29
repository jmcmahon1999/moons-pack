ServerEvents.recipes(e => {

  e.replaceInput(
    { type: "minecraft:crafting_shaped", mod: "railcraft" },
    "railcraft:saltpeter_dust",
    "mekanism:salt"
  )

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

  e.remove({id: "railcraft:iron_tank_wall"})
  e.shaped(Item.of("railcraft:white_iron_tank_wall", 8), 
    [
      "P P",
      "P P",
      "   "
    ],
    {
      P: "modern_industrialization:iron_plate"
    }
  )

  e.remove({id: "railcraft:steel_tank_wall"})
  e.shaped(Item.of("railcraft:white_steel_tank_wall", 8), 
    [
      "P P",
      "P P",
      "   "
    ],
    {
      P: "modern_industrialization:steel_plate"
    }
  )
})