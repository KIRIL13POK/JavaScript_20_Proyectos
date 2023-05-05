
const encabezado = document.querySelector('h1');

encabezado.style.backgroundColor = '';
encabezado.style.fontFamily = 'Roman';
encabezado.style.textTransform = 'uppercase';

const card = document.querySelector('.card');
card.classList.add('nueva-clase');// añadir clase 
card.classList.remove('card');// eliminar
console.log(card.classList);
