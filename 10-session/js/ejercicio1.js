/*
Ejercicio:
*/

/*
- Agrupar los nombres de la bandas, que no esten repetidas
- Agrupar las canciones por banda
- La cancion con más reproducciones
- La cancion con más likes
*/

const songsData = [
    {
        name: "¿Dónde jugarán los niños?",
        band: "Maná",
        releaseYear: "1992",
        statistics: {
            likes: 20000,
            reproductions: 8000
        },
    },
    {
        name: "La muralla verde",
        band: "Enanitos Verdes",
        releaseYear: "1986",
        statistics: {
            likes: 21000,
            reproductions: 19000
        },
    },
    {
        name: "Te Ví En Un Tren",
        band: "Enanitos Verdes",
        releaseYear: "1987",
        statistics: {
            likes: 20000,
            reproductions: 23490
        },
    },
    {
        name: "Mariposa Traicionera",
        band: "Maná",
        releaseYear: "2002",
        statistics: {
            likes: 12000,
            reproductions: 25690
        },
    },
    {
        name: "Rayando el Sol",
        band: "Maná",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 18000
        },
    },
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    },
    {
        name: "No dejes que...",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12345,
            reproductions: 10000
        },
    }
]


//Ejercicio1  

// [
//     'banda1',
//     'banda2',
// ];



/* const noRepeatBand = (songs) => {

     return songs.reduce((acum, current)=> {

        if(!acum.includes(current.band)){
            acum.push(current.band);
        }

        return acum;


    },[]);

} */

/* console.log(noRepeatBand(songsData)); */





//- Agrupar las canciones por banda


/* const songsByGroup = (songsData) => {

    return songsData.reduce( (acum,current) => {
       
        nameBand = current.band;
        
        if(acum[nameBand] == undefined) {
            
            acum[nameBand] = [current.name];
        
        }
        else {
            acum[nameBand].push(current.name);
            
        }
        return acum;

    },{})



} */

/* console.log(songsByGroup(songsData)); */


// La cancion con mas reproducciones

const mostPlaySong = (songsData) => {

    return songsData.reduce((acum, current) => {

        
        if(current.statistics.reproductions > acum) {

            acum = current.statistics.reproductions;
            nameBand = current.band;
            song = current.name;
            
        }

        return acum;
       

    },0)


}

console.log(mostPlaySong(songsData));