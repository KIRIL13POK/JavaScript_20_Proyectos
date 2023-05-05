'use strict';
const carrito = [
    {nombre : 'Monitor de 27 pulgadas', precio : 500},
    {nombre : 'Televisión', precio : 100},
    {nombre : 'Tablet', precio : 200},
    {nombre : 'Audifonos', precio : 300, descuento :true},
    {nombre : 'Teclado', precio : 400},
    {nombre : 'Celular', precio : 700, descuento :true},
];
for ( let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento.`); 
        continue; 
    }
    console.log(carrito[i].nombre);
};