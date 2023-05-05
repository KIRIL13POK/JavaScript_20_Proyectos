//_____Campos del formulario_____\\
const mascotaInput = document.querySelector('#mascota')
const propietarioInput = document.querySelector('#propietario')
const telefonoInput = document.querySelector('#telefono')
const fechaInput = document.querySelector('#fecha')
const horaInput = document.querySelector('#hora')
const sintomasInput = document.querySelector('#sintomas')

//_____UI_____\\
const formulario = document.querySelector('#nueva-cita')
const contenedorCitas = document.querySelector('#citas')

let editando;

//_____Class_____\\
class Citas {
    constructor() {
        this.citas = []
    }

    agregarCita(cita) {
        this.citas = [...this.citas, cita]

        console.log(this.citas)
    }

    eliminarCita(id) {
        this.citas = this.citas.filter(cita => cita.id !== id)
    }
    editarCita(citaActualizada){
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita)


    }

}

class UI {
    imprimirAlerta(mensaje, tipo) {
        //Crear el DIV
        const divMensaje = document.createElement('DIV')
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12')

        //Agregar clase al tipo de error
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger')
        } else {
            divMensaje.classList.add('alert-success')
        }

        //Mensaje de error
        divMensaje.textContent = mensaje

        //Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'))

        //Quitar la alerta
        setTimeout(() => {
            divMensaje.remove()

        }, 2000)
    }

    imprimirCitas({ citas }) {

        this.limpiarHTML()

        citas.forEach(cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;
            const divCita = document.createElement('DIV')
            divCita.classList.add('cita', 'p-3')
            divCita.dataset.id = id

            //Scripting de los elementos de la cita
            const mascotaParrfo = document.createElement('H2')
            mascotaParrfo.classList.add('card-title', 'font-weight-bolder')
            mascotaParrfo.textContent = mascota

            const propietarioParrafo = document.createElement('P')
            propietarioParrafo.innerHTML = `
            <span class = "font-weight-border">Propietario:</span>${propietario}
            `

            const telefonoParrafo = document.createElement('P')
            telefonoParrafo.innerHTML = `
            <span class = "font-weight-border">Telefono:</span>${telefono}
            `

            const fechaParrafo = document.createElement('P')
            fechaParrafo.innerHTML = `
            <span class = "font-weight-border">Fecha:</span>${fecha}
            `

            const horaParrafo = document.createElement('P')
            horaParrafo.innerHTML = `
            <span class = "font-weight-border">Hora:</span>${hora}
            `

            const sintomasParrafo = document.createElement('P')
            sintomasParrafo.innerHTML = `
            <span class = "font-weight-border">Sintomas:</span>${sintomas}
            `
            //Añade un boton para eliminar citas
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2')
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> '
            btnEliminar.onclick = () => eliminarCita(id);

            //Añade un boton para editar citas
            const btnEditar = document.createElement('button')
            btnEditar.classList.add('btn', 'btn-info')
            btnEditar.innerHTML = 'Editar  <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path></svg>  '
            btnEditar.onclick = () => cargarEdicion(cita);



            //Agregar los parrafos en el divCita
            divCita.appendChild(mascotaParrfo)
            divCita.appendChild(propietarioParrafo)
            divCita.appendChild(telefonoParrafo)
            divCita.appendChild(fechaParrafo)
            divCita.appendChild(horaParrafo)
            divCita.appendChild(sintomasParrafo)
            divCita.appendChild(btnEliminar)
            divCita.appendChild(btnEditar)

            //Agregar las citas en HTML
            contenedorCitas.appendChild(divCita)
        })
    }
    limpiarHTML() {
        while (contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstElementChild)
        }
    }
}

const ui = new UI()
const administrarCitas = new Citas()

//_____Registrar Eventos_____\\
eventListener()
function eventListener() {
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);

    formulario.addEventListener('submit', nuevaCita)
}


//_____Objeto con la informacion de la cita_____\\
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

//_____Agrega datos al objeto de cita_____\\
function datosCita(e) {
    citaObj[e.target.name] = e.target.value
}

//_____Valida y agrega una nueva cita a la clase de citas_____\\
function nuevaCita(e) {

    e.preventDefault();
    //Extraer la informacion del objeto de cita
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;
    //Validar
    if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error')

        return;
    }

    if (editando) {
        console.log('Modo Edicion')
        ui.imprimirAlerta('Editado Correctamente');
        //Pasar el objeto de la cita a edición
        administrarCitas.editarCita({...citaObj})

        //Regresar el texto del boton a su estado original
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        //Quitar modo edicción
        editando = false;


    } else {
        console.log('Modo nueva cita')
        // Generar un ID
        citaObj.id = Date.now()

        //Creando una nueva cita
        administrarCitas.agregarCita({ ...citaObj });
        ui.imprimirAlerta('Se agregó correctamente');
    }



    //Reniciar objeto
    reniciarObjeto()

    //Reniciar el formulario
    formulario.reset()

    //Mostrar el HTML
    ui.imprimirCitas(administrarCitas)

}


function reniciarObjeto() {
    citaObj.mascota = ''
    citaObj.propietario = ''
    citaObj.telefono = ''
    citaObj.fecha = ''
    citaObj.hora = ''
    citaObj.sintomas = ''


}

function eliminarCita(id) {
    //Eliminar cita
    administrarCitas.eliminarCita(id)

    //Muestre un mensaje
    ui.imprimirAlerta('La cita se eliminó correctamente')

    //Refresca las citas
    ui.imprimirCitas(administrarCitas)
}

// Carga los datos y el modo de edición
function cargarEdicion(cita) {
    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

    //Llena los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    //Llenar el objeto
    citaObj.mascota = mascota
    citaObj.propietario = propietario
    citaObj.telefono = telefono
    citaObj.fecha = fecha
    citaObj.hora = hora
    citaObj.sintomas = sintomas
    citaObj.id = id

    //Cambiar el texto del boton
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;
}

