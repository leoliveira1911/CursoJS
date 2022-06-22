//função em JS é First-Class Object (Citizens)
//Higher order function

//criar de forma literal
function fun1() { } 

//armazenar em uma variável
const fun2 = function( ) { }

//armazenar em um array
const array = [function ( ) { } , fun1 , fun2]

//armazenar em um atributo de objeto

const obj = {}
obj.falar = function ( ) {return 'OPA'}
console.log(obj.falar())

//passar função como parametro
function run(fun) {
    fun()
}

// uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2,3) (5)
//ou
const cincoMais = soma(2,3)
cincoMais(5)
