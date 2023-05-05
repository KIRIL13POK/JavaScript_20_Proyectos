'use strict';
const carrito = [];

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

carrito.push(producto2);//Agregar al final de array
carrito.push(producto1);
carrito.unshift(producto3);//Agregar  al principio de array


console.table(carrito);

//Elemminar ultimo elemento
 carrito.pop();
 console.table(carrito);
//Elemminar ultimo elemento
 carrito.pop();
 console.table(carrito);

// //Eliminar de inicio
carrito.shift();
console.table(carrito);

//Eliminar dentro de array
carrito.splice(0,2);//Toma dos parámetros. 1) la posición donde va a iniciar a cortar 2) el segundo es cuántos elementos quieres eliminar.
console.table(carrito);

