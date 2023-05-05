// Declaracion de la función (Function Declaration)
'use strict';
function sumar (num1, num2){
    //Cuerpo de la funcion
    console.log( `La suma es ${num1 + num2}.` )

};
sumar(2,5);
sumar(7,5);
sumar(89,5);
sumar(2,455);
sumar(2,54);

//Expresión de una Función( Function Expression )
const sumar2 = function(num1,num2){
    console.log( `La nueva suma es ${num1 + num2}.` )
};
sumar2(2,5);
sumar2(7,5);
sumar2(89,5);
sumar2(2,455);
sumar2(2,54);