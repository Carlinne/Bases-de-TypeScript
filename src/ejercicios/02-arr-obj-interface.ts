/*
    ===== 02. Objetos, arreglos e interfaces. =====
*/

//let habilidades = [];
//let habilidades = [1, "Carlinne", true, [], {}];

//let habilidades : string[] = [ 'Mario de fuego', 'Invencible', 'Salto de pared' ];

interface Personaje {
    nombre: string;
    vidas : number;
    habilidades: string[];
    puebloNatal? : string;
}

const personaje : Personaje= {
    nombre : 'Mario Brosh.',
    vidas : 10,
    habilidades : [ 'Mario de fuego', 'Invencible', 'Salto de pared' ]
}

personaje.puebloNatal = 'Sonobe Japón';

console.log(personaje);
