function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function numDaSorte(val) {
      let teste = getRandomIntInclusive(1, 10)
      if (val == teste) {
          console.log(`Parabens, o número sorteado foi ${val}`)
      } else {
          console.log(`Que pena! O número sorteado foi o ${teste}`)
      }
  }

  numDaSorte(1)
  numDaSorte(2)
  numDaSorte(3)
  numDaSorte(4)
  numDaSorte(5)
  numDaSorte(6)
  numDaSorte(7)
  numDaSorte(8)