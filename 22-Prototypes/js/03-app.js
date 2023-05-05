// En JavaScript, los prototipos son una forma de crear objetos basados en otros objetos. Un objeto puede heredar propiedades y métodos de otro objeto mediante la asignación de un prototipo. 

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



// Instarciarlo
const kiril = new Cliente('Kiril', 1000000);
console.log(kiril.tipoCliente());
console.log(kiril.nombreClienteSaldo());


Cliente.prototype.tipoNewProto = function () {
    console.log('was up!!! soy new proto MAn');
}
Cliente.prototype.tipoSaldo = function () {
    console.log(this.saldo);
}



console.log(kiril);

kiril.tipoNewProto();
kiril.tipoSaldo();


