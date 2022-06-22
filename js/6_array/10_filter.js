Array.prototype.filter2 = function(callback) {
    const newArray = []
    for ( let i = 0 ; i < this.length ; i++) {
        if(callback(this[i], i , this)) {
            newArray.push(this[i])
        }
    }
 return newArray
}


const produtos = [
    {nome: 'Notebook' , preco: 2499 , fragil: true},
    {nome: 'Geladeira' , preco: 4500 , fragil: false},
    {nome: 'iPad' , preco: 5499 , fragil: true},
    {nome: 'Copo de Vidro' , preco: 2.99 , fragil: true},
    {nome: 'Copo de Plastico' , preco: 1.99 , fragil: false}
]
/* console.log(produtos.filter(function(p){
    return p.preco>100
})) */

function fragil(e) {
    if (e.fragil == true) {
        return e
    } 
}
// pode escrever tambem:
//const fragil = produto => produto.fragil
function mtoCaro(e) {
    if (e.preco > 1000) {
        return e
    }
}
//pode escrever também:
//const caro = produto => produto.preco >= 1000
console.log('Todos os produtos:')
console.log(produtos)
console.log('Produtos frágeis')
console.log(produtos.filter2(fragil))
console.log('Produtos caros')
console.log(produtos.filter2(mtoCaro))
console.log('Produtos frágeis e caros')
console.log(produtos.filter2(fragil).filter2(mtoCaro))