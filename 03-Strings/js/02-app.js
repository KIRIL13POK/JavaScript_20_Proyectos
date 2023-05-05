'use strict';
const producto = "Monitor de 20 pulgadas";
//Metodos de los String
//Conocer la cantidad de letras de la cadena de teto
console.log(producto.length);
//El método indexOf() devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde ; o -1 si no se encuentra dicho valor.
console.log(producto.indexOf('pulgadas'));
//El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda
console.log(producto.includes('monitor'));
console.log(producto.includes('Monitor'));