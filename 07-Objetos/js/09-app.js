'use strict';

const producto = {
    nombre : 'Monitor de 20 pulgadas',
    precio : 300,
    disponible : true,
};

//Metodos Object
Object.seal(producto);// --> no se pueden agregar ni eliminar propiedades, pero se pueden modificar las existentes.


console.log(Object.isSealed(producto));// --> para  saber si un objeto está sellado
