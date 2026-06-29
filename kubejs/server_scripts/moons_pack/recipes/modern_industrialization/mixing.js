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
})