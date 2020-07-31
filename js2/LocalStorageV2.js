const sdx = JSON.parse(localStorage.getItem('sdxK')) || []; //espacio en memoria


xrefresh = (sdx) => {
        const sdxString = JSON.stringify(sdx);
        localStorage.setItem('sdxK', sdxString)
}

xrender = () => {
     const list = document.getElementById('list');
        const temple = sdx.map (t => '<li>' + t + '</li>');

        list.innerHTML = temple.join('');//[] -> a string vacio
        
        const elem = document.querySelectorAll('#list li');
        elem.forEach((list, ind) => {
            list.addEventListener('click', () => {
            list.parentNode.removeChild(list);//eliminar dentro html
            console.log(sdx, ind)
            sdx.splice(ind,1);//limpiando refresh no aparezcan denuevo in []
               xrender();
                xrefresh(sdx);
            })
            
        })
}

window.onload = () => {
    xrender();
    const form = document.getElementById('formu');
    form.onsubmit = (e) => {
        e.preventDefault();
        const add = document.getElementById('addpelicula');
        const adtx = add.value;
        add.value = '';//limpiando campo de texto al dar enviar
        console.log(adtx);
        sdx.push(adtx);//añadiendo en espacio en memoria
        xrefresh(sdx);//2do
        xrender();//1ero
        
       

        
        


    }
    


}

/*

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
        
    }
})

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

list.innerHTML = '';//eleminando los residuos de las list a generar
        for (let i = 0; i < sdx.length; i++) {
            list.innerHTML += '<li>' + sdx[i] + '</li>'

            
        }
*/
/*
        if (adtx.length >=1) {
            addtx = add.value
        }else{
            alert('teclea algo');
            addtx = none;
            
        }
        */
     
