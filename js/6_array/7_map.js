const carrinho = [
    '{"nome": "Borracha" , "preco": 3.45}',
    '{"nome": "Caderno" , "preco": 13.90}',
    '{"nome": "Kit de Lapis" , "preco": 41.22}',
    '{"nome": "Caneta" , "preco": 7.50}'
]

//retornar um array apenas com os preços 

const jasonObjeto = e => JSON.parse(e)
/* function valorObjeto (obj) {
    return obj.preco
} */
const valor = e => e.preco

let resposta = carrinho.map(jasonObjeto).map(valor)
console.log(resposta)