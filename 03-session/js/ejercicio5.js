/*
Ejercicio 5:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/


const getPhrase = () => {

     let aux, phrase, array;

     
    do  {
        aux=0;
        phrase = prompt('Ingresa una frase de 2 palabras');
        array = phrase.split(' ');
        console.log(array.length);
        if(array.length > 2){
            aux=1;
            alert('La frase es mayor a dos palabras, vuelve a intentar');
        }
    }while (aux > 0);

    if(array[0].length > array[1].length){

        return array[0];
    }else return array[1];







}

console.log(getPhrase());