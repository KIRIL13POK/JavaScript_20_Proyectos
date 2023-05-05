'use strict';
const carrito = [
    {nombre : 'Monitor de 27 pulgadas', precio : 500},
    {nombre : 'Televisión', precio : 100},
    {nombre : 'Tablet', precio : 200},
    {nombre : 'Audifonos', precio : 300},
    {nombre : 'Teclado', precio : 400},
    {nombre : 'Celular', precio : 700},
];
carrito.forEach( producto => console.log(producto.nombre));