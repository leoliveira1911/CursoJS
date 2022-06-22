function media ( vet ) {
    let media = 0
    let soma = 0
    for ( let i = 0 ; i < vet.length ; i++) {
        soma = soma + vet[i]
    }
    media = soma / vet.length
    console.log(`A média aritmética dos algarismos do vetor é ${media}`)
    return media
}
let teste = [1, 2, 3, 4, 5, 6]
media([10, 9 , 8 , 7 , 6])
media(teste)