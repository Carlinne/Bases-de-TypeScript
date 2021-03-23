import { Producto, calculaISV } from './08-desestructuracion-de-argumentos';
/*
    ===== 09. Importaciones y exportaciones =====
*/

// interface Producto {
//     desc: string;
//     precio: number;
// }

const carritoCompras: Producto[] = [
    {
        desc: 'Funda para laptop',
        precio: 100
    },
    {
        desc : 'Telefono',
        precio: 500
    }
];

const [total, isv] = calculaISV(carritoCompras);
console.log('Total', total );
console.log('ISV', isv);