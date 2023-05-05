-
<Xdocument.addEventListener('DOMContentLoaded', function () {
    
    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }



    const inputEmail = document.querySelector('#email'),
        inputAsunto = document.querySelector('#asunto'),
        textAreaMensaje = document.querySelector('#mensaje'),
        formulario = document.querySelector('#formulario'),
        btnSubmit = document.querySelector('#formulario button[type="submit"]'),
        btnReset = document.querySelector('#formulario button[type="reset"]')
        


    //Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    textAreaMensaje.addEventListener('input', validar);

    // btnReset.addEventListener('click', function(e){
    //     e.preventDefault();
    
    //     // reniciar el objeto
    //     email.email = '';
    //     email.aunto = '';
    //     email.mensaje = '';

    //     formulario.reset();
    //     comprobarEmail();

    // })

    function validar(evt) {

        const tipoCampo = evt.target.id
        if (evt.target.value.trim() === '') {
            mostrarAlerta(`El campo ${tipoCampo.toUpperCase()} es obligatorio`, evt.target.parentElement);
            email[evt.target.name] = '';
            comprobarEmail();
            return;
        }


        if (evt.target.id === 'email' && !validarEmail(evt.target.value)) {
            mostrarAlerta(`El ${tipoCampo.toUpperCase()} no es valido`, evt.target.parentElement);
            email[evt.target.name] = '';
            comprobarEmail();
            return;
        }

        limpiarAlerta(evt.target.parentElement);

        //Asignar los valores
        email[evt.target.name] = evt.target.value.trim().toLowerCase();
       
        //Comprobar el objeto de email

        comprobarEmail()



    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);

        //Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        //Inyectar el error al formulario
        referencia.appendChild(error);


    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ //--> 1- expresión regular para emails en JavaScript 
        const resultado = regex.test(email);
        return resultado;

    }

    function comprobarEmail() {

        if (Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;

        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;



    }






});

