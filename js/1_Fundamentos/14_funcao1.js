// Funcao sem retorno

function imprimirSoma(a ,b) {  /* a e b são os parametros que a função vai receber */ 
    console.log(a + b)
}

imprimirSoma (2 , 3)
imprimirSoma (2 , 5, 4, 5, 6) //soma os 2 primeiros, ignora o resto dos valores
imprimirSoma ()
imprimirSoma (2)

//funcao com retorno

function soma (a, b = 0) {
    return a + b
}
console.log(soma (2 , 3)) //como a funcão retorna um valor, precisamos do
                          //console.log para mostrar no console.
console.log(soma (2))     //como nao defini b, ele usou o valor setado (0)
