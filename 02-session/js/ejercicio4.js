
let cali;

cali = parseInt(window.prompt('Ingresa la calificación entre el 1 y el 100'));

if( cali > 0 && cali < 100){
    
    if( cali > 90) {

        console.log('La nota es A');

    }else if( cali > 80 && cali <= 90)

        console.log('La nota es B');

     else if( cali > 70 && cali <= 80)

        console.log('La nota es C');

    else if( cali > 60 && cali <= 70)

        console.log('La nota es D');

    else console.log('La nota es E');


} else console.log('El numero que ingresaste es incorrecto');


