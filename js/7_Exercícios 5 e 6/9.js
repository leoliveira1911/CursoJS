function repete(a,b) {
    let vetor = []
    for (i = 0 ; i < b ; i++) {
            vetor.push(a)
    }
    return vetor
}

console.log(repete(1,4))
console.log(repete('teste',4))
console.log(repete('leo',2))
