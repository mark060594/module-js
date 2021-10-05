/*
Ejercicio 1:
    Solicitar al usuario su nombre y sus apellidos
    regresar en una sola cadena donde el nombre sea minusculas y los apellidos sean mayusculas
    input nombre = "Ivan"
    input Apellido = "Diaz"
    Output: "ivan DIAZ"
*/


const getName = () => {

    let nameGetted = prompt('Ingresa tu nombre completo');
    let lastNameGetted = prompt('Ingresa tu apellido');
    return [nameGetted,lastNameGetted];
}


const converterName = (name, lastName) => {

    let newName = name.toLocaleLowerCase();
    let newLastName = lastName.toUpperCase();

    return `${newName} ${newLastName}`;
}

console.log(converterName(getName()[0],getName[1]));














