function criarPessoa (nome, idade) {
    this.nome = nome
    this.idade = idade
    this.falar = function() {
        console.log(`Meu nome é ${this.nome} tenho ${this.idade} anos`)
    }
}
  
  
const p1 = new criarPessoa('José', 15)

p1.falar()
console.log(p1.nome)
console.log(p1.idade)




function criarProduto (prod , preco) {
    return {
    produto: prod,
    valor: preco   
}
}


console.log(criarProduto('colher',10))
console.log(criarProduto('garfo',20))

const p2 = new criarProduto('Carro', 10000)
console.log(p2)
console.log(p2.prod)
console.log(p2.preco)
