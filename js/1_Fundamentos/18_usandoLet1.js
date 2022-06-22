let a = 1
{
    let a = 2
    console.log('dentro', a)
}
console.log('fora', a)
//quando colocamos let dentro de um bloco, ele é visível apenas dentro do bloco
//como estão em escopos diferentes, podem ter o mesmo nome, e cada um terá o
//seu valor.
//se dentro do bloco não existir a variável, ele usa a do escopo maior.
//ex:

let b = 4
{
    let c = 5
    console.log('dentro b' , b)
}
console.log('fora b', b)