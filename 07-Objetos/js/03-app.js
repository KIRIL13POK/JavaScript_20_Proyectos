'use strict';
const producto = {
    nombre : 'Monitor de 20 pulgadas',
    precio : 300,
    disponible : true,
};
//Agregar nuevos propiedades al objeto
producto.imagen = 'imagen.jpg';
//Eliminar propiedades al objeto
delete producto.disponible;
console.log(producto);