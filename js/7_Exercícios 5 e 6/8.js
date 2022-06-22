function mult (a,b) {
    let sum = 0
    for(let i = 0; i < b ; i++) {
        sum += a
    }
    return sum
}

console.log(mult(2,4))
console.log(mult(3,4))
console.log(mult(20,4))
console.log(mult(2,40))
console.log(mult(0,4))
console.log(mult(2,0))