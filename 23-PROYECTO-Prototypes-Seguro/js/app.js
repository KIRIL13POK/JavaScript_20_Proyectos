
//Constructores

function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;

}

//Realiza la cotización con los datos
Seguro.prototype.cotizarSeguro = function () {

    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case '1':
            cantidad = base * 1.15
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            break;
            cantidad = base * 1.35;
        default:
            break;
    }

    //Leer el año -->
    const diferencia = new Date().getFullYear() - this.year;
    //Se reduce el costo en un 3% por cada año -->  
    cantidad -= ((diferencia * 3) * cantidad) / 100;
    //Calculo de tipo seguro -->
    if (this.tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;

    }

    return cantidad;


}


function UI() { }

//Prtotype
//Llena las opciones de los años==>
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
        min = max - 23;

    const selectYear = document.querySelector('#year');
    for (let i = max; i >= min; i--) {
        let option = document.createElement('OPTION');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);

    }
}

//Muesta alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('DIV');

    if (tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');

    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    //Insertar HTML==>
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    // Para limpiar ese mensaje de error ==>
    setTimeout(() => {
        div.remove();
    }, 3000);

}

UI.prototype.mostrarResultado = (total, seguro) => {

    const { marca, year, tipo } = seguro;
    let textoMarca;

    switch (marca) {
        case '1':
            textoMarca = 'Americano'
            break;
        case '2':
            textoMarca = 'Asiatico'
            break;
        case '3':
            textoMarca = 'Europeo'
            break;
        default:
            break;
    }


    //Crear el resultado ==>
    const div = document.createElement('DIV');
    div.classList.add('mt-10');

    div.innerHTML = `
    <p class = "header">Tu Resumen </p>
    <p class = "font-bold">  Marca: <spam class="font-normal" > ${textoMarca}. </spam> </p>
    <p class = "font-bold">  Año: <spam class="font-normal" > ${year} </spam> </p>
    <p class = "font-bold">  Tipo Seguro: <spam class="font-normal capitalize" > ${tipo} </spam> </p>
    <p class = "font-bold">  Total: <spam class="font-normal" > ${total} </spam> </p>
    
    `;

    const resultadoDiv = document.querySelector('#resultado');


    //Mostrar el espiner ==>
    const spiner = document.querySelector('#cargando');
    spiner.style.display = 'block';

    // Para limpiar este spiner ==>
    setTimeout(() => {
        spiner.style.display = 'none';//se borra
        resultadoDiv.appendChild(div);//se muestra a continación
    }, 3000);


}


//Instanciar UI

const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();//Llenar el select con años

})

eventListeners();
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();

    //Leer la marca slecionada
    const marca = document.querySelector('#marca').value;

    //Leer el año slecionado
    const year = document.querySelector('#year').value;

    //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son obligatirios', 'error')
        return;

    }

    ui.mostrarMensaje('Todo Correcto', 'correcto');

    //Ocultar las cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if (resultados != null) {
        resultados.remove();

    }




    //Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();

    //Ultilizar el prototype que va a cotizar
    ui.mostrarResultado(total, seguro);

}