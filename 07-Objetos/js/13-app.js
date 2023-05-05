'use strict';

const producto = {
    nombre : 'Monitor de 20 pulgadas',
    precio : 300,
    disponible : true,
};
//Devuele un array con las llaves del objeto
console.log(Object.keys(producto));
//Devuele un array con los valores del objeto
console.log(Object.values(producto));
//Devuelve un nuevo objeto de tipo Iterator que contiene un array de tuplas [value, value] por cada elemento en el Set original, manteniendo el orden de inserción. En los objetos de tipo Set no existe una clave key como ocurre en los objetos de tipo Map .
console.log(Object.entries(producto));
