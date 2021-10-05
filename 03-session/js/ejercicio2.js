/*
Ejercicio 2:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/




const getName = () => {

    let nameGetted = prompt('Ingresa tu nombre completo');
    let array = nameGetted.split(' ');
    return array;
}

const getChar = (array) => {

    let charnumber = 0;
    array.forEach(element => {
        charnumber += element.length;
    });

    return charnumber;

}

console.log(getChar(getName()));







