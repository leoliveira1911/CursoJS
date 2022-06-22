// let e const
{
    var a = 2
    let b = 3
    console.log("A dentro:" ,a)
    console.log("B dentro:" ,b)
}

console.log("A fora:" ,a)
//console.log("B fora:" ,b)   - gera erro, pois dá indefinido

//template String
const produto = 'iPad'
console.log(`${produto} é muito
caro!`)

//destructuring
const [l ,e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1 , 2]
console.log(x,y)

const [d, , h] = [1, 2, 3]
console.log(d, h)

const {idade : i, nome} = {nome:'Ana' , idade: 9}
console.log(i, nome)
