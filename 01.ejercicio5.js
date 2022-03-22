let multiplos = []

var num = 1330 //aquí damos la cantidad de los primero 50 números (el valor de el último múltiplo)
var dato

for (dato = 1; dato <= num; dato++) {
 
  if(dato%7 === 0 && dato%2 !== 0 && dato%3 !== 0 && dato%5 !== 0 ){
    multiplos.push(dato)
  }

}
console.log(multiplos);







