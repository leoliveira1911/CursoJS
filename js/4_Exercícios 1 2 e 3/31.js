function negativos(vet) {
    let contador = 0
    for (let i = 0 ; i < vet.length ; i++) {
        //console.log('opa')
        if (vet[i] < 0) {
           // console.log('opa')
            contador = contador + 1
        }
    }
    console.log(`O vetor possui ${contador} numero(s) negativo(s)`)
}
let teste = [1, 0, 3, -1]
negativos([1, -2, -3, -4, -5, 0 , -6])