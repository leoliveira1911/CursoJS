function parEImpar(vet) {
let par = 0
let impar = 0
for (let i = 0 ; i < vet.length ; i++) {
    let rest = vet[i]%2
    switch (rest){
        case 0 :
            par++
        break
        case 1:
            impar++
        break
    }
}
console.log(`${par} numeros pares e ${impar} numeros impares`)
}
parEImpar([2,3,3,3,3,3,3,1])