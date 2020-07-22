//timers
'use strict'
//xintervalo = () => {
function xintervalo(){
    const time = setInterval(function(){
        console.log('intervalo iniciado');
    
        const encabezado = document.querySelector('h1');
        if (encabezado.style.fontSize == '80px') {
            encabezado.style.fontSize = '30px';
        
        }else{
            encabezado.style.fontSize = '80px';
    
        }

    }, 2000);

    return time;


    }



window.onload = () => {
    //setInterval- se ejecuta en bucle a diferencia del setTimeout(solo una vez)
    const time = xintervalo();
        
    const stop = document.querySelector('#stop');
    stop.addEventListener('click', () => {
        alert('ha parado el bucle');
        clearInterval(time);
    })

    const start = document.querySelector('#start');
    start.addEventListener('click', () => {
        alert('inicia bucle');
        xintervalo();
    
    })

}
