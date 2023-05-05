'use strict';
const num1 = '20';
const num2 = '20.2';
const num3 = 'Uno';
const num4 = 20;

//Metodos Number:
//Convertir en numero .parseInt
console.log(num1);
console.log(Number.parseInt(num1));
console.log(Number.parseInt(num2));//Numero intero-->20
console.log(Number.parseInt(num3));//NaN
//.parseFloat
console.log(Number.parseFloat(num2));//Devuelve numero con decimales 20.2
//.isInteger() Revisar si el numero es intero o no 
console.log(Number.isInteger(num4));
console.log(Number.isInteger(num2));
console.log(Number.isInteger(num3));
