function valor (a) {
    //converte para duas casas:
    const duasCasas = a.toFixed(2)
   
    //converte para string
    const str = duasCasas.toString()

    //separar as partes
    const separar = str.split('.')

    //parte inteira
    const inteiro = parseInt(separar[0])
    
    //parte decimal
    const decimal = parseInt(separar[1] || 0)

       
    console.log(`R$ ${inteiro},${decimal}`)
}

valor(3.1215123)
valor(4.98 + 2.53)
valor(5.012312)

// jeito melhor :
function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)