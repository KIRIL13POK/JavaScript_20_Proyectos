function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'GolD'
    } else if (this.saldo > 5000) {
        tipo = 'PlatinuM'
    } else {
        tipo = 'NormaL'
    }

    return tipo;

}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre} , Saldo:${this.saldo}$,Tipo Cliente:${this.tipoCliente()}`
}

Cliente.prototype.retirarSaldo = function(retira){
    this.saldo -= retira;
}

function Persona(nombre,saldo,telefono){
   Cliente.call(this,nombre,saldo);//--> Heredando el constructor de cliente.
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype);
//--> De esa forma vamos a pasarle todo al prototipo de cliente hacia el prototipo de persona.
/*Object.create() es un método en JavaScript que permite crear un objeto en base a un objeto existente, es decir, crear un objeto heredando propiedades y métodos de otro objeto.

El método Object.create() recibe dos argumentos:

    El objeto a partir del cual se va a crear un nuevo objeto. Este objeto es conocido como prototipo.

    Una descripción de las propiedades del nuevo objeto. Esta descripción puede incluir valores para las propiedades, descripciones de getters y setters, y otras opciones de configuración de las propiedades.
    */
   Persona.prototype.constructor = Cliente;

//Instanciarlo
const kiril = new Persona('Kiril',1000000, 6870878988)
console.log(kiril);
console.log(kiril.nombreClienteSaldo());//--> aqui ya  heredaremos las funciones.