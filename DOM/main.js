'use strict';
//para lementos en concreto
const box = document.querySelector('#box');
box.innerHTML = 'Texto desde js';
box.style.background = "blue";
box.style.color = "white";
box.style.padding = "25px";
box.className = "hola hola2";



//Elementos por su etiqueta


const allDiv = document.getElementsByTagName('div');
//console.log(allDiv);
//allDiv.forEach((liz, ind) => {
var valor;
for(valor in allDiv){
    //console.log(valor);
    //if (allDiv[valor].textContent.length >= 1) {
    if (typeof allDiv[valor].textContent == 'string') {
    let parrafo = document.createElement('p');
    let texto = document.createTextNode(allDiv[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector('#miSection').appendChild(parrafo);
        
    }

}



const textDiv = allDiv[2],
textDiv3 = allDiv[3].innerHTML;
textDiv.innerHTML = 'texto desde js, seleccion por etiqueta'
console.log(textDiv3)
