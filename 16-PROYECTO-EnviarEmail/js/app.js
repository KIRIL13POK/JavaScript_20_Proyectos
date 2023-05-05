document.addEventListener('DOMContentLoaded', function(){
    // esto lo que va a hacer es ejecutarse una vez que todo el código HTML haya sido descargado, porque ahí es donde queremos ejecutar ya nuestro código de JavaScript.

    //Los elementos de iterfas:
    const inputEmail = document.querySelector('#email'),
          inputAsunto = document.querySelector('#asunto'),
          textAreaMensaje = document.querySelector('#mensaje');
    //console.log(inputEmail,inputAsunto,textAreaMensaje)

    //Asignar eventos
    inputEmail.addEventListener('blur', function(evt){
        //El evento blur es disparado cuando un elemento ha perdido su foco.
        console.log(evt);//--> Aquí hay mucha información sobre el evento que se está registrando
        console.log(evt.target);
        console.log(evt.target.value);//me aparece lo que ingresé en ese campo y una vez que estoy en otro elemento

    });

    inputAsunto.addEventListener('blur', function(evt){
        console.log(evt.target.value);

    });

    textAreaMensaje.addEventListener('blur', function(evt){
        console.log(evt.target.value);

    });

});