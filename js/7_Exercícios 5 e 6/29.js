function segundoMaior (vet) {
    let maior = null
    let segundo = null
    
    for(let i = 0 ; i < vet.length ; i++) {
        if (vet[i] > maior) {
            segundo = maior
            maior = vet[i]
        } else if (vet[i] > segundo){
            segundo = vet[i]
             }
    }
return segundo
}

console.log(segundoMaior([1,2,3,4,5,6,11,21]))