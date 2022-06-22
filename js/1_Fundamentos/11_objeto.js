const prod1 = {}   //par de chaves define objeto 
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4999.99
prod1['Desconto Legal'] = 0.4 //evitar atributos dessa forma 
prod1.precoFinal = prod1.preco * (1 - prod1['Desconto Legal'] )

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)