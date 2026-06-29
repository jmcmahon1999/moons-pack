ServerEvents.recipes(e => {
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

  e.remove({
    type: "railcraft:rolling",
    output: "#railcraft:plate_chest_loot",
  });
  e.remove({ id: `railcraft:rolling/bushing_gear_bronze` });
  e.remove({ id: `railcraft:rolling/bushing_gear_brass` });
  e.remove({ id: "railcraft:invar_ingot_crafted_with_ingots" });
  e.remove({ id: "railcraft:crusher/crushing_tags_ores_saltpeter"});
})