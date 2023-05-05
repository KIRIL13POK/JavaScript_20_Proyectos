//for in -->  itera sobre objetos
const automobil = {
    modelo: 'Camaro',
    year: 1969,
    motor : '6.0'
};


for (let propiedad in automobil ){
    console.log(`${automobil[propiedad]}`)
};

for ( let [llave, valor] of Object.entries(automobil)){
    console.log(llave)
}