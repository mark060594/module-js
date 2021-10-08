


function createKoder () {
    const cantidad = prompt('Ingresa la cantidad de koders a crear ');
    let koders = [];
    
    for (let index = 1; index <= cantidad; index++) {
        const nombreCompleto = prompt('Ingresa nombre y apellido del koder ');
        const nombreSeparado = nombreCompleto.split(' ');
        const nombre = nombreSeparado[0].charAt(0).toUpperCase();
        const apellido = nombreSeparado[1].charAt(0).toUpperCase();
        let persona =  {

            id: index,
            nombre: nombreSeparado[0],
            apellido: nombreSeparado[1],
            iniciales: `(${nombre}.${apellido}.)`,

        };
        const resultado = `koder ${index}: ${nombreCompleto} (${nombre}.${apellido}.)` 
        
        koders.push(persona);
    };
    console.log(koders);
};


createKoder();