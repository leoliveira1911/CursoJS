function multTodos(vet, int) {
    for(let i = 0 ; i < vet.length ; i++) {
        vet[i] = vet[i] * int
    }
    return vet
}

function multMaiorCinco(vet, int) {
    for ( let i = 0 ; i < vet.length ; i++) {
        if (vet[i] > 5) {
            vet[i] = vet[i] * int
        }
    }
    return vet
}

console.log(multTodos([1, 2, 3, 4] , 3))
console.log(multMaiorCinco([1, 2, 3, 4, 5, 6, 7] , 3))