/*
    ===== 07. Desestructuración de arreglos =====
    Consiste en extraer de un arreglo sus diferentes valores y crear variables o constantes basados en esos valores.
*/

const dbz : string[] = ['Goku','Vegeta','Trunks']; //Arreglo de stringd

//Imprimir en consola esos 3 personas..
// console.log('Personaje 1: ', dbz[0]);
// console.log('Personaje 2: ', dbz[1]);
// console.log('Personaje 3: ', dbz[2]);

//Desestructuración de arreglos en donde la posicion en la que 
//coloques las variables es importante.

const [ per1, per2, per3] = dbz; 

console.log('Personaje 1: ', per1);
console.log('Personaje 1: ', per2);
console.log('Personaje 1: ', per3);