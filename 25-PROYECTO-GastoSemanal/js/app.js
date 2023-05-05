//Variables Y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

//Eventos

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded',preguntarPresupuesto)

    formulario.addEventListener('submit', agregarGasto);
}

//Clases

class Presupuesto{
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        // console.log(this.gastos);
    }

}

class UI{
    insertarPresupuesto(cantidad){
        //Extraendo el valor
        const { presupuesto, restante } = cantidad;
        //Agregando al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
        
    }

    imprimirAlerta(mensaje, tipoMensaje){
        // Crear el div
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center', 'alert');

        if(tipoMensaje === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        //Imprimir mensaje de error
        divMensaje.textContent = mensaje;

        //Insertar en HTMl

        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        //Quitar del HTML
         setTimeout( () => {
            divMensaje.remove();

         },1000)
    }

    agregarGastoListado(gastos){
        
     // Iterar sobre los gastos
     gastos.forEach( gasto => {
        console.log(gasto);
     })

    }
}

// Instanciar 
const ui = new UI();


let presupuesto;

//Funciones

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('Cual es tu presupuesto?');
    // console.log(presupuestoUsuario);
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <=0 ){
        window.location.reload();//hace recargar la ventana actual
    }

    //Presuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
   //console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}

//Añade gastos

function agregarGasto(e){
    e.preventDefault();

    //Leer los datos de formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = +document.querySelector('#cantidad').value;

    //Validar los datos de formulario
    if(nombre === '' || cantidad === '' ){
       ui.imprimirAlerta('Ambos campos son oblogatorios', 'error');
       return;
    }else if( cantidad <= 0 || isNaN(cantidad)){
       ui.imprimirAlerta( 'La cantidad no es correcta', 'error');
       return;
    }
    
    //Generar el objeto con el gasto
    const gasto = { nombre, cantidad, id: Date.now()}

    //Añade nuevo gasto
    presupuesto.nuevoGasto(gasto);

    //Genera alerta que todo esta correcto
    ui.imprimirAlerta('Todo Correcto');

    //Imprimir los gastos
    const{ gastos } = presupuesto;
    ui.agregarGastoListado( gastos);

    //Renicia formulario
    formulario.reset();


}