const soma = (a, b) => a + b
function media(vet) {
    return vet.reduce(soma) / vet.length
}
const a = {
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}
function melhorAluno (obj) {
    let alunosENotas = Object.entries(obj) //array de arrays
    console.log(alunosENotas)
    alunosENotas = alunosENotas.map (aluno => {
        const chave = 0
        const valor = 1
        //console.log(aluno[chave] , aluno[valor])
        return { nome: aluno[chave], media: media(aluno[valor]) }
    })
    console.log(alunosENotas) //agora é um array de objetos
    
    const alunosOrdenados = alunosENotas.sort((estudA, estudB) => estudB.media - estudA.media)
    console.log(alunosOrdenados)
    
    const melhorAluno = alunosOrdenados[0]
    return melhorAluno
}

console.log(melhorAluno({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}))