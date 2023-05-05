const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);
//Acceder al h1
// console.log(encabezado.innerText);//no va a encontrar un texto oculto con visibility hidden en CSS
// console.log(encabezado.textContent);
//  console.log(encabezado.innerHTML);//Devuelve --> Encuentra <span> hospedaje  </span>para tus próximas vacaciones


document.querySelector('.contenido-hero h1').textContent = 'Nevo h1 con  document.querySelector().textContent;';

const nuevoH1 = 'Nuevo h1 con una variable';
document.querySelector('.contenido-hero h1').textContent = nuevoH1;