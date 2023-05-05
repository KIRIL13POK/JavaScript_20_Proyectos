const cliente = {
    nombre : 'Juan',
    saldo : 500
}

console.log(cliente);

function otroCliente( nombre , saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}
 const juan = new otroCliente('Juan', 500);

 console.log(juan);
/* ==>
 Hay una diferencia importante entre los dos objetos cliente y juan que se están creando.

El primer objeto, llamado cliente, es un objeto literal, es decir, un objeto que se define directamente sin necesidad de una función constructora. Es un objeto de un solo uso, que no se puede reutilizar para crear objetos similares.

Por otro lado, el objeto juan es un objeto creado a partir de una función constructora llamada otroCliente. La función constructora se utiliza para crear objetos con una estructura similar y propiedades comunes. Al utilizar la palabra clave new antes de llamar a la función constructora, se está creando una nueva instancia de la función constructora, con sus propias propiedades individuales.

 En resumen, el objeto cliente es un objeto literal único, mientras que el objeto juan es una instancia de una función constructora que se puede reutilizar para crear objetos similares.
 
 ==> La línea this.nombre = nombre dentro de la función constructora otroCliente establece la propiedad nombre del objeto actual que se está creando. La palabra clave this hace referencia al objeto que está siendo creado a partir de la función constructora.

Al utilizar this.nombre = nombre, se está asignando el valor del parámetro nombre a la propiedad nombre del objeto creado. De esta manera, cada objeto creado a partir de la función constructora tendrá su propia copia de la propiedad nombre, con su valor individual.

Por ejemplo, cuando se crea el objeto juan a partir de la función constructora, nombre toma el valor 'Juan', y se asigna a la propiedad nombre del objeto juan. De esta manera, el objeto juan tendrá su propia propiedad nombre con el valor 'Juan'.
 
 
 
 */