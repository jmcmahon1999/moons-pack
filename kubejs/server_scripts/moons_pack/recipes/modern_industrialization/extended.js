ServerEvents.recipes(e => {
    e.custom({
        type: "modern_industrialization:assembler",
        duration: 1200,
        eu: 32,
        fluid_inputs: [
          {
            amount: 100,
            fluid: "modern_industrialization:uu_matter"
          }
        ],
        item_inputs: [
          {
            amount: 8,
            item: "extended_industrialization:superconductor_tesla_winding"
          },
          {
            amount: 4,
            item: "modern_industrialization:quantum_upgrade"
          },
          {
            amount: 1,
            item: "modern_industrialization:quantum_circuit"
          }
        ],
        item_outputs: [{
            amount: 1,
            item: "extended_industrialization:tesla_interdimensional_upgrade"
        }]
    })
})