function parEPar(vetor) {
    let resp = [] 
    for (let i = 0 ; i < vetor.length ; i += 2 ) {
        if (vetor[i]%2 == 0) {
            resp.push(vetor[i])
        }
    }
    return resp
}
console.log(parEPar([10, 70, 22, 43, 33, 44, 2]))