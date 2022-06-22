// function declaration - se declarar dessa forma, 
//posso usar a função em uma parte do código antes da
//funcção ter sido declarada. ex:

console.log(soma(2,3)) //funciona
/* console.log(sub(2,3)) */ //da erro, pq ainda nao declarei no código

function soma(x,y) {
    return x + y
}

//function expression
const sub = function (x,y) {
    return x - y
}
console.log(sub(2,3))

//named function expression
const multi = function multi(x,y) {
    return x * y
}