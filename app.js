
let numeroSecreto = 0;
let intenros = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector("#valorUsuario").value="";
}

function verificarInteto () {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSecreto) {
         asignarTextoElemento ("p",`¡acertaste al número en ${intenros} ${(intenros === 1)? "vez":"veces"}`);
         document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        //el usuario no acertó.
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento ("p","¡el numero secreto es mayor!");
        } else {
            asignarTextoElemento("p","¡el numero secreto es menor!");
        }
        intenros ++;
        limpiarCaja();
    }
    return;  
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

   console.log(listaNumeroSorteados);
   console.log(numeroGenerado);
   //si ya sortemos todos los numeros
   if (listaNumeroSorteados.length == numeroMaximo){
    asignarTextoElemento("p","¡Ya se sortearon todos los números posibles!")
   } else { 
    //si el numero generado está incluido la lista hacemos un operacion sino, hacemos otra
    if (listaNumeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}




function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto: ");
    asignarTextoElemento("p", `¡Elige un número del 1 al ${numeroMaximo}!:` );
    numeroSecreto = generarNumeroSecreto();
    intenros=1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo del juego 
    //generar el numero aleatorio
    //inicilizar el numero de intentos
    condicionesIniciales();
    //deshabulitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true")
}

condicionesIniciales();






