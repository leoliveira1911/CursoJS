// recurso novo do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua A' ,
        numero: 1000
    }
}

const { nome , idade} = pessoa  //tire do objeto pessoa o atributo nome e idade
console.log(nome, idade)

const{ nome: n, idade: i} = pessoa
console.log(n , i)

const {sobrenome, bemHumorada = true} = pessoa 
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)
