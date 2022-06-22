function impares(inicio = 0, fim = 100) {
    if(inicio > fim) {
        [inicio , fim] = [fim , inicio]
    }
    console.log('Início: ' + inicio + ' Fim: ' + fim)
    console.log('Ímpares:')

    for( let i = inicio+1 ; i < fim ; i++) {
        let teste = i%2
        if (teste == 1) {
            console.log(i)
        }
    }
}
impares(45,7)