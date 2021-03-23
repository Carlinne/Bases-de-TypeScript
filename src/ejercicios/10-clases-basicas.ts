/*
    ===== 10. Clases básicas =====
*/

class Heroe {
    private alterEgo: string;
    public edad: number;
    static nombreReal : number;  
    
    //Método
    imprimirNombre(): string {
        return this.alterEgo + ' ' + this.nombreReal; 
    } 
}

Heroe.nombreReal;

const ironMan = new Heroe(); //Instancia al objeto Heroe.
ironMan.edad;
console.log(ironMan);

interface Heroe {
    alterEgo_: string;
    edad: number;
    nombreReal : number;
    imprimirNombre: () => string;
}