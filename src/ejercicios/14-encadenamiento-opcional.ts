/*
    ===== 14. Encadenamiento opcional =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[] //Propiedad opcional
}

const pasajero1 : Pasajero = {
    nombre : 'Carlinne'
}
const pasajero2 : Pasajero = {
    nombre : 'Veronica',
    hijos: ['Natalia', 'Luisito']
}

function imprimeHijos(pasajero: Pasajero): void{
    const cuantosHijos = pasajero.hijos?.length || 0; //Encadenamiento opcional 
    console.log(cuantosHijos);
}
imprimeHijos(pasajero1);

