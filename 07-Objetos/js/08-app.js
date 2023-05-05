'use strict';

const producto = {
    nombre : 'Monitor de 20 pulgadas',
    precio : 300,
    disponible : true,
};

//Metodos Object
Object.freeze(producto);// --> No te va a permitir modificar las propiedades.

// producto.disponible = false;
// producto.imagen = 'imagen.jpg';

console.log(producto);
console.log(Object.isFrozen(producto))// Nos dice si está congelado
 