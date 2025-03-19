
//1
let edad = parseInt(prompt("Que edad tiene?"));

if (edad === 18) {
    document.writeln("Tiene la edad justa para entrar!!!");
} else if (edad > 18){
    document.writeln("Puede entrar");   
}else if(edad <= 18){
     document.writeln("No tiene permitida la entrada");
}else{
    document.writeln("debe ingresar numeros")
}

document.writeln("<br><br>");


//2
let color = prompt("Ingrse un color ( azul,verde, rojo, amarillo y violeta)").toLowerCase();

if (color == "azul") {
    document.writeln("el azul es el mar de las estrellas");
} else if(color == "verde"){
    document.writeln("vuela alto como un canario");
}else if(color == "rojo"){
    document.writeln("rojo como un dragon ");
}else if(color == "amarillo"){
     document.writeln("brilla como el sol");
}else if (color == "violeta"){
     document.writeln("relajante como una flor");
}else{
    document.writeln("debe elegir otro color");
}

document.writeln("<br><br>");


//3
let lampara = prompt("la lampara esta enchufada? s/n").toLowerCase();

if (lampara == "s") {

    lampara = prompt("esta quemado el foco? s/n").toLowerCase();

    if (lampara == "s") {
        document.writeln("remplaza el foco!");
    } else if(lampara == "n") {
        document.writeln("comprar nueva lampara!");
    }
} else if (lampara == "n"){
    document.writeln("enchufar la lampara"); 
}
