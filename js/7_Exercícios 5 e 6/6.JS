function inverso(a) {
    if (typeof a === typeof true) {
        return !a
    } else if (typeof a === typeof 5) {
        return -(a)
    } else {
        return `O valor informado  é um ${typeof a}`
    }
}

console.log(inverso(true))
console.log(inverso(false))
console.log(inverso(5))
console.log(inverso(-2))
console.log(inverso('teste'))

