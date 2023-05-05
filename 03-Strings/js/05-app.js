"use strict";
const producto = 'Monitor de 20 pulgadas';

console.log(producto);
//El método replace() devuelve una nueva cadena con algunas o todas las coincidencias de un patrón , siendo cada una de estas coincidencias reemplazadas por remplazo . El patrón puede ser una cadena o una RegExp , y el reemplazo puede ser una cadena o una función que será llamada para cada coincidencia.
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));
// El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
console.log(producto.slice(0,10));
console.log(producto.slice(8));
//Alternativa a slice() ---> substring() es un método para extraer una subcadena de texto de una cadena más grande, dadas las posiciones inicial y final dentro de la cadena. Debido a que el método substring() es un método del objeto String, debe invocarse a través de una instancia particular de su clase.
console.log(producto.substring(0,10))
console.log(producto.substring(5,2)) // Devuelve 'nit'


