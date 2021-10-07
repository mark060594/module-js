

let input = 'hola craack', output = '';

for(let i = 0 ; i < input.length ; i++) {

    if(i % 2 == 0) {
        
        output += input[i].toUpperCase();   

    }else output += input[i].toLowerCase();

}

console.log(output);