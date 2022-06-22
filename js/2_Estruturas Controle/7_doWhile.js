//a diferença de DoWhile para while é que
//no DoWhile o laço é feito pelo menos uma vez
//garantido, pois a condição só é checada depois
//da interação
function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random() *(max-min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1 , 10)
    console.log('A opção selecionada foi ' + opcao)
} while (opcao != -1)

console.log('Até a próxima')