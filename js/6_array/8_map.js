Array.prototype.map2 = function(callback) {
    let resp = []
    for ( let i = 0 ; i < this.length ; i++) {
        resp.push(callback(this[i], i , this))
    }
    return resp 
} 

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

let resposta = carrinho.map2(jasonObjeto).map2(valor)
console.log(resposta)