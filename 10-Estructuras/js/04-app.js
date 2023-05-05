'use strict';
// Switch
// El switch es una forma de revisar por múltiples condiciones
const metodDePago = 'efectivo'
switch (metodDePago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodDePago}.`);
        break;//una vez que hayan hecho todos los que requieres --> break
    default:
        console.log(`No has seleccionado metodo de pago.`);
        break;
};
const metodDePagoCheque = 'cheque'
switch (metodDePagoCheque) {
    case 'efectivo':
        console.log(`Pagaste con ${metodDePagoCheque}.`);
        break;//una vez que hayan hecho todos los que requieres --> break
    case 'cheque':
        console.log(`Pagaste con ${metodDePagoCheque}.`);
        break;
    default:
        console.log(`No has seleccionado metodo de pago.`);
        break;
};