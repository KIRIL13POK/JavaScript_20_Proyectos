'use strict';
const producto = '       Monitor de 20 Pulgadas            ';

console.log(producto);
//El espacio dentro de las comillas cuenta como un caracter
console.log(producto.length);
//Eliminar del inicio ....
console.log(producto.trimStart(''));
//Eliminar del final ....
console.log(producto.trimEnd(''));
//Eliminar del inicio y del final ....
console.log(producto.trimStart('').trimEnd());
//.trim() elemina en varias direcciones



