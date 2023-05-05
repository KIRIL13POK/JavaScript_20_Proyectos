'use strict';
//Parámetros por defaulte
function saludar (nombre, apellido = 'XXXXXXX'){
    console.log(`Hola ${nombre} ${apellido}, BienVenido!!!` )
};
saludar('Kiril' , 'Pokrovskiy');
saludar('Roman' );