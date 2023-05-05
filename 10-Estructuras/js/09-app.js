'use strict';
//operador ternario --?--
const autenticado = true,
       puedePagar = true;

console.log(autenticado && puedePagar ? 'Efectuar el pago' : 'No no Efectuar el pago');
console.log(autenticado ? puedePagar ? 'Si autenticado y puede pagar' : 'Si autenticado pero no puede pagar' : 'No no esta autenticado');

const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

// if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){
//     console.log('Se puede pagar');
// }else{
//     console.log('Fondos insuficientes')
// };

console.log(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar ? 'Se puede pagar' : 'Fondos insuficientes');


