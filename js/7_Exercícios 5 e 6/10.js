function mais(a) {
    let str = ''
    for (let i = 0; i < a; i++) {
        str = str.concat('+')
    }
    return str
}
console.log(mais(3))
console.log(mais(7))