'use strict';

function sumar ( numero1 , numero2){
    return (numero1 + numero2);
};
//Cuando tienes una función que retorna algo, tienes que tener otra variable a la cual se le asigna el valor retornado.
const suma = sumar(23,34);
console.log(`El resultado es ${suma}.`);

//El ejemplo más avanzado
let total = 0;
function agregarCarrito(precio){
    return total += precio
};

function calcularImpuesto( total){
    return total*1.15;

};

total = agregarCarrito(3);
total = agregarCarrito(33);
total = agregarCarrito(333);
const precioFinal = calcularImpuesto( total);

console.log(total);
console.log(precioFinal);
