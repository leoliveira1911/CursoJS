function contadorString (e, str) {
    let contador = 0
    let teste = str.split('')
    teste.forEach(element => {
        if (element == e) {
            contador+= 1
        }        
    });
    return contador
}
console.log(contadorString('c', 'Conhece-te a ti mesmo'))