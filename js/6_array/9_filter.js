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
function mtoCaro(e) {
    if (e.preco > 1000) {
        return e
    }
}
console.log(produtos)
console.log('Produtos frágeis')
console.log(produtos.filter(fragil))
console.log('Produtos caros')
console.log(produtos.filter(mtoCaro))
console.log('Produtos frágeis e caros')
console.log(produtos.filter(fragil).filter(mtoCaro))