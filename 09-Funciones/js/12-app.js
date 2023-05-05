'use strict';

const carrito = [
   { nombre: 'Monitor de 27 pulgadas', precio: 500 },
   { nombre: 'Televisión', precio: 100 },
   { nombre: 'Tablet', precio: 200 },
   { nombre: 'Audifonos', precio: 300 },
   { nombre: 'Teclado', precio: 400 },
   { nombre: 'Celular', precio: 700 },
];
//Arrow Functions -->
const nuevoArrayMap = carrito.map(producto => `${producto.nombre} con el precio de ${producto.precio}$`)

const nuevoArrayForEach = carrito.forEach(producto => `${producto.nombre} con el precio de ${producto.precio}$`);

console.log(nuevoArrayMap);
console.log(nuevoArrayForEach);


