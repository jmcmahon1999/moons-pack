ServerEvents.recipes(e => {
  e.remove({ mod: "neosync" })
  e.shaped("neosync:sync_core",
    [
      "ama",
      "tAt",
      "ama"
    ],
    {
      a: "mekanism:alloy_atomic",
      m: "oritech:platinum_ingot",
      t: "mekanism:teleportation_core",
      A: "minecraft:nether_star"
    }
  )
  e.shaped("neosync:shell_constructor",
    [
      "ScS",
      "ggg",
      "SpS"
    ],
    {
      S: "megacells:sky_steel_block",
      c: "neosync:sync_core",
      g: "#c:glass_panes",
      p: "computercraft:printer"
    }
  )
  e.shaped("neosync:shell_storage",
    [
      "ScS",
      "ggg",
      "SfS"
    ],
    {
      S: "megacells:sky_steel_block",
      c: "neosync:sync_core",
      g: "#c:glass_panes",
      f: "modern_industrialization:frostproof_machine_casing"
    }
  )
  e.shaped("neosync:treadmill",
    [
      "  e",
      "bbI",
      "SSS"
    ],
    {
      S: "megacells:sky_steel_block",
      b: "belts:belt",
      I: "belts:conveyor_support",
      e: "modern_industrialization:electronic_circuit"
    }
  )
})