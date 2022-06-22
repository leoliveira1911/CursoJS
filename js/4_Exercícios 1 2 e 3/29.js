function intervalo(vet) {
    let dentro = 0
    let fora = 0
    for (let i = 0; i < vet.length ; i++) {
        if (vet[i]>= 10 && vet[i]<=20) {
            dentro++
        } else{
            fora++
        }
    }
    console.log(`${dentro} numeros dentro do intervalo e ${fora} numeros fora do intervalo`)
}

intervalo([1,2,13,15,20,19])