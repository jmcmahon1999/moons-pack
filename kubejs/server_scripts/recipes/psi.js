ServerEvents.recipes(e => {

    e.remove({})
    e.custom({
        type: "psi:trick_crafting",
        cad: {
            count: 1,
            id: "psi:cad_assembly_iron"
        },
        input: {
            tag: "aether:arkenium_dust"
        },
        output: {
            count: 1,
            id: "psi:psidust"
        }
    })
})