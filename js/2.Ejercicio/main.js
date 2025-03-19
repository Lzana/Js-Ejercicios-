
//1 
let edad = parseInt(prompt("Que edad tiene?"));

if (edad === 18) {
    document.writeln(" <div class=uno>Tiene la edad justa para entrar!!!</div>");
} else if (edad > 18){
    document.writeln("<div class=uno>Puede entrar</div>");   
}else if(edad <= 18){
     document.writeln("<div class=uno>No tiene permitida la entrada</div>");
}else{
    document.writeln("<div class=uno>debe ingresar numeros</div>")
}

document.writeln("<br>");


//2
let color = prompt("Ingrse un color ( azul,verde, rojo, amarillo y violeta)").toLowerCase();

if (color == "azul") {
    document.writeln("<div class=dos> el azul es el mar de las estrellas</div>");
} else if(color == "verde"){
    document.writeln("<div class=dos>vuela alto como un canario</div>");
}else if(color == "rojo"){
    document.writeln("<div class=dos>rojo como un dragon </div>");
}else if(color == "amarillo"){
     document.writeln("<div class=dos>brilla como el sol</div>");
}else if (color == "violeta"){
     document.writeln("<div class=dos>relajante como una flor</div>");
}else{
    document.writeln("<div class=dos>debe elegir otro color</div>");
}

document.writeln("<br>");


//3
let lampara = prompt("la lampara esta enchufada? s/n").toLowerCase();

if (lampara == "s") {

    lampara = prompt("esta quemado el foco? s/n").toLowerCase();

    if (lampara == "s") {
        document.writeln("<div class=tres>remplaza el foco!</div>");
    } else if(lampara == "n") {
        document.writeln("<div class=tres>comprar nueva lampara!</div>");
    }
} else if (lampara == "n"){
    document.writeln(" <div class=tres >enchufar la lampara </div>"); 
}else{
    document.writeln("<div class=tres>debe elegir s o n</div>");
}

 