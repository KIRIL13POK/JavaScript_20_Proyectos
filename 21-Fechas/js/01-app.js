const diaHoy = new Date();
// El objeto Date es un objeto de JavaScript que permite trabajar con fechas y horas. Con este objeto, puedes obtener información sobre la fecha y hora actual, establecer una fecha y hora específicas, calcular la diferencia entre fechas, y realizar muchas otras operaciones relacionadas con fechas.
let valor;
valor = diaHoy;

console.log(valor);

console.log("Año: " + valor.getFullYear());
console.log("Mes: " + valor.getMonth());
console.log("Día: " + valor.getDate());
console.log("Hora: " + valor.getHours());
console.log("Minutos: " + valor.getMinutes());
console.log("Segundos: " + valor.getSeconds());


console.log(Date.now())
// El método Date.now() es un método estático de JavaScript que permite obtener el número de milisegundos transcurridos desde el 1 de enero de 1970 hasta el momento actual. Este método es útil para medir el tiempo de ejecución de una operación o para generar identificadores únicos basados en la fecha y hora actual.