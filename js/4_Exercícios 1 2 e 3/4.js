function div (a , b) {
    let c = a / b
    let d = 8 % 3
    const resp = {
        valorExato: c.toFixed(2),
        valorInteiro: Math.floor(c), 
        resto: d
    }
    return resp
}

console.log(div(10,4))
console.log(div(10,3))
console.log(div(10,2))
