'use strict'
//El operador OR, va a revisar que se cumpla una o la otra condición dentro de if()
const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){
    console.log('Se puede pagar');
}else{
    console.log('Fondos insuficientes')
};
console.log((efectivo > totalPagar || credito < totalPagar || disponible))// Devueleve el primer true si todo es false devuelve el ultimo --> valor de disponible