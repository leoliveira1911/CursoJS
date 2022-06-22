// pessoa -> 123 > {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
pessoa.altura = 123
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = { nomne: 'Ana'}

Object.freeze(pessoa)
//depois do freeze o objeto não muda mais.
pessoa.nome = 'Maria'
pessoa.altura = 177
pessoa.idade = 21
delete pessoa.altura 

console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)