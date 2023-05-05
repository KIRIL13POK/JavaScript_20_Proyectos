// const navegacion = document.querySelector('.navegacion')
// console.log(navegacion.childNodes);// Los espacios en blanco son considerados elementos.
// //--> Alternativa más limpio:
// console.log(navegacion.children);
// console.log(navegacion.children[2]);

// console.log(navegacion.children[1].nodeName);// Devuelve A.
// console.log(navegacion.children[1].nodeType);// Devuelve 1.

const card = document.querySelector('.card');
card.children[1].children[1].textContent = 'Música Hip - Hop 2021'
console.log(card.children[1].children[1].textContent);

card.children[0].src = 'img/hacer3.jpg';
console.log(card.children[0]);

//Traversing del hijo al padre
console.log(card.parentNode);
console.log(card.parentElement.parentElement.parentElement);