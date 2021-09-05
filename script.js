//Ejercicio 2
var num1 = prompt ("Ingrese primer numero entero y mayor que cero: ");
var num1 = parseInt(num1);
var num2 = prompt ("Ingrese segundo numero entero y mayor que cero: ");
var num2 = parseInt(num2);
suma = num1 + num2;
resta = num1 - num2;
multiplica = num1 * num2;
division = num1/num2;
modulo = num1 % num2;
document.write ("<b>Ejercicio º 2</b> <br/>");
document.write (`<br/>La suma de los dos valores ingresados es: ${suma}`);
document.write ("   ");
document.write (`<br/>La resta de los dos valores ingresados es: ${resta}`);
document.write ("   ");
document.write (`<br/>El producto de los dos valores ingresados es: ${multiplica}`);
document.write ("   ");
document.write (`<br/>La división de los dos valores ingresados es: ${division}`);
document.write ("   ");
document.write (`<br/>EL cociente de los dos valores ingresados es: ${modulo}`);

//Ejercicio 3
var temp = prompt ("Ingrese la temperatura actual en ªC");
temp = parseInt(temp);
Kelvin = (273.15 + temp).toFixed(2);
Faren = ((temp*1.8)+32).toFixed(2);
document.write ("<br/><br/><br/><b>Ejercicio º 3</b>");
document.write (`<br/>La temperatura es: ${Kelvin}ªK y ${Faren}ªF`);

//EJercicio 4
var num = prompt ("Ingrese un numero para el cálculo de su correspondencia en tiempo calendario");
var num = parseInt(num);
var years = (num/365);
var years = Math.floor (years);
var calcsemana = (num%365);
var semana = (calcsemana/7);
var semana = Math.floor (semana);
var dias = (calcsemana%7);
document.write ("<br/><br/><br/><b>Ejercicio º 4</b>");
document.write (`<br/>El numero ingresado corresponde a: ${years} año(s), ${semana} semana(s) y ${dias} dia(s)`);

//Ejercicio 5
var num1 = prompt ("Ingrese primer numero");
var num1 = parseInt(num1);
var num2 = prompt ("Ingrese segundo numero");
var num2 = parseInt(num2);
var num3 = prompt ("Ingrese tercer numero");
var num3 = parseInt(num3);
var num4 = prompt ("Ingrese cuarto numero");
var num4 = parseInt(num4);
var num5 = prompt ("Ingrese quinto numero");
var num5 = parseInt(num5);
var sumanum = (num1+num2+num3+num4+num5);
var prom = (num1+num2+num3+num4+num5)/5;
document.write ("<br/><br/><br/><b>Ejercicio º 5</b>");
document.write (`<br/>La suma total de los numeros ingresados es ${sumanum}`);
document.write (`<br/>El promedio de los numeros ingresados es ${prom}`);
