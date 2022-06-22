function filtrandoPorTamanho (vetor, quant) {
   let resp = []
       for (num of vetor) {
        console.log('opa')
        let quantidadeDeDig = String(num).length
        console.log(quantidadeDeDig)
        if (quantidadeDeDig == quant){
            resp.push(num)
        } else {
            console.log('não pegouu')
        }
    }
    return resp
}

console.log(filtrandoPorTamanho([32,1,10,111], 2))