function inverter (obj) {
    let original = Object.entries(obj)
    let teste = []
    let objeto = {}
    for(let i = 0 ; i < original.length ; i++) {
        //console.log(original[i])
        teste [i] = original[i].reverse()
    }
    objeto = Object.fromEntries(teste)
    return objeto
}

console.log(inverter({a: 1, b:2}))