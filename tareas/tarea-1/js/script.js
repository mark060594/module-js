//Divisa Local
const pedirDivisaLocal = () => {

    let divisaLocal, aux;
    
    do {

        aux = 0;

        divisaLocal = parseInt(window.prompt('Selecciona tu moneda local: 1 = pesos mx  2 = dolares 3 = euros 4 = libras'));

        if(divisaLocal != 1 && divisaLocal != 2 && divisaLocal != 3 && divisaLocal != 4) {
            alert('Datos erroneos, vuelve a intentarlo porfavor');
            aux = 1;
        }

    }while(aux > 0)

    return(divisaLocal);
}

//Divisa Extranjera
const pedirDivisaExtranjera = () => {

    let divisaExtranjera, aux;
    
    do {

        aux = 0;

        divisaExtranjera = parseInt(window.prompt('Selecciona la moneda extranjera a la que deseas realizar la conversión: 1 = pesos mx 2 = dolares 3 = euros 4 = libras'));

        if(divisaExtranjera != 1 && divisaExtranjera != 2 && divisaExtranjera != 3 && divisaExtranjera != 4) {
            alert('Datos erroneos, vuelve a intentarlo porfavor');
            aux = 1;
        }

    }while(aux > 0)

    return(divisaExtranjera);

}

//Cantidad
const pedirCantidad = () => {

    let cantidad, aux;
    
    do {

        aux = 0;

        cantidad = parseInt(window.prompt('Ingresa la cantidad que deseas convertir'));

        if(!Number.isInteger(cantidad) || cantidad < 1 ) {
            alert('Datos erroneos, vuelve a intentarlo porfavor');
            aux = 1;
        }

    }while(aux > 0)

    return(cantidad);

}

//Conversión
const convertirDivisas = (local, extranjera, cantidad) => {

    let cantidadConvertida, monedalocal, monedaExtranjera;
    switch(local) {
        case 1: 

            monedalocal = 'mxn';
            switch(extranjera) {
                
                case 1:
                    cantidadConvertida = cantidad * 1; 
                    monedaExtranjera = 'mxn';
                    break;

                case 2:
                    cantidadConvertida = cantidad * 0.049;
                    monedaExtranjera = 'usd';
                    break;
                
                case 3: 
                    cantidadConvertida = cantidad * 0.042;
                    monedaExtranjera = '€';
                    break;

                case 4: 
                    cantidadConvertida = cantidad * 0.036;
                    monedaExtranjera = '£';
                    break;

            }

            break;

            case 2: 

            monedalocal = 'usd';
            switch(extranjera) {
                
                case 1:
                    cantidadConvertida = cantidad * 20.45; 
                    monedaExtranjera = 'mxn';
                    break;

                case 2:
                    cantidadConvertida = cantidad * 1;
                    monedaExtranjera = 'usd';
                    break;
                
                case 3: 
                    cantidadConvertida = cantidad * 0.86;
                    monedaExtranjera = '€';
                    break;

                case 4: 
                    cantidadConvertida = cantidad * 0.74;
                    monedaExtranjera = '£';
                    break;

            }

            break;

            case 3: 

            monedalocal = '€';
            switch(extranjera) {
                
                case 1:
                    cantidadConvertida = cantidad * 23.72; 
                    monedaExtranjera = 'mxn';
                    break;

                case 2:
                    cantidadConvertida = cantidad * 1.16;
                    monedaExtranjera = 'usd';
                    break;
                
                case 3: 
                    cantidadConvertida = cantidad * 1;
                    monedaExtranjera = '€';
                    break;

                case 4: 
                    cantidadConvertida = cantidad * 0.86;
                    monedaExtranjera = '£';
                    break;

            }

            break;

            case 4: 

            monedalocal = '£';
            switch(extranjera) {
                
                case 1:
                    cantidadConvertida = cantidad * 27.69; 
                    monedaExtranjera = 'mxn';
                    break;

                case 2:
                    cantidadConvertida = cantidad * 1.35;
                    monedaExtranjera = 'usd';
                    break;
                
                case 3: 
                    cantidadConvertida = cantidad * 1.17;
                    monedaExtranjera = '€';
                    break;

                case 4: 
                    cantidadConvertida = cantidad * 1;
                    monedaExtranjera = '£';
                    break;

            }

            break;

    }

    return alert(`${cantidad} ${monedalocal} equivalen a ${cantidadConvertida} ${monedaExtranjera} `);


   

}




convertirDivisas(pedirDivisaLocal() , pedirDivisaExtranjera(), pedirCantidad());







