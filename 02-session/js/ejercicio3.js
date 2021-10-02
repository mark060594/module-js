let nombre, peso , pesoLuna;

nombre = window.prompt('Ingresa tu nombre');
peso = parseInt(window.prompt('Ingresa yu peso en Kg'));

pesoLuna = (peso/9.81) * 1.622;

console.log('Tu peso en la luna es: ',pesoLuna);


