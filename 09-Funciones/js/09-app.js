'use strict';
// Los métodos de propiedad
//es un objeto grande que contiene todas las funciones

const reproductor = {
    reproducir : function(id){
        console.log(`Reprjoduciendo cancion numero ${id}....`);
    },
    pausar : function(){
        console.log(`Pausando la cancion numero ....`);
    },
    borrar : function(id){
        console.log(`Borrando la cancion numero ${id}....`);
    },
    crearPlaylist : function(laCancion,){
        console.log(`Añadendo ${laCancion} al PlayList ....`);
    }
};
reproductor.reproducir(13);
reproductor.pausar(13);
reproductor.borrar(13);
reproductor.crearPlaylist("The RoccA 'General'");
