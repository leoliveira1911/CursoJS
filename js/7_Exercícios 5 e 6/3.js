const calcularSal = (horas, val) => console.log(`Salário igual a R$ ${(horas * val).toFixed(2).replace('.' , ',')}`)

calcularSal(150 , 40.5)