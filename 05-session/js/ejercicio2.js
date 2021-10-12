


const getNumber = function() {

    let num = prompt('Ingresa el numero de usuarios');
    return num
}

const getNames = function(num) {

    let names = [];

    for(i=0 ; i<num ; i++){

        names[i] = prompt(`Ingresa el nombre ${i+1}`);
    }

    return names;
}

const showNames = function(array) {

    console.log(array);
    for(i = 0 ; i < array.length ; i++){
        
        console.log(`Nombre ${i+1}: ${array[i]}`);
    }
}


showNames(getNames(getNumber()));
