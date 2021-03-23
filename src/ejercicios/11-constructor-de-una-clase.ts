/*
    ===== 11. Constructor de una clase =====
*/

// class Heroe2 {
//     alterEgo: string;
//     edad: number;
//     nombreReal : number;  
    
//     //Función que se va a llamar cuando creo una instancia de mi clase.
//     constructor(){
//         console.log('Hey!!!');
//     }

//     //Método
//     imprimirNombre(): string {
//         return this.alterEgo + ' ' + this.nombreReal; 
//     } 
// }

// const ironMan2 = new Heroe2();
// console.log(ironMan2);

// class Heroe2 {
//     alterEgo: string;
//     edad: number;
//     nombreReal : string;  
    
//     //Función que se va a llamar cuando creo una instancia de mi clase.
//     constructor(
//         alterEgo: string,
//          edad: number, 
//          nombreReal : string){
//              this.alterEgo = alterEgo;
//              this.edad = edad;
//              this.nombreReal = nombreReal;
//     }

//     //Método
//     // imprimirNombre(): string {
//     //     return this.alterEgo + ' ' + this.nombreReal; 
//     // } 
// }

// const ironMan2 = new Heroe2('IronMan', 45, 'Tony');
// console.log(ironMan2);

//3. Resumir con TypeScript
class Heroe2 {

    //Función que se va a llamar cuando creo una instancia de mi clase.
    constructor(
        public alterEgo: string,
        public edad: number, 
        public nombreReal : string){ }

    //Método
    // imprimirNombre(): string {
    //     return this.alterEgo + ' ' + this.nombreReal; 
    // } 
}

const ironMan2 = new Heroe2('IronMan', 45, 'Tony');
console.log(ironMan2);
