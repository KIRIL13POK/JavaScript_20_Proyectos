'use strict';
//Es recomendable que las funciones estén divididas en pequeñas partes, realicen una operación y manden llamar a otra función para que se comuniquen unas con otras.

function inciarApp() {
    console.log('Primer paso: Iiciando App......');
    segunadaFuncion()
};

function segunadaFuncion() {
    console.log('------Desde la segunada función------');
    usuarioAutenticado('Pablo')

};
inciarApp();

function usuarioAutenticado(usuario){
    console.log( 'Segundo paso: Auteticando usuario....espere....');
    console.log(`Resultado: ${usuario} autenticado ixítosamente,gracias`);
};