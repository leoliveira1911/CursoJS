//usando a notação literal
const obj1 = {}
console.log(obj1)

//object em JS
console.log(typeof Object , typeof new Object)
const obj2 = new Object
console.log(obj2)

//funões construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome //torna o atributo público. outras funçoes podem alterar
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}
const p1 = new Produto('Caneta' , 10 , 0.2)
const p2 = new Produto('Notebook', 3000 , 0.2)
console.log(p1.nome , p1.getPrecoComDesconto())
console.log(p2.nome , p2.getPrecoComDesconto())

//Função Factory
function criarfuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return ((salarioBase/30) * (30-faltas)).toFixed(2)
        }
    }
}
const f1 = criarfuncionario('Joao', 8000, 3)
const f2 = criarfuncionario('Joaquina', 15000, 0)
console.log(f1.nome, f1.getSalario())
console.log(f2.nome, f2.getSalario())

// object.create
const filha = Object.create(null)
filha.nome = 'SourDiesel'
console.log(filha)

// Uma função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um Json"}')
console.log(fromJSON.info)