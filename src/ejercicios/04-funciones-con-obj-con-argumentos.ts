/*
    ===== 04. Funciones con objetos como argumentos =====
*/

interface Personaje2 {
    nombre : string;
    vidas: number;
}

function sumarVidas(personaje: Personaje2, numVidas: number): void {
    personaje.vidas += numVidas;
    console.log(personaje);
}

const nuevoPersonaje: Personaje2 = {
    nombre : 'Mario Bros.',
    vidas: 50
}

sumarVidas(nuevoPersonaje, 10);
console.log(nuevoPersonaje);