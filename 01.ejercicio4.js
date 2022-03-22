let dato1, dato2, dato3, num1, num2, num3, resultado;

dato1 = window.prompt("Primer número?", "0");
num1= parseInt(dato1);

dato2 = window.prompt("Segundo número?", "0");
num2= parseInt(dato2);

dato3 = window.prompt("Tercer número?", "0");
num3= parseInt(dato3);

if (num1 > num2, num1 > num3) {
    resultado = " el primero";
}else if(num2 > num1, num2 > num3){
    resultado = " el segundo";
}else if(num3 > num2, num3 > num1){
    resultado = " el tercero";
}else{
    resultado = " nulo7";
}
document.write(`<h3> El mayor es: ${resultado} </h3> `);
console.log(resultado);