function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) {
        [min, max] = [max, min]
    }

    return new Promise((resolve , reject) => {
        const aleatorio = parseInt(Math.random() * (max - min +1) + min)
        if(numerosProibidos.includes(aleatorio)){
            reject('Numero Repetido')
        } else {
        resolve(aleatorio)
        }
    })
}
async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {

        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()) {
           numeros.push(await gerarNumerosEntre(1,60, numeros))
           //console.log(numeros)
        }
        return numeros
    } catch (e) {
        if (tentativas > 3) {
            throw "Que chato"
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}
gerarMegaSena(15).then(console.log).catch(console.log)