function isConsoante(caracter) {
    switch (caracter) {
        case "a":
        case "A":
        case "e":
        case "E":
        case "i":
        case "I":  
        case "o":
        case "O":
        case "u":
        case "U": 
        return false
        default:
        return true
    }
}
function deletarVogais(str) {
    let resp = ''
    for ( let i = 0 ; i < str.length ; i++) {
        if (isConsoante(str.charAt(i))){
            resp = resp.concat(str.charAt(i))
        }
    }
    return resp
}
console.log(deletarVogais('abcdefghi'))