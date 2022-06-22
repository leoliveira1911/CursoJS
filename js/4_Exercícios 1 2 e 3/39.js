function trocaVetor(vet1, vet2) {
    [vet1 , vet2] = [vet2, vet1]
    console.log(vet1)
    console.log(vet2)
}
let a = [1, 2, 3]
let b = [4, 5, 6]

trocaVetor(a, b)