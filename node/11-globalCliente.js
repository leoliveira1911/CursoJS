require('./10-global') 
console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'//como dei o Freeze no arquivo 10-global, não consigo mudar 
console.log(MinhaApp.nome)