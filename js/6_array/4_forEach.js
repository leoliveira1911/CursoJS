const aprovados = ['Ana' , 'Aldo' , 'Daniel' , 'Joaquim']

//forEach sempre dá dois parametros: o primeiro o elemento e o segundo é o índice. o próprio array é o terceiro parametro retornado pelo forEach
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome} `)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)