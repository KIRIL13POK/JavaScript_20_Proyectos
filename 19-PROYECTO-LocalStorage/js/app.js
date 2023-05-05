//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];



/*<--\\----------****EVENTOS*****-----------//-> */

eventEventListeners();

function eventEventListeners(){
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);
    

    //Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded',() => {
        tweets = JSON.parse( localStorage.getItem('tweets')) || [] ;

        console.log(tweets);

        crearHTML();

    })
}

/*<--\\----------****FUNCIONES*****-----------//-> */

//Agregar Tweet -->
function agregarTweet(e){
    e.preventDefault();

    //Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    //Validacion
    if(tweet ===''){
        mostrarError('El mensaje NO puede ir vacio');
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

  //Añadir al areglo  de Tweets
  tweets = [...tweets, tweetObj];
  console.log(tweets);

  //Una vez agregado vamos a crear HTML
  crearHTML();

  //Reniciar textarea/formulario
  formulario.reset();
}

//Mostrar mensaje de error -->
function mostrarError(error) {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Elimina la alerta despues de 3 segundos-->
    setTimeout(() => {
        mensajeError.remove();

    }, 3000);

}

//Muesta un listado de los tweets
function crearHTML(){

    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach(tweet => {
            //Agregar un boton de eliminar 
            const btnEliminar = document.createElement('A');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            //Añadir la funccion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);

            }


            //Crear el HTML
            const li = document.createElement('LI');

            //Añadir el texto
            li.innerText = tweet.tweet

            //Asignar el botón
            li.appendChild(btnEliminar);

            //Isertarlo en HTML
            listaTweets.appendChild(li);

        });

    }

    sincronizarStorage();
}

//Agrega los Twets actuales a LocalStorage
function sincronizarStorage(){
    localStorage.setItem('tweets',JSON.stringify(tweets));

}

//Elimina un Tweet
function borrarTweet(id){
    tweets = tweets.filter( tweet => tweet.id !== id);

   crearHTML();
    
}

//Limpiar el HTMl
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);

    }

}


