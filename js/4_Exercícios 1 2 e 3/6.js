function jSimples(c,i,t) {
    let j = c * i * t
    let m = c + j
    return console.log(`O Montante final é R$ ${m.toFixed(2)}`)
} 

jSimples(100, 0.10 , 3)

function jComposto(c,i,t) {
    let m = c * ( 1 + i) ** t
    return console.log(`O Montante final é R$ ${m.toFixed(2)}`)
}

jComposto(100, 0.10 , 3)