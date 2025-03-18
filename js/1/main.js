//let x = 100;
//let y = 200;
//let z = prompt("inserta un valor");

//console.log((z+y+x));

//const pi = 3.1416;
//let radio = perseFloat(prompt("Ingresa un digito"));
//let peri = 2*pi*radio;

//document.write("el peridetro del circulo con un radio de "+radio+"es:"+peri.toFixed(2));

// 1
let n1 = parseInt(prompt("Ingresa un numero"));
let n2 = parseInt(prompt("Ingresa un segundo numero"));

document.writeln("la suma de los numero ingresados es:"+ (n1+n2));
console.log("la suma de los numero ingresados es:"+ (n1+n2));

document.writeln("<br>");

//2
let nombre = prompt("ingresa tu nombre");
let locali = prompt("ingresa donde vives");
let hobby = prompt("ingresa un hobby");

document.writeln("te llamas" + nombre + " vives en " + locali + " y tu hobby es " +  hobby);
console.log("te llamas " + nombre + " vives en " +  locali +" y tu hobby es " +  hobby);
alert("te llamas " + nombre + " vives en " + locali +" y tu hobby es " + hobby);

document.writeln("<br>");

//3
const pi = 3.1416;
let radio = parseFloat(prompt("Ingresa un numero:"));
let supe = pi * radio * radio;

console.log("La superficie del circulo es:" + supe.toFixed(4));
document.writeln("El área de un círculo con radio " + radio +"es:"+ supe.toFixed(4));

