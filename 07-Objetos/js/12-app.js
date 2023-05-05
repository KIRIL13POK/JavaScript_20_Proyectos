'use strict';

//Object literal 
const producto = {
    nombre : 'Monitor de 20 pulgadas',
    precio : 300,
    disponible : true,
};

//Object Constructor
function productoConstructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}
const producto2 = new productoConstructor('Monitor de 19 pulgadas', 112);
console.log(producto2)
const producto3 = new productoConstructor('Tablet', 700);
console.log(producto3)

