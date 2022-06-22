const soma = (a,b) => a+b

function somaVetor(vet) {
    let resposta = vet.reduce(soma, 0)
    return resposta
}

console.log(somaVetor([1,2,3,4,5]))

