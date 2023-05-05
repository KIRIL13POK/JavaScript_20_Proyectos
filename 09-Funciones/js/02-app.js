'use strict';

// Declaracion de la función (Function Declaration)
sumar(2,5);
function sumar (num1, num2){
    console.log( `La suma es ${num1 + num2}.` )
};


//Expresión de una Función( Function Expression )
sumar2(2,5);// Este codigo no va funcionar 
const sumar2 = function(num1,num2){
    console.log( `La nueva suma es ${num1 + num2}.` )
};
