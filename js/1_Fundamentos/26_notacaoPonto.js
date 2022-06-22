console.log(Math.ceil(6.1)) //o ponto acessa a funão log do console
                            //e também a função "ceil" do Math
const obj1 = {}
obj1.nome= 'Bola' //o ponto me permite adicionar um atributo
                  //dentro do objeto
console.log(obj1.nome)

function Obj (nome) {
    this.nome = nome
}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)