/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/



let name = prompt('Ingresa tu nombre completo').toLowerCase();
let array = name.split('');
let contador=0;


for(let i=0;i<array.length;i++){
    console.log(array[i]);
    if(array[i]==='a' || array[i]==='e' || array[i]==='i' || array[i]==='o' || array[i]==='u'){
        contador++;
    }
}

console.log(contador);



