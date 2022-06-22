// tagged templates - processa o template dentro de uma função

//não é muito usado no dia a dia.

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'

console.log("partes é um array com as strings, menos a parte interpolada")
console.log("valores é um array com os elementos interpolados")
console.log(tag `${aluno} está ${situacao}.`)