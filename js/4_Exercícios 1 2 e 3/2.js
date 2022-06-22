function triangulo (a,b,c) {
    if (a+b>c && a+c>b && b+c>a) {
       // console.log('Triangulo ok')

        let i = a-b
        let u = a-c
        let y = b-c

        if (i == 0 && u == 0 && y == 0) {
            const t = 'Triangulo equilátero'
            //console.log ("Triângulo equilátero")
            return t
        } else if (i == 0 || u == 0 || y == 0) {
           const t = 'Triangulo isósceles'
           return t
        } else {
            const t = 'Triângulo escaleno'
            return t
        }
    } else {
        console.log('Triangulo inválido')
    }
}
console.log(`Triangulo 1 ${triangulo(2,2,2)}`)
console.log(`Triangulo 2 ${triangulo(2,3,2)}`)
console.log(`Triangulo 3 ${triangulo(2,2,3)}`)
console.log(`Triangulo 5 ${triangulo(3,2,2)}`)
console.log(`Triangulo 4 ${triangulo(4,3,5)}`)
