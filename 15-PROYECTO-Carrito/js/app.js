// Variables
const carrito = document.querySelector('#carrito');
// console.log(carrito);
const listaCursos = document.querySelector('#lista-cursos');
// console.log(listaCursos);
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
// console.log(contenedorCarrito);
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
// console.log(vaciarCarritoBtn);
let articulosCarrito = [];



cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);
};

//Funciones
//Función que añade el curso al carrito
function agregarCurso(e) {
    e.preventDefault();//prevenimos la acción por default
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    };
};

//Elimina cursos del carrito
function eliminarCurso(e){
    
    if(e.target.classList.contains('borrar-curso')){
       const cursoId = e.target.getAttribute('data-id');

       //Eliminar del arreglo de articulosCarrito por el data-id
       articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
       
       carritoHTML();//Iterrear sobre el carrito y mstrar su HTML
    }
}


//Lee el contenido de HTML al que le dimos el click y extrae la información del curso
function leerDatosCurso(curso) {
    //console.log(curso);
    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }

    //Revisa si elemento ya existe en el carrioto
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe) {
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;//retorna objeto actualizado
            } else {
                return curso;//retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
        //Agregamos el curso al carrito// Agregar elementos al array de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }





    console.log(articulosCarrito);

    carritoHTML();

};

//Muestra el Carrito de compras en el HTML
function carritoHTML() {

    //Limpiar el HTML

    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td><img src="${imagen}" width="100" ></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td> ${cantidad}</td>
        <td><a href="#" class= "borrar_curso" data-id=${id}> X </a></td>
        `
        //Agrega el HTML en el carrito de tbody
        contenedorCarrito.appendChild(row);
    });
}

// Elemina los cursos del tbody
function limpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = '';

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

