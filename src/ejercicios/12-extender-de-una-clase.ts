/*
    ===== 12. Extender de una clase =====
    Extender = Añadir ciertas funcionalidades, propiedades a una clase existente.
*/

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}

class Heroe3 extends PersonaNormal {
    constructor(
        public alterEgo: string,
        public edad: number,
    ){ 
        super('Tony', 'New York, USA'); //Llamar el constructor de la clase a la cual extiende
    }
}

const ironMan3 = new Heroe3('IronMan', 45);

console.log(ironMan3);