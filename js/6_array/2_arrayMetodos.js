const pilotos = ['Vettel', 'Alonso' , 'Raikkonen' , 'Massa']
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Max') //adiciona um elemento na ultima posição do array
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento na primeira posição do array
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //a partirdo elemento 2, exclui ZERO elementos e adiciona Bottas e Massa
console.log(pilotos)
//remover
pilotos.splice(3, 1) // a partir do índice TRES removo UM elemento
console.log(pilotos)

//slice retorna um novo array a partir do indice determinado
const algunsPilotos1 = pilotos.slice(2) //novo array a partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(2, 4) //novo array a partir do índice 1 até o índice 3 (4-1 > o índice 4 não entra)
console.log(algunsPilotos2)