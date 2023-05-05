'use strict';
const producto = 'Monitor de 20 pulgadas';
const precio = '30 USD';
const precio2 = '331 USD';

console.log(producto.concat(precio));
console.log(producto.concat(' en descuento'));

console.log('********************************')

console.log(producto + precio);
console.log(producto + ' con precio ' + precio);
console.log('El producto ' + producto + ' con precio ' + precio);
//Otro metodo de concatenar es con una coma
console.log('El producto ', producto, ' con precio ', precio2);

console.log('********************************')
console.log(`El producto ${producto} con precio de ${precio}.`);

