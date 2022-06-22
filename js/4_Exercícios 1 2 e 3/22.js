function anuidade(mes, anuidade) {
    let taxa = (1 + 0.05) ** (mes - 1)
    let valor = anuidade * taxa
    return valor.toFixed(2)
}

console.log(anuidade(5, 1000))