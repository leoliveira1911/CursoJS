//ES8: Object.values  / Object.entries
const obj = {a:1 , b:2 , c:3}
console.log('Values:')
console.log(Object.values(obj))
console.log('Entries:')
console.log(Object.entries(obj))

//Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return "Oiii!!"
    }
}
console.log("\npessoa:")
console.log(pessoa)
console.log("pessoa.nome e pessoa.ola():")
console.log(pessoa.nome , pessoa.ola())

//Class
//internamente é convertida pra uma função
class Animal {}

//para ter herança:
class Cachorro extends Animal {
    falar() {
        return 'Au Au!'
    }
}
console.log("\n")
console.log(new Cachorro().falar())