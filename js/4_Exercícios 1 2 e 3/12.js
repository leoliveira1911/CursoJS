function fatorial(num) {
    let fat = 1
    let i = num

    if (num >= 1) {
        while (i >= 1) {
            fat = fat * i
            i--
        }
        return fat
    } else if (num = 0) {
        return fat
    } else {
        return console.log("Fatorial inválido")
    }

}

console.log(fatorial(4))
