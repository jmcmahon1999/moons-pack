ServerEvents.recipes(e => {

    // Heisenberg Computer
    e.remove({ id: "oritech:atomicforge/compensator"})
    e.remove({ id: "oritech:atomicforge/compensatoralt"})
    e.custom({
        type: "oritech:atomic_forge",
        fluidInputAmount: 0,
        fluidInputVariant: "minecraft:empty",
        fluidOutputAmount: 0,
        fluidOutputVariant: "minecraft:empty",
        ingredients: [
          { item: "modern_industrialization:quantum_circuit"},
          { item: "oritech:super_ai_chip" },
          { item: "oritech:super_ai_chip" }
        ],
        results: [{
            count: 1,
            id: "oritech:heisenberg_compensator"
        }],
        time: 60
    })
    
    // Super AI Chip
    e.remove({ id: "oritech:atomicforge/aicomputer" })
    e.custom({
        type: "oritech:atomic_forge",
        fluidInputAmount: 0,
        fluidInputVariant: "minecraft:empty",
        fluidOutputAmount: 0,
        fluidOutputVariant: "minecraft:empty",
        ingredients: [
          { item: "modern_industrialization:processing_unit" },
          { item: "oritech:advanced_computing_engine" },
          { item: "oritech:advanced_computing_engine" }
        ],
        results: [{
            count: 1,
            id: "oritech:super_ai_chip"
        }],
        time: 50
    })

    // Advanced Computing Engine
    e.remove({ id: "oritech:atomicforge/advcomputer" })
    e.custom({
        type: "oritech:atomic_forge",
        fluidInputAmount: 0,
        fluidInputVariant: "minecraft:empty",
        fluidOutputAmount: 0,
        fluidOutputVariant: "minecraft:empty",
        ingredients: [
          { item: "modern_industrialization:digital_circuit" },
          { item: "oritech:processing_unit" },
          { item: "oritech:processing_unit" }
        ],
        results: [{
            count: 1,
            id: "oritech:advanced_computing_engine"
        }],
        time: 5
    })

    // Processing Unit
    e.remove({ id: "oritech:assembler/processingunit" })
    e.custom({
        type: "oritech:assembler",
        fluidInputAmount: 0,
        fluidInputVariant: "minecraft:empty",
        fluidOutputAmount: 0,
        fluidOutputVariant: "minecraft:empty",
        ingredients: [
          { item: "modern_industrialization:electronic_circuit" },
          { item: "ae2:calculation_processor" },
          { item: "ae2:logic_processor" },
          { item: "ae2:engineering_processor" }
        ],
        results: [{ 
            count: 1,
            id: "oritech:processing_unit"
        }],
        time: 160
    })
})