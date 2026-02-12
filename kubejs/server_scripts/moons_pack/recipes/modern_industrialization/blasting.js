ServerEvents.recipes(e => {
    e.custom({
        type: "modern_industrialization:blast_furnace",
        eu: 32,
        duration: 200,
      
        item_inputs:[
          {
            item: "ae2:certus_quartz_dust",
            amount: 2
          },
          {
            item: "modern_industrialization:carbon_dust",
            amount: 1
          }
        ],
      
        item_outputs: {
          item: "modern_industrialization:silicon_dust",
          amount: 2
        }
      })

      e.custom({
        type: "modern_industrialization:blast_furnace",
        eu: 32,
        duration: 200,
      
        item_inputs:[
          {
            item: "ae2:certus_quartz_dust",
            amount: 1
          },
          {
            item: "modern_industrialization:coke_dust",
            amount: 1
          }
        ],
      
        item_outputs: {
          item: "modern_industrialization:silicon_dust",
          amount: 1
        }
      })
})