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

carrito.push(producto1);//Agregar al final de array
carrito.push(producto2);
carrito.unshift(producto3);//Agregar  al principio de array

console.log(carrito);
console.table(carrito);

