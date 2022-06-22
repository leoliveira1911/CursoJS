function entre(x, min, max, incluso = false) {
    if (incluso == true) {
       return maiorMenorIgual(x, min, max) 
    } else {
        return maiorMenor(x, min, max)
    }
}  

function maiorMenor (x, min, max) {
    if (x > min && x < max) {
        return true
    } else {
        return false
    }
}
function maiorMenorIgual(x, min, max) {
    if (x >= min && x <= max) {
        return true

    } else {
        return false
    }
}

console.log(entre(14, 10, 20))
console.log(entre(10, 10, 20))
console.log(entre(10, 10, 20, true))
console.log(entre(8, 10, 20))
console.log(entre(140, 10, 20))
