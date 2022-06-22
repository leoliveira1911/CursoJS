console.log('a= ', a)
var a = 2
console.log('a= ', a)

//é o mesmo de ter feito:
/* 
var a
console.log('a= ', a)
a = 2
console.log('a= ', a)
*/
/* console.log('b=' , b) */  //não funciona
function teste() {
    console.log('b= ' , b)
    var b = 3
    console.log('b= ', b)
}
teste()
//o "içamento" só ocorre quando declaramos com var.

/* console.log('c= ' , c) */ //gera erro, pois c nao foi declarado antes
let c = 5
console.log('c= ' , c)