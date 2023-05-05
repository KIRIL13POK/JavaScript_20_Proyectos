'use strict';
let str = '';
for (let i = 0; i <= 150; i++) {
    if (i % 2 === 0) {
        console.log(`El umero ${i} es PAR`)
    }
    else{
        console.log( `El umero ${i} es IMPAR`)
    } 
};


const carrito = [
    {nombre : 'Monitor de 27 pulgadas', precio : 500},
    {nombre : 'Televisión', precio : 100},
    {nombre : 'Tablet', precio : 200},
    {nombre : 'Audifonos', precio : 300},
    {nombre : 'Teclado', precio : 400},
    {nombre : 'Celular', precio : 700},
];
for ( let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
};


