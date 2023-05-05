function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const kiril = new Cliente('Kiril', 10000000);

function formatearCliente(cliente) {
    const { nombre, saldo } = cliente;
    return `El Cliente ${nombre} tiene un saldo de ${saldo}$`;

}
function formatearEmpresa(empresa) {
    const { nombre, saldo, categoria } = empresa;
    return `El Cliente ${nombre} tiene un saldo de ${saldo}$ y pertenece a la categoria ${categoria}.`;

}

console.log(formatearCliente(kiril))

function Empresa(nombre, saldo, categoria) {

    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCK = new Empresa('Una Maquina Un Titan', 1000000000, 'Trabajos serios y de Gran Calidad')
console.log(formatearEmpresa(CCK));
