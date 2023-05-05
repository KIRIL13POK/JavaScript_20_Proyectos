//VARIABLES
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


//Contenedor para los resultados
const resultado = document.querySelector('#resultado');



const max = new Date().getFullYear();
const min = max - 10;

//Generar  un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',

}


//Eventos
document.addEventListener('DOMContentLoaded', () => {
    //Muestra los automobiles al cargar
    mostrarAutos(autos);
    //Llena las opciones del año
    llenarSelect();

});

//Event listener para select de búsqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
});
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
    console.log(datosBusqueda);
});



function mostrarAutos(autos) {
    //Elemina HTML previo
    limpiarHTML();

    autos.forEach(auto => {

        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('P');

        autoHTML.textContent = `
        ${marca}-${modelo}-${year}-${puertas}Puertas-${transmision}-${precio}$-${color}

        `;
        // insertar en elHTML
        resultado.classList.add('buen_resultado', 'sinError');
        resultado.appendChild(autoHTML);

    });

}

//Genera años de select
function llenarSelect() {

    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);//*No va a borrar el contenido previo.

    }
}
//Limpiar HTML
function limpiarHTML() {

    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

}

//Filtar en base a la busqueda
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if (resultado.length) {
        mostrarAutos(resultado);

    }else{
        noResultado();
    }

}

//Genera un DIV que va a tener un texto que va a decir que no hubo resultados.
function noResultado(){

     limpiarHTML();

    const noResultado = document.createElement('DIV');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No Hay Resultdo, Intente De Nuevo Más Tarde';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;

    if (marca) {
        return auto.marca === marca;
    }
    return auto;

}
function filtrarYear(auto) {
    const { year } = datosBusqueda;

    if (year) {
        return auto.year === +year;
    }
    return auto;

}

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;

    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto;

}
function filtrarMaximo(auto) {
    const { maximo } = datosBusqueda;

    if (maximo) {
        return auto.precio <= maximo;
    }
    return auto;

}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;
    if (puertas) {
        return auto.puertas === +puertas;
    }
    return auto
}

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda
    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto
}

function filtrarColor(auto) {
    const { color } = datosBusqueda
    if (color) {
        return auto.color === color;
    }
    return auto
}
