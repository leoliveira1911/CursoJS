const comparativo = (valor , quantidade) => String(valor).length === quantidade

function numeroDeAlg (vetor , quant) {
    let resp = []
    for (num of vetor) {
        if (comparativo(num, quant)) {
            resp.push(num)
        }
    }
    return resp
}


console.log(numeroDeAlg([1,12,3,14] , 2))