function gerarNumerosEntre(min, max) {
    if(min > max) {
        [min, max] = [max, min]
    }

    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max - min +1) + min)
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1 ,20).then(num => num * 10).then(numX10 => `O número gerado e multiplicado por 10 fica igual a ${numX10}`).then(console.log)

