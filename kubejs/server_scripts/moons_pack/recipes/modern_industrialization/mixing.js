ServerEvents.recipes(e => {
  e.custom({
    "type": "modern_industrialization:mixer",
    "eu": 2,
    "duration": 100,
    "item_inputs": [
      {
        "tag": "c:dusts/iron",
        "amount": 1
      },
      {
        "item": "ae2:certus_quartz_dust",
        "amount": 1
      }
    ],
    "item_outputs": {
      "item": "modern_industrialization:quartz_dust",
      "amount": 1
    }
  })

  e.custom({
    "type": "modern_industrialization:mixer",
    "eu": 2,
    "duration": 400,
    "item_inputs": {
      "item": "railcraft:quarried_stone",
      "amount": 1
    },
    "fluid_inputs": [
      {
        "fluid": "minecraft:water",
        "amount": 1,
        "probability" : 0
      },
      {
        "fluid": "minecraft:lava",
        "amount": 1,
        "probability" : 0
      }
    ],
    "item_outputs": {
      "item": "railcraft:quarried_stone",
      "amount": 2
    }
  })
})