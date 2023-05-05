const primerEnlace = document.querySelector('a');
primerEnlace.remove();

// La otra forma es por el padre..
const navegacion = document.querySelector('.navegacion');
// console.log( navgacion.children);
navegacion.removeChild(navegacion.children[2]);
// Otra forma es creando una variable...
const borrar = navegacion.children[2];
navegacion.removeChild(borrar);

