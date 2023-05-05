'use strict';
const producto = {
    nombre : 'Monitor de 20 pulgadas',
    precio : 300,
    disponible : true,
};
 /* const no se puede reasignar,Sin embargo, los objetos sí se pueden reasignar.
 una variable, aunque esté declarada como const, al estar en un objeto, sus propiedades se pueden reescribir o eliminar, incluso eliminar */
producto.disponible = false;
console.log(producto);

