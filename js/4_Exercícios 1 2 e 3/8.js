function compara(a) {
    let teste = a.split(' ')
    let vetor = []
    for (i = 0 ; i < teste.length ; i++) {
        vetor[i] = parseInt(teste[i])
    }
    console.log(vetor)
    let numeroDeRecord = 0
    let posicaoMenor = 0
    let comp1 = [0]
    let comp2 = [0]
    if (vetor[0] > vetor[1]) {
        comp1 = vetor[0]
        comp2 = vetor[1]
        posicaoMenor = 1
    } else {
        comp1 = vetor[1]
        comp2 = vetor[0]
        numeroDeRecord = 1
    }
console.log(`maximo inicial ${comp1} minimo inicial ${comp2}`)

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > comp1) {
            comp1 = vetor[i]
            numeroDeRecord = numeroDeRecord + 1
            console.log(`maximo atual ${comp1} e bateu o recorde ${numeroDeRecord} vezes`)
        }
        if (vetor[i] < comp2) {
            comp2 = vetor[i]
            posicaoMenor = i + 1
            console.log(`minimo atual ${comp2} e a posicao é ${posicaoMenor}`)
        }

    }
        let resposta = [numeroDeRecord, posicaoMenor]
    return resposta
}

let str = '10 9 5 12 4 13 3 15 2 20'
//          1 2 3  4 5  6 7  8 9  10 
console.log(compara(str))