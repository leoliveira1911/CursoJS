//factory é uma função que retorna um objeto

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())

function criarProduto (prod , preco) {
        const produto = {
        produto: prod,
        valor: preco
    }
    return produto
}
console.log(criarProduto('colher',10))
console.log(criarProduto('garfo',20))

const p1 = new criarProduto('Carro', 10000)
console.log(p1)
