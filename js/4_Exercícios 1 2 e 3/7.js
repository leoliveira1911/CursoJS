function raiz (a ,b ,c ) {
    if (a==0) {
        console.log('Não é uma função quadrática')
        let r = (-c) / b
        console.log(`A raíz da função afim é ${r}`)
        return r
    } 
    let delta = (b*b) - ( 4 * a * c)
    //console.log(`Delta ${delta}`)
    if (a != 0 && delta < 0) {
        str = 'Delta é negativo'
        console.log(str)
        return str
    } else if (a != 0 &&  delta >= 0) {
        let r1 = ((-b) + (delta ** (0.5))) / (2*a) 
        let r2 = ((-b) - (delta ** (0.5))) / (2*a) 
        let raizes = [r1 , r2]
        console.log(raizes)
        return raizes
    }
}
raiz(3, -5, 12)
raiz(4 , 0 , -16)
raiz (2, -3, -5)
raiz (0 , 2, 10)