ServerEvents.tags('item', e => {

    const oritech_fluids = [
        "oil",
        "fuel",
        "biofuel",
        "steam",
        "heavy_oil",
        "diesel",
        "naphtha",
        "sulfuric_acid",
        "silicon_wash",
        "mineral_slurry",
        "sheol_fire",
        "strange_matter"
    ]

    const mekanism_fluids = [
        "hydrogen",
        "oxygen",
        "chlorine",
        "sulfur_dioxide",
        "sulfur_trioxide",
        "sulfuric_acid",
        "hydrogen_chloride",
        "hydrofluoric_acid",
        "uranium_oxide",
        "uranium_hexafluoride",
        "ethene",
        "sodium",
        "superheated_sodium",
        "brine",
        "lithium",
        "steam",
        "heavy_water",
        "nutritional_paste",
    ]

    const mi_fluids = [
        "acetylene",
        "acrylic_acid",
        "acrylic_glue",
        "argon",
        "benzene",
        "biodiesel",
        "boosted_diesel",
        "butadiene",
        "caprolactam",
        "chlorine",
        "chromium_hydrochloric_solution",
        "creosote",
        "crude_oil",
        "cryofluid",
        "deuterium",
        "diesel",
        "diethyl_ether",
        "ethanol",
        "ethylbenzene",
        "ethylene",
        "heavy_fuel",
        "heavy_water",
        "heavy_water_steam",
        "helium",
        "helium_plasma",
        "helium_3",
        "high_pressure_heavy_water",
        "high_pressure_heavy_water_steam",
        "high_pressure_steam",
        "high_pressure_water",
        "hydrochloric_acid",
        "hydrogen",
        "light_fuel",
        "liquid_air",
        "lubricant",
        "manganese_sulfuric_solution",
        "methane",
        "molten_redstone",
        "naphtha",
        "nitrogen",
        "nylon",
        "oxygen",
        "plant_oil",
        "platinum_sulfuric_solution",
        "polyethylene",
        "polyvinyl_chloride",
        "propene",
        "purified_platinum_sulfuric_solution",
        "raw_biodiesel",
        "raw_synthetic_oil",
        "shale_oil",
        "sodium_hydroxide",
        "soldering_alloy",
        "sugar_solution",
        "steam",
        "steam_cracked_heavy_fuel",
        "steam_cracked_light_fuel",
        "steam_cracked_naphtha",
        "styrene",
        "styrene_butadiene",
        "styrene_butadiene_rubber",
        "sulfuric_acid",
        "sulfuric_crude_oil",
        "sulfuric_heavy_fuel",
        "sulfuric_light_fuel",
        "sulfuric_naphtha",
        "synthetic_oil",
        "synthetic_rubber",
        "toluene",
        "tritium",
        "uu_matter",
        "vinyl_chloride",
    ]

    const ei_fluids = [
        "honey",
        "manure",
        "composted_manure",
        "phosphoric_acid",
        "potassium_chloride",
        "potassium_hydroxide",
        "npk_fertilizer",
        "distilled_water",
        "blazing_essence"
    ]

    const aquaculture_fluids = [
        "atlantic_cod",
        "blackfish",
        "pacific_halibut",
        "atlantic_halibut",
        "atlantic_herring",
        "pink_salmon",
        "pollock",
        "rainbow_trout",
        "bayad",
        "boulti",
        "capitaine",
        "synodontis",
        "smallmouth_bass",
        "bluegill",
        "brown_trout",
        "carp",
        "catfish",
        "gar",
        "minnow",
        "muskellunge",
        "perch",
        "arapaima",
        "piranha",
        "tambaqui",
        "brown_shrooma",
        "red_shrooma",
        "jellyfish",
        "red_grouper",
        "tuna"
    ]

    const ndu_fluids = [
        "lava_pufferfish",
        "obsidianfish",
        "searing_cod",
        "bonefish",
        "wither_bonefish",
        "blazefish",
        "magmacubefish",
        "glowdine",
        "soulsucker",
        "fortress_grouper",
        "eyeball_fish"
    ]

    for (let fluid of oritech_fluids) {
        e.add(`c:buckets`, `oritech:still_${fluid}_bucket`)
    }

    for (let fluid of mekanism_fluids) {
        e.add(`c:buckets`, `mekanism:${fluid}_bucket`)
    }

    for (let fluid of mi_fluids) {
        e.add(`c:buckets`, `modern_industrialization:${fluid}_bucket`)
    }

    for (let fluid of ei_fluids) {
        e.add(`c:buckets`, `extended_industrialization:${fluid}_bucket`)
    }

    for (let fluid of aquaculture_fluids) {
        e.add(`c:buckets`, `aquaculture:${fluid}_bucket`)
    }

    for (let fluid of ndu_fluids) {
        e.add(`c:buckets`, `netherdepthsupgrade:${fluid}_bucket`)
    }

    e.add("c:buckets", "railcraft:creosote_bucket");
    e.add("c:buckets", "crittersandcompanions:dumbo_octopus_bucket");
    e.add("c:buckets", "crittersandcompanions:koi_fish_bucket");
    e.add("c:buckets", "crittersandcompanions:sea_bunny_bucket");


    const machine_paints = [
        "diamond",
        "redstone",
        "orange",
        "camo",
        "fluxite",
        "white",
        "industrial",
        "netherite",
        "sculk"
    ]

    for (let paint of machine_paints) {
        e.add(`c:buckets`, `oritech:${paint}_paint`)
    }

    const resource_nodes = [
        "redstone",
        "lapis",
        "iron",
        "coal",
        "gold",
        "emerald",
        "diamond",
        "copper",
        "nickel",
        "platinum",
        "uranium"
    ]

    for (let resource of resource_nodes) {
        e.add(`c:ores`, `oritech:resource_node_${resource}`)
    }

    const colours = [
        "white",
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "gray",
        "light_gray",
        "cyan",
        "purple",
        "blue",
        "brown",
        "green",
        "red",
        "black"
    ]

    e.add("minecraft:levers", "minecraft:lever");
    e.add("minecraft:levers", "oritech:tech_lever");
    e.add("deeperdarker:sculk_transmitters", "deeperdarker:sculk_transmitter");

    for (let colour of colours) {
        e.add("minecraft:slabs", `moreconcrete:${colour}_concrete_slab`);
        e.add("minecraft:stairs", `moreconcrete:${colour}_concrete_stairs`);
        e.add("minecraft:walls", `moreconcrete:${colour}_concrete_wall`);
        e.add("minecraft:fences", `moreconcrete:${colour}_concrete_fence`);
        e.add("minecraft:fence_gates", `moreconcrete:${colour}_concrete_fence_gate`);
        e.add("minecraft:buttons", `moreconcrete:${colour}_concrete_button`);
        e.add("minecraft:levers", `moreconcrete:${colour}_concrete_lever`);
        e.add("minecraft:fences", `railcraft:${colour}_post`);
        e.add("deeperdarker:sculk_transmitters", `deeperdarker:${colour}_sculk_transmitter`);
        e.add("psi:cad_colorizers", `psi:cad_colorizer_${colour}`);
        e.add("dimdoors:fabric", `dimdoors:${colour}_fabric`);
        e.add("dimdoors:ancient_fabric", `dimdoors:${colour}_ancient_fabric`);
    }

    e.add("psi:cad_colorizers", `psi:cad_colorizer_rainbow`);
    e.add("psi:cad_colorizers", `psi:cad_colorizer_empty`);
    e.add("psi:cad_colorizers", `psi:cad_colorizer_psi`);

    const building_materials = [
        "oritech:machine_plating",
        "oritech:iron_plating",
        "oritech:carbon_plating",
        "oritech:nickel_plating",
        "railcraft:quarried_brick",
        "railcraft:abyssal_brick",
        "railcraft:quarried_paver",
        "railcraft:abyssal_paver",
        "ae2:sky_stone",
        "ae2:smooth_sky_stone",
        "ae2:sky_stone_brick",
        "ae2:sky_stone_small_brick",
        "ae2:fluix",
        "ae2:quartz",
        "ae2:cut_quartz",
        "ae2:smooth_quartz",
        "ae2:quartz_brick",
        "ae2:chiseled_quartz",
        "ae2:quartz_pillar"
    ]

    for (let material of building_materials) {
        e.add("minecraft:slabs", `${material}_slab`);
        e.add("minecraft:stairs", `${material}_stairs`);
    }

    e.add("minecraft:fence_gates", "aether:skyroot_fence_gate");
    e.add("minecraft:fence_gates", "mynethersdelight:powdery_fence_gate");

    e.add("railcraft:tank_parts", "#railcraft:steel_tank_wall");
    e.add("railcraft:tank_parts", "#railcraft:steel_tank_gauge");
    e.add("railcraft:tank_parts", "#railcraft:steel_tank_valve");
    e.add("railcraft:tank_parts", "#railcraft:iron_tank_wall");
    e.add("railcraft:tank_parts", "#railcraft:iron_tank_valve");
    e.add("railcraft:tank_parts", "#railcraft:iron_tank_gauge");

    e.add("railcraft:abandoned_track", "railcraft:abandoned_buffer_stop_track");
    e.add("railcraft:iron_track", "railcraft:iron_buffer_stop_track");
    e.add("railcraft:electric_track", "railcraft:electric_buffer_stop_track");
    e.add("railcraft:reinforced_track", "railcraft:reinforced_buffer_stop_track");
    e.add("railcraft:strap_iron_track", "railcraft:strap_iron_buffer_stop_track");

    e.add("minecraft:fishes", "aquaculture:minnow")
    e.add("minecraft:fishes", "aquaculture:box_turtle")
    e.add("minecraft:fishes", "aquaculture:arrau_turtle")
    e.add("minecraft:fishes", "aquaculture:starshell_turtle")
    e.add("minecraft:fishes", "oceansdelight:guardian")

    const sizes = [
        "1",
        "4",
        "16",
        "64",
        "256"
    ]

    for (let size of sizes) {
        e.add("appflux:cells", `appflux:fe_${size}k_cell`);
        e.add("appflux:portable_cells", `appflux:fe_${size}k_portable_cell`);
        e.add("appflux:cells", `appflux:fe_${size}m_cell`);
        e.add("appflux:portable_cells", `appflux:fe_${size}m_portable_cell`);
        e.add("appflux:components", `appflux:core_${size}k`);
        e.add("appflux:components", `appflux:core_${size}m`);

        e.add("ae2:components", `ae2:cell_component_${size}k`);
        e.add("ae2:item_cells", `ae2:item_storage_cell_${size}k`);
        e.add("ae2:portable_item_cells", `ae2:portable_item_cell_${size}k`);
        e.add("ae2:fluid_cells", `ae2:fluid_storage_cell_${size}k`);
        e.add("ae2:portable_fluid_cells", `ae2:portable_fluid_cell_${size}k`);
        e.add("ae2:crafting_storages", `ae2:${size}k_crafting_storage`);

        e.add("appmek:fluid_cells", `appmek:chemical_storage_cell_${size}k`);
        e.add("appmek:portable_fluid_cells", `appmek:portable_chemical_cell_${size}k`);

        e.add("appex:experience_cells", `appex:experience_storage_cell_${size}k`);
        e.add("appex:portable_experience_cells", `appex:portable_experience_cell_${size}k`);

        e.add("megacells:components", `megacells:cell_component_${size}m`);
        e.add("megacells:item_cells", `megacells:item_storage_cell_${size}m`);
        e.add("megacells:portable_item_cells", `megacells:portable_item_cell_${size}m`);
        e.add("megacells:fluid_cells", `megacells:fluid_storage_cell_${size}m`);
        e.add("megacells:portable_fluid_cells", `megacells:portable_fluid_cell_${size}m`);
        e.add("megacells:chemical_cells", `megacells:chemical_storage_cell_${size}m`);
        e.add("megacells:portable_chemical_cells", `megacells:portable_chemical_cell_${size}m`);
        e.add("megacells:experience_cells", `megacells:experience_storage_cell_${size}m`);
        e.add("megacells:portable_experience_cells", `megacells:portable_experience_cell_${size}m`);
        e.add("megacells:crafting_storages", `megacells:${size}m_crafting_storage`)
    }

    const spatial_sizes = [
        "2",
        "16",
        "128"
    ]

    for (let size of spatial_sizes) {
        e.add("ae2:spatial_cells", `ae2:spatial_storage_cell_${size}`);
        e.add("ae2:spatial_components", `ae2:spatial_cell_component_${size}`);
    }

    const metals = [
        "gold",
        "iron",
        "copper",
        "bronze",
        "tin",
        "steel",
        "aluminum",
        "invar",
        "titanium",
        "stainless_steel",
        "lead",
        "brass",
        "silver",
        "nickel",
        "zinc",
        "battery_alloy",
        "cupronickel",
        "antimony",
        "electrum",
        "silicon",
        "chromium",
        "beryllium",
        "annealed_copper",
        "platinum",
        "kanthal",
        "iridium",
        "cadmium",
        "superconductor",
        "tungsten",
        "blastproof_alloy",
        "nuclear_alloy"
    ]

    for (let metal of metals) {
        e.add("c:bolts", `modern_industrialization:${metal}_bolt`);
        e.add("c:rings", `modern_industrialization:${metal}_ring`);
        e.add("c:double_ingots", `modern_industrialization:${metal}_double_ingot`);
        e.add("c:blades", `modern_industrialization:${metal}_blade`);
        e.add("c:rotors", `modern_industrialization:${metal}_rotor`);
        e.add("c:curved_plates", `modern_industrialization:${metal}_curved_plate`);
        e.add("c:large_plates", `modern_industrialization:${metal}_large_plate`);
        e.add("c:drills", `modern_industrialization:${metal}_drill`)
        e.add("c:drill_heads", `modern_industrialization:${metal}_drill_head`)
        e.add("c:wires", `modern_industrialization:${metal}_wire`)
        e.add("c:wires", `modern_industrialization:${metal}_fine_wire`)
        e.add("c:ingots", `modern_industrialization:${metal}_hot_ingot`)
        e.add("modern_industrialization:cables", `modern_industrialization:${metal}_cable`)
    }

    e.add("c:dusts", "modern_industrialization:uncooked_steel_dust")
    e.add("c:plates", "modern_industrialization:silicon_p_doped_plate")
    e.add("c:plates", "modern_industrialization:silicon_n_doped_plate")
    e.add("c:plates", "modern_industrialization:mixed_plate_nuclear")
    e.add("c:large_plates", "modern_industrialization:diamond_large_plate")
    e.add("c:large_plates", "modern_industrialization:carbon_large_plate")
    e.add("c:wires", "modern_industrialization:cupronickel_wire_magnetic")
    e.add("c:rods", "modern_industrialization:steel_rod_magnetic")
    e.add("c:rods", "modern_industrialization:stainless_steel_rod_magnetic")
    e.add("c:drills", "modern_industrialization:gravitite_drill")
    e.add("c:curved_plates", `extended_industrialization:silver_curved_plate`);

    const crushed = [
        "coal",
        "diamond",
        "emerald",
        "lapis",
        "redstone",
        "quartz",
        "lignite_coal",
        "bauxite",
        "salt",
        "chromium",
        "manganese",
        "monazite"
    ]

    for (let material of crushed) {
        e.add("c:crushed_dusts", `modern_industrialization:${material}_crushed_dust`)
    }

    const fuel_rods = [
        "uranium",
        "le_uranium",
        "he_uranium",
        "le_mox",
        "he_mox"
    ]

    for (let fuel of fuel_rods) {
        e.add("modern_industrialization:fuel_rods", `modern_industrialization:${fuel}_fuel_rod`)
        e.add("modern_industrialization:fuel_rods", `modern_industrialization:${fuel}_fuel_rod_depleted`)
        e.add("modern_industrialization:fuel_rods", `modern_industrialization:${fuel}_fuel_rod_double`)
        e.add("modern_industrialization:fuel_rods", `modern_industrialization:${fuel}_fuel_rod_quad`)
    }


    const quantum_upgrades = [
        "walk_speed",
        "sprint_speed",
        "step_assist",
        "jump_height",
        "lava_immunity",
        "flight_card",
        "water_breathing",
        "auto_feeding",
        "auto_stock",
        "magnet",
        "hp_buffer",
        "evasion",
        "regeneration",
        "strength",
        "attack_speed",
        "luck",
        "reach",
        "swim_speed",
        "night_vision",
        "flight_drift",
        "recharging",
        "portable_workbench",
        "pick_craft",
        "camo"
    ]

    e.add("advanced_ae:quantum_upgrades", "advanced_ae:quantum_upgrade_base")
    for (let upgrade of quantum_upgrades) {
        e.add("advanced_ae:quantum_upgrades", `advanced_ae:${upgrade}_card`)
    }
})