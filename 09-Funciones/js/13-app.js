'use strict';
const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reprjoduciendo cancion numero ${id}....`),
    pausar: () => console.log(`Pausando la cancion numero ....`),
    borrar: id => console.log(`Borrando la cancion numero ${id}....`),
    crearPlaylist: laCancion => console.log(`Añadendo ${laCancion} al PlayList ....`),

    set nuevaCancion(cancion) { //--> Set es una forma de agregar valores
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)
    },
    get obtenerCancion() {     //-->Get una forma de obtener de vuelta sus valores
        console.log(`${this.cancion}`)
    }
};
reproductor.nuevaCancion ='Limmbp Bizkit -"My Way"';
reproductor.obtenerCancion;

reproductor.reproducir(13);
reproductor.pausar(13);
reproductor.borrar(13);
reproductor.crearPlaylist("The RoccA 'General'");