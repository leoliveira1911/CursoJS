let valor //nao inicializada
console.log(valor)

valor = null //ausencia de valor. Não aponta para nenhum local na memoria. A variável está vazia.
//usamos o null para zerar o valor de uma variável 
console.log(valor)
/* console.log(valor.toString()) */ //Dá erro pois tentou apontar para algo que não tem valor.

const produto = {}
console.log(produto.preco) 
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto)


delete produto.preco //usamos para retirar uma propriedade do objeto
console.log(produto)
 
produto.preco = null   
console.log (produto.preco) //o preco fica sem valor. usar isso para zerar
console.log (produto)
console.log(!!produto.preco)