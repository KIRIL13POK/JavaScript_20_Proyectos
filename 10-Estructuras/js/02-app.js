'use strict'
// != Diferente...  == igual a...
let puntaje = 1000;
if(puntaje != 1000){
    console.log(`Es diferente a ${puntaje}.`);
}else{
    console.log(`Es igual a ${puntaje}.`);
};
 puntaje = 1013;
if(puntaje != 1000){
    console.log(`Es diferente a ${puntaje}.`);
}else{
    console.log(`Es igual a ${puntaje}.`);
};

// === Operador Estricto
let puntos = 1000;
if(puntos === "1000"){
    console.log(`Es igual a ${puntos}.`);
}else{
    console.log(`Es diferente a ${puntos}.`);
};

