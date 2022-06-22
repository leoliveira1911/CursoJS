// par nome/valor

const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = "Faaaala"  //contexto lexico 2
    return saudacao
}

//objetos sao grupos aninhados de pares nome/valor

const cliente = {
    nome: "pedro",
    idade: 32,
    endereco: {
        logradouro: "rua Sobe e Desce",
        numero: "desaparece"
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)