'use strict';
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
};

//const nombre = producto.nombre
//console.log(nombre);

//Extraer del array/Distructing
const numeros = [10, 20, 30, 40, 50];
//const [primero] = numeros;
//console.log(primero)
const [primero, segundo, tercero] = numeros;
const [, , , cuarto] = numeros
console.log(tercero);
console.log(cuarto);

const numerosEjemplo2 = [10, 20, 30, 40, 50];
const [primeroEj2, segundoEj2, ...terceroEj2] = numerosEjemplo2
console.log(terceroEj2);//  terceroEj2 va a contener un arreglo con 30, 40 y 50


