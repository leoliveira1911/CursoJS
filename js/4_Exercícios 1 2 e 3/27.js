function compAltura(a1, t1, a2, t2) {
    let ano = 0
    if (a1 > a2 && t2 > t1) {
        while (a1 > a2) {
            a1 = a1 + t1
            a2 = a2 + t2
            ano++
        }
        return console.log(`As crianças terão a mesma altura em ${ano} anos`)
    } else if (a2 > a1 && t1 > t2) {
        while (a2 > a1) {
            a1 = a1 + t1
            a2 = a2 + t2
            ano++
        }
        return console.log(`As crianças terão a mesma altura em ${ano} anos`)
    }
    else if (a1 == a2) {
        console.log('As crianças já são do mesmo tamanho.')
    } else if (t1 == t2 || a1>a2 && t1>t2  || a2>a1 && t2>t1) {
        console.log('As criancas nunca terão o mesmo tamanho')
    }
}
compAltura(120, 10, 100, 20)
compAltura(120, 20, 140, 15)
compAltura(120, 10, 100, 10)
compAltura(120, 10, 120, 10)
compAltura(120, 6, 130, 10)
compAltura(120, 6, 110, 4)
