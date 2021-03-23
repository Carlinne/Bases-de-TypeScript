/*
    ===== 06. Desestructuración de objetos =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles : Detalles;
}

interface Detalles {
    autor : string;
    anio: number;
}

const reproductor : Reproductor = {
    volumen : 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio : 2015
    }
}

// console.log('El volumen actual es de: ', reproductor.volumen);
// console.log('El segundo actual es de: ', reproductor.segundo);
// console.log('La canción actual es de: ', reproductor.cancion);
// console.log('El autor es: ', reproductor.detalles.autor);

//DESESTRUCTURACIÓN --Extraer propiedades de un objeto y crear variables.

const { volumen : vol, segundo : seg, cancion, detalles } = reproductor; //Tomando el objeto reproductor y me interesan las propiedades que voy a definir aqui dentro, esas propiedades son constantes.
const {autor : aut, anio } = detalles;

console.log('El volumen actual es de: ', vol);
console.log('El segundo actual es de: ', seg);
console.log('La canción actual es de: ', cancion);
console.log('El autor es: ', aut);