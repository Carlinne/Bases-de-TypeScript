/*
    ===== 08. Desestructuración de argumentos =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc : 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}

// function calculaISV(productos : Producto[]) : number {
//     let total = 0;

//     productos.forEach( (producto) => {
//         total += producto.precio;
//     })

//     return total * 0.15;
// }

//  const articulos = [tableta, telefono];

//  const isv = calculaISV(articulos);

//  console.log('ISV', isv);

 //Desestructuración de argumentos:

export function calculaISV(productos : Producto[]) : [number, number] {
    let total = 0;

    productos.forEach( ( { precio } ) => {
        total += precio;
    })

    return [total, total * 0.15];
}

// const articulos = [tableta, telefono];

// const [total, isv] = calculaISV(articulos); //Desestructuración de un arreglo.

// console.log('Total', total );
// console.log('ISV', isv);