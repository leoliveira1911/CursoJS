function precoLanche(codigo , quantidade) {
    let preco = 0
    switch(codigo) {
        case 100:
            preco = 3
            break
        case 200:
            preco = 4
            break
        case 300:
            preco = 5.5
            break
        case 400:
            preco = 7.5
            break
        case 500:
            preco = 3.5
            break
        case 600:
            preco = 2.8
            break
        default:
            console.log("Produto não existe")
            preco = NaN
    }
    let valor = quantidade * preco
    return valor
}
console.log(precoLanche(100, 2))
console.log(precoLanche(200, 3))
console.log(precoLanche(300, 2))
console.log(precoLanche(400, 4))
console.log(precoLanche(500, 4))
console.log(precoLanche(600, 2))
console.log(precoLanche(700, 2))