/*
localStorage y sessionStorage son propiedades que acceden al objeto Storage y tienen la función de almacenar datos de manera local, la diferencia entre éstas dos es que localStorage almacena la información de forma indefinida o hasta que se decida limpiar los datos del navegador y sessionStorage almacena información mientras la pestaña donde se esté utilizando siga abierta, una vez cerrada, la información se elimina.
*/



localStorage.setItem('nombre', 'KIRIL')

const producto = {
    nombre : 'Monitor de 24 pulgads',
    precio : 300,
}
const productoString = JSON.stringify(producto);
console.log(productoString);// --> {"nombre":"Monitor de 24 pulgads","precio":300}

localStorage.setItem('producto', productoString);

const meses = ['Febrero','Marzo','Abril'];
const mesesString = JSON.stringify(meses);
console.log(mesesString);


localStorage.setItem('meses', mesesString);

