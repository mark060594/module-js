

const getName = function() {

    
     let word = prompt('Ingresa una palabra');
     let array = word.split('').reverse();

     let newWord = '';

     for(i = 0 ; i < array.length ; i++) {
        
        newWord += array[i];
     }
     
    return console.log(newWord);
}

getName();