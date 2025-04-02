
function rojo(){
const cuadrado = document.querySelector("#caja");
cuadrado.style.backgroundColor = "red";
}

function verde(){
const texto = document.querySelector("h3");
texto.style.color = "darkgreen";
}

function azul(){
    const circulo = document.querySelector(".circulo");
    circulo.style.backgroundColor ="blue";
}

function restaurar(){
    window.location.reload();

}


// ??? --------------------------------------------------

const secreto = document.querySelector("#mensaje");

function mostrar(){
 secreto.classList.add("mensajeSecreto");
}

function ocultar(){
   secreto.classList.remove("mensajeSecreto");
}

