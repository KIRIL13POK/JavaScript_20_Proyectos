'use strict';

const aprendiendo = function (nombreAlumno){
    console.log(`El alumno ${nombreAlumno} esta apendieno el JavaScript....`)
};
 aprendiendo('Kiril Pokrovskiy');
 
//Arrow Functions --> La sintaxis 
 const aprendiendo2 =  nombreAlumno  => `El alumno ${nombreAlumno} esta apendieno el JavaScript....`;
/* La sintaxis es más corta que las funciones tradicionales.
  Cuando tienen una sola línea ---> llaves {} ya no son necesarias(opcionales)
                               ---> da por implicito el return.
*/
 

 aprendiendo('Kiril Pokrovskiy');
 console.log(aprendiendo2('Kira Pokrovskiy'));
