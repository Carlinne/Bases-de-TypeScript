/*
    ===== 03. Funciones básicas =====
*/

// function suma(a, b) {
//     return a + b;
// }

// const resultado = suma('Carlinne ', true);
// console.log(resultado);

//Tipado estricto
function sumar(numero1: number, numero2: number) : number {
    return numero1 + numero2;
}

//Función de flecha.
const sumarFlechaSinTipado = (a, b ) => {
    return a + b;
}

//Especificación de tipado
const sumarFlechaConTipado = (a: number, b: number) : number => {
    return a + b;
}
// const resulSuma = sumarFlechaConTipado(10, 20);
// console.log(resulSuma);

//JS
function multiplicar(number, otherNumber, base) {
    return number * base;
}

//TS
function multiplicarCTipado(number: number, otherNumber?: number, base: number = 2) : number {
    return number * base;
}

const res = multiplicarCTipado(5,10,5);
console.log("Multiplicación " +res);

