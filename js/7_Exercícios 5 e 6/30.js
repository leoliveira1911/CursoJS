alunos = {
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}

const soma = (a, b) => a + b

function media(vet) {
    return vet.reduce(soma) / vet.length
}

function mediaDosAlunos(obj) {
    let resp = []
    Object.entries(obj).forEach(([chave, valor]) => {
        valor = media(valor)
        //console.log(`${chave}: Média ${valor}`)
        resp.push(chave, valor)
    })
    let maior = 0
    let index = 0
    for (let i = 1; i < resp.length; i += 2) {
        //console.log(resp[i])    
        if (resp[i] > maior) {
            maior = resp[i]
            index = i
        }
    }
    let final = [resp[index-1] , resp[index]]
    return final
}

console.log(alunos)
console.log(mediaDosAlunos(alunos))