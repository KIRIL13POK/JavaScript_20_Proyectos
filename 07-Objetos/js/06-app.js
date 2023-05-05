'use strict';

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
    informacion: {// -->Obejeto dentro de un objeto
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion : {
            pais : 'China'
        }
    }  
};

//const { nombre, informacion: { fabricacion } } = producto;
//console.log(informacion); --> informacion no ixiste.
const { nombre, informacion, informacion: { fabricacion , fabricacion: {pais} } } = producto;
console.log(nombre);
console.log(fabricacion);
console.log(fabricacion.pais);
console.log(informacion)
