ServerEvents.recipes(e => {
  e.remove({ mod: "sync"})
  e.shaped("sync:sync_core",
    [
      "ama",
      "tAt",
      "ama"
    ],
    {
      a: "mekanism:atomic_alloy",
      m: "oritech:platinum_ingot",
      t: "mekanism:teleportation_core",
      A: "minecraft:nether_star"
    }
  )
  e.shaped("sync:shell_constructor",
    [
      "ScS",
      "ggg",
      "SpS"
    ],
    {
      S: "megacells:sky_steel_block",
      c: "sync:sync_core",
      g: "#c:glass_panes",
      p: "computercraft:printer"
    }
  )
  e.shaped("sync:shell_constructor",
    [
      "ScS",
      "ggg",
      "SfS"
    ],
    {
      S: "megacells:sky_steel_block",
      c: "sync:sync_core",
      g: "#c:glass_panes",
      f: "modern_industrialization:frostproof_machine_casing"
    }
  )
  e.shaped("sync:shell_constructor",
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