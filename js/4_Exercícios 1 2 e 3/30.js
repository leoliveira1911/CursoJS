function maiorEMenor(vet) {
    let maior = Math.max(...vet)
    let menor = Math.min(...vet)

    console.log(`O maior valor é ${maior} e o menor valor é ${menor}`)
        
}

maiorEMenor([0,4,2,3,5,13,12,8])