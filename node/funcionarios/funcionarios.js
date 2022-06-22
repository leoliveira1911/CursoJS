const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(mulherChinesa).reduce(menorSalario))
    
})

function mulherChinesa (e) {
    if (e.genero == 'F' && e.pais == 'China') {
        return e
    }
}

const  menorSalario = (func , funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}