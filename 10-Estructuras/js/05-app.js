'use strict';
// El operador &&  revisa que se cumplan dos condiciones dentro de if()
const usuario = true;
const puedePagar = false;
const tipoDePago = 'efectivo';

if( usuario && puedePagar ){
    console.log('Si puedes comprar.')
}else{
    console.log('NO no puedes comprar.')
};
console.log(usuario && puedePagar && tipoDePago );// Devueleve el primer false si todo es true devuelve el ultimo-->'efectivo'