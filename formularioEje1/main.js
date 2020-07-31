window.onload = () => {
alert('probando esta miercoles por la noche')
    const form = document.querySelector('#form');
    const box_dashed = document.querySelector('.dashed');
    box_dashed.style.display='none';
    form.onsubmit = (e) => {
        e.preventDefault();
    
        const nombre = document.querySelector('#nombre').value;
        const apellido = document.querySelector('#apellidos').value;
        const edad = parseInt(document.querySelector('#edad').value);

//validando de datos que no haya espacios vacios   trim(no contenga espacio por delante o atras)
        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert('el nombre no es valido');
            document.querySelector('#nomError').innerHTML = 'el nombre no es valido'
            return false;
            
        }else{
            document.querySelector('#nomError').style.display = 'none';
        
        }
        if (apellido.trim() == null || apellido.trim().length == 0) {
            alert('el apellido no es valido');
            return false;

        }

        //no permite trim en un campo numerico
        if (edad == null || edad <= 0 || isNaN(edad)) {
            alert('la edad no es valido');
            return false;

        }




        box_dashed.style.display='block';//para cuando de submit aparezca

        var sdX = [nombre, apellido, edad];
        const template = sdX.map(t => '<p>' + t + '</p>')
        box_dashed.innerHTML = template.join('');
        /*  for (let i in sdX) {
            const parrafo = document.createElement('p');
            parrafo.append(sdX[i]);
            box_dashed.append(parrafo);
            }
        */
   console.log(nombre, apellido, edad);
    }
}
