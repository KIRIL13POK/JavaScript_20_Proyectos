'use strict';

const aprendiendo = function (nombreAlumno){
    console.log(`El alumno ${nombreAlumno} esta apendieno el JavaScript....`)
};
 aprendiendo('Kiril Pokrovskiy');

//Arrow Functions --> Los Parametros
 const aprendiendo2 =  nombreAlumno  => `El alumno ${nombreAlumno} esta apendieno el JavaScript....`;
 
//Cuando pasas solo un parametro ---> las laves() de parametro son opcionales
        
 aprendiendo('Kiril Pokrovskiy');
 console.log(aprendiendo2('Kira Pokrovskiy'));

