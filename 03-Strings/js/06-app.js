'use strict';

const producto = 'Monitor de 20 pulgadas';
//El método .repetear te va a permetir repetir una cadena de texto....
const texto = ' en PROMOCION'.repeat(3);
console.log(texto);
console.log(`${producto}esta${texto}!!!!!`);
//El método .split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.
const actividad = 'Estoy aprendiendo JS moderno';
console.log(actividad.split(" "));