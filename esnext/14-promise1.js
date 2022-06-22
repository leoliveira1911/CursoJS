let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Alberto', 'João' , 'Ana'])
})

console.log('typeof p')
console.log(typeof p)
console.log('typeof Promise')
console.log(typeof Promise)

//a função then pega o retorno da Promisse.
//a promisse passa apenas UM valor! (pode ser um objeto com várias chave/valor, um array...
console.log('p.then((valor) => console.log(valor))')
p.then((valor) => console.log(valor))
//podemos chamar vários .then() em cadeia.
console.log('p.then(valor =>valor[0]).then(valor => console.log(valor))')
p.then(valor =>valor[0])/* vai passar apenas o primeiro elemento do array para o próximo .then */.then(valor => console.log(valor))//vai imprimir o valor passado
console.log('p.then(valor=> valor[0]).then(primeiro => primeiro[0]).then(letra => letra.toLowerCase()).then(letraMinuscula => console.log(letraMinuscula))')
//continuação do exemplo passado. Vai pegar o primeiro elemento do array, depois a primeira letra, depois passar para minúscula e depois imprimir no console.
p.then(valor=> valor[0]).then(primeiro => primeiro[0]).then(letra => letra.toLowerCase()).then(letraPequena => console.log(letraPequena))

//podemos também criar as funções e passar elas para o then:
function primeiroElemento(array) {
    return array[0]
}
function primeiraLetra(str) {
    return str[0]
}
const letraMinuscula = letra => letra.toLowerCase()
//criadas as funções, posso usar todas no then
console.log('p.then(primeiroElemento).then(primeiraLetra).then(letraMinuscula).then(console.log)')
p.then(primeiroElemento).then(primeiraLetra).then(letraMinuscula)/* .then(valor => console.log(valor)) */.then(console.log)