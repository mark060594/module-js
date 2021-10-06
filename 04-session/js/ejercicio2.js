/*
Ejercicio 2:
Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero
*/


getNumber = () => {

    let aux,num;

    do {

        aux =0;
        num = prompt('Ingresa un numero');

        if(num < 10 && num > 100) {
            aux = 1;
            alert('Debes ingresar un numero mayor a 10 y menor o igual a 100, Vuelve a intentarlo');
        }

     }while(aux > 0)

     return num;
    
}  


print = (num) => {

    for(let i = 1 ; i <= num ; i++) {

        if(i % 2 == 0) {
            console.log(`${i} es un numero par`);
        }

    }
}

console.log(print(getNumber()));

