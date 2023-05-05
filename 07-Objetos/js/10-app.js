'use strict';

const producto = {
    nombre : 'Monitor de 20 pulgadas',
    precio : 300,
    disponible : true,
};

const medidas = {
    peso : '1kg',
    medida : '1m',
};

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);// --> va a unir a ambos objetos y los va a asignar a resultado.
//Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas};// -->va a unir a ambos objetos y los va a asignar a resultado.
console.log(resultado);
console.log(resultado2);