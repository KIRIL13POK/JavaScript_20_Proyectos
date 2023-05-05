// for of -->  itera sobre arreglos
const carrito = [
    {nombre : 'Monitor de 27 pulgadas', precio : 500},
    {nombre : 'Televisión', precio : 100},
    {nombre : 'Tablet', precio : 200},
    {nombre : 'Audifonos', precio : 300},
    {nombre : 'Teclado', precio : 400},
    {nombre : 'Celular', precio : 700},
];
for ( let producto of carrito){
    console.log(producto.nombre);
}

const automobil = {
    modelo: 'Camaro',
    year: 1969,
    motor : '6.0'
};
for ( let [llave, valor] of Object.entries(automobil)){
    console.log(llave)
}