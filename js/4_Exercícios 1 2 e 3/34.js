function comparandoStr(a, b) {
    let comparador = true
    for (let i = 0 ; i < a.length ; i++) {
        let charA = a.charAt(i).toLowerCase()
        for( let j = 0 ; j < b.length ; j++) {
            let charB = b.charAt(j).toLowerCase()
            if (charA == charB) {
                comparador = true
                break
            } else {
                comparador = false
            }
        }
        if (!comparador) {
            return comparador
        }
    }
    return comparador
}

console.log(comparandoStr('abbc','caaacbb'))