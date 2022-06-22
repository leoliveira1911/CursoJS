console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('bia' , 'carlos' , 'ana')
console.log(aprovados)

aprovados = ['Bia' , 'Carlos' , 'Ana']
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])
console.log(aprovados[4])

aprovados.push('Saulo')
console.log(aprovados.length)
console.log(aprovados[4])

aprovados[9] = 'Rafael'
console.log(aprovados.length) //os índices 5, 6, 7, 8 ficam undefined
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //reorganiza o array (ordem alfabética?)
console.log(aprovados)

delete aprovados[1]  //o elemento do índice 1 ficará sendo undefined, não reordena o array
console.log(aprovados)

aprovados = ['Bia' , 'Carlos' , 'Ana' , 'Joaquim']
aprovados.splice(1,2) //serve para adicionar/remover elementos  -
//a partir do elemento de índice UM, deleta DOIS elementos.
console.log(aprovados)

aprovados = ['Bia' , 'Carlos' , 'Ana' , 'Joaquim' ]
console.log(aprovados)
aprovados.splice(2, 1 , 'Elemento1' , 'Elemento 2') 
//a partir do elemento de ídice DOIS ele vai deletar UM elemento e adicionar outros dois elementos.
console.log(aprovados)
