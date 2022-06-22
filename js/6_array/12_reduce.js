const alunos = [
    {nome: 'João' , nota: 7.3 , bolsista: false}, 
    {nome: 'Maria' , nota: 9.2 , bolsista: true}, 
    {nome: 'Pedro' , nota: 9.8 , bolsista: false}, 
    {nome: 'Ana' , nota: 8.7 , bolsista: true} 
]

// Desafio 1 : Todos os alunos são bolsistas?

let teste = alunos.map(a => a.bolsista)
//console.log(teste)
function bolsaTodos(a, b) {
    if (a == true && b == true) {
        return true
    } else {
        return false
    }
}

//poderia escrever: 
//const bolsaTodos = (a , b) => a && b
let teste2 = teste.reduce(bolsaTodos)
console.log(teste2)

// Desafio 2 : Algum aluno é bolsista?
function bolsaAlgum(a, b) {
    if (a == true || b == true) {
        return true
    } else {
        return false
    }
}


//poderia escrever: 
//const bolsaAlgum = (a , b) => a || b
let teste3 = teste.reduce(bolsaAlgum)
console.log(teste3)