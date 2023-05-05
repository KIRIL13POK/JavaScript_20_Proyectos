'use strict';
const carrito = [];

//Defenir un producto
const producto1 = {
    nombre: 'Monitor 20 pulgadas',
    precio: 400,
};

const producto2 = {
    nombre: 'Telefono mobil',
    precio: 900,
}

const producto3 = {
    nombre: 'Tablet',
    precio: 450,
}
// Una forma declarativa
// Declarativa -NO va a modificar el objeto actual-

let resultado;
resultado = [ ...carrito, producto1];
resultado = [ producto2, ...resultado];//Me permite elegir la orden de como se ve el array al final
console.table(resultado);