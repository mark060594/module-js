/*
    Ejercicio 1:
    Pedir al usuario usuario un numero entre 1 y 10
    Imprimir la tabla de multiplicar de ese número
    p.ej.
    3 x 1 = 3
    3 x 2 = 6
*/



/*
Ejercicio 4:
Imprimir en consola el siguiente patrón
*/


getNumber = () => {

    let num = prompt('Ingresa un numero');
    return num;
}

calculate = (num) => {

    console.log(`Tabla del ${num}`);
    for(let i = 1 ; i <= 10 ; i++) {

        console.log( `${num} * ${i} = ${num*i} `);

    }
         
                                         
}

console.log(calculate(getNumber()));