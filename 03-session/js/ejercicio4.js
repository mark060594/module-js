/*
Ejercicio 4:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/

let phrase = 'Cada estudiante tiene su ritmo, cada estudiante tiene su talento y cada estudiante complementa al estudiante que tiene a su lado';


let newPhrase = phrase.replace(/estudiante/g,'koder');

console.log(newPhrase);
