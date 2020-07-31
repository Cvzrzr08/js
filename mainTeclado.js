'use strict'

alert('quiubu');


//focus
/*
}
*/
((e) => {

const form = document.getElementById('form1');
form.onsubmit = (e) => {
e.preventDefault();

const input = document.querySelector('#campoNombre');
input.addEventListener('focus', () => {
   console.log('estas haciendo foco en el input');
});


//blur
input.addEventListener('blur', () => {
   console.log('estas fuera del input');
});


//keydown
input.addEventListener('keydown', (event) => {
   console.log('pulsas las teclas ... ', String.fromCharCode(event.keyCode));
});



})

