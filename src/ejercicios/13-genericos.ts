/*
    ===== 13. Genéricos =====
*/

function queTipoSoy<T>(argumento : T){
    return argumento;
}

let soyString = queTipoSoy<string>('Hola Mundo');

let soyNumero = queTipoSoy<number>(100);

let soyArreglo = queTipoSoy([1,2,3,4,5]);

let soyExplicito = queTipoSoy<number>(100);