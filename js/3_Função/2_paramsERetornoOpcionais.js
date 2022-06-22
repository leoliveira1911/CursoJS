function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m²`)
    } else {
        return area
    }
}
console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 5)) //descarta o parametro que não é utilizado
console.log(area(2, 15))
