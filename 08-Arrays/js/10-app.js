'use strict';
const carrito = [
    { nombre: 'Monitor de 27 pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];
//Metodo de array .map()--> Map va a llenar una variable con un arreglo nuevo.
carrito.map(function (producto,) {
    console.log(`${producto.nombre} con el precio de ${producto.precio}$`);
})
//Metodo de array .forEach()
carrito.forEach( function (producto,){
    console.log(`${producto.nombre} con el precio de ${producto.precio}$`);
})

const carritoEjempolo2 = [
    { nombre: 'Monitor de 27 pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];   

const nuevoArrayMap = carritoEjempolo2.map(function (producto,) {
   return`${producto.nombre} con el precio de ${producto.precio}$`;
});
const nuevoArrayForEach = carritoEjempolo2.forEach( function (producto,){
   return`${producto.nombre} con el precio de ${producto.precio}$`;
});
console.log(nuevoArrayMap);//Devuelve un array nuevo
console.log(nuevoArrayForEach);//Devuelve undefined
// Esa es la diferencia : .Map() crea un nuevo arreglo y .forEach()--NO.

