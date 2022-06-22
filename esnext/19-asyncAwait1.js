//a funcao async retorna sempre uma promise. Precisamos da função .then() para utilizar os valores.

function esperarPor(tempo = 2000) {
    return new Promise (function (resolve) {
        setTimeout(function () {
            console.log('Executando Promise...')
            resolve()
        },tempo)
    })
}

/* esperarPor(2000)
    .then(esperarPor)
    .then(esperarPor) */



function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000);
    })
}

async function executar() {
    let valor = await retornarValor()
    console.log('Função retornar Valor')
    await esperarPor()
    console.log('Promise1' )
    await esperarPor()
    console.log('Promise2' )
    await esperarPor()
    console.log('Promise3')

    return valor
} //o await faz o programa esperar a execução da função para seguir p próxima linha.
executar().then(console.log)