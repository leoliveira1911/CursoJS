function cedulas(valor) {
    console.log(`O número mínimo de cédulas para o valor ${valor} é:`)
    if (valor >= 100) {
        let numNotasCem = valor / 100
        valor = valor % 100
        console.log(parseInt(numNotasCem) + ' Nota(s) de cem')
    }
    if (valor < 100 && valor >= 50 ) {
        let numNotasCinquenta = valor / 50
        valor = valor % 50
        console.log(parseInt(numNotasCinquenta) + ' Nota(s) de cinquenta')
    }
    if (valor >= 20 && valor < 50) {
        let numNotasVinte = valor / 20
        valor = valor % 20
        console.log(parseInt(numNotasVinte) + ' Nota(s) de vinte')
    }
    if (valor >= 10 && valor < 20) {
        let numNotasDez = valor / 10
        valor = valor % 10
        console.log(parseInt(numNotasDez) + ' Nota(s) de dez')
    }
    if (valor >= 5 && valor < 10) {
        let numNotasCinco = valor / 5
        valor = valor % 5
        console.log(parseInt(numNotasCinco) + ' Nota(s) de cinco')
    }
    if (valor >=1 && valor < 5) {
        let numNotasUm = valor
        console.log(parseInt(numNotasUm) + ' Nota(s) de um')

    }
}

cedulas(18)
cedulas(25)
cedulas(30)
cedulas(40)
cedulas(130)
cedulas(153)