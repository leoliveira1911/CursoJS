const valor = e => e.preco
const soma = (a , b) => a+b

const despesasTotais = (vetor) => vetor.map(valor).reduce(soma)



let teste = [
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
 {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]

console.log(despesasTotais(teste))