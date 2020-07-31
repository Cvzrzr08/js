'use strict'

"1ero capturar el evento submit del formulario "
const form = document.querySelector('#formu');

form.addEventListener('submit', (e) => {
    "evitando que la pag refresque =?"
    e.preventDefault();
    "2do extraer el valor que se le asigna"
    const titulo = document.querySelector('#addpelicula').value;
    "3ro permitiendo la captura de solo texto, no espacios vacios"

    if (titulo.length >= 1) {
        "asignando clave y valores que tendra local storage"
        localStorage.setItem(titulo, titulo)
        'mas vulnerable ps con otro js identico puedo mostrar lo que quiero sin referenciarlo'
    }
})
    "las itera y las muestra pero no en el orden en que se van tecleando, sino aleatorio"

const ul = document.querySelector('#list')
"mostrar todo lo typeado"

for (let i in localStorage) {
    "console.log(localStorage[i]);"
    if (typeof localStorage[i] == 'string') {
        const li = document.createElement('li')
        li.append(localStorage[i]);
        ul.append(li);
        
    }
    
}
