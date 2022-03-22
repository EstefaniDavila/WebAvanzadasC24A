function algoritmo()
{
    let comision, venta;
    venta = 360 ;
    comision= 9;
    if(venta>150&&venta<=400)
        comision=venta*0.1;
    if(venta>400)
        comision=venta*0.09+50;
    comision.value = comision;
}
resul = comsion.value
console.log(resul);
