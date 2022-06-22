const peso1 = 1.0
const peso2 = Number('2.5')  //duas formas de declarar variáveis do tipo numero

console.log(peso1 , peso2)
console.log(Number.isInteger(peso1)) //Number.isInteger verifica se o numero é inteiro
console.log(Number.isInteger(peso2)) //Number.isInteger verifica se o numero é inteiro

const avaliacao1 = 9.971
const avaliacao2 = 7.971

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media)
console.log(media.toFixed(2)) //delimita o numero de casas decimais
console.log(media.toString()) //mostra a media como uma STRING
console.log(media.toString(2)) //mostra a media como uma STRING em BINÁRIO
console.log(typeof media)
console.log(typeof Number)  // Esse Number é uma função 

