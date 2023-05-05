'use strict';
const puntaje = 450;

 function revisarPuntaje ()  {
    if( puntaje > 400){
        console.log('Exelente!!!');
        //return;
    }
    if( puntaje > 300){
        console.log('Buen puntaje......felicidades');
        //return;
    }
} //No tiene return y devuelve varios mensajes

function revisarPuntaje2 ()  {
    if( puntaje > 400){
        console.log('Exelente!!!');
        return;//Ya no se ejecuta la otra línea de código
    }
    if( puntaje > 300){
        console.log('Buen puntaje......felicidades');
        return;
    }
}
//return solamente funcionan dentro de una función.

revisarPuntaje()
revisarPuntaje2()

