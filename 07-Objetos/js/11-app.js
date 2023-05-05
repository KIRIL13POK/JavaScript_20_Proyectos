'use strict';

const producto = {
    nombre : 'Monitor de 20 pulgadas',
    precio : 300,
    disponible : true,
    mostrarInfo : function(){
//La palabra --this.-- se refiere a los valores que existen en el mismo objeto.
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}$`)
    }
};

producto.mostrarInfo();
