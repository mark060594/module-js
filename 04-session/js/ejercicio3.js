/*
Ejercicio 3:
Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10
*/


getNumber = () => {

    let num = prompt('Ingresa un numero');
    return num;
}


calculate = (num) => {

    let array;

    array = num.split('');
    let arrayLenght = array.length;
    let sum = 0;
    
    
    for(let i = 0 ; i < arrayLenght ; i++) {

        let intArray = [];
        intArray[i] = parseInt(array[i]);
        sum += intArray[i];

    }

    return `La suma de los digitos es ${sum}`;



}

console.log(calculate(getNumber()));