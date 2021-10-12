/* usando mentorsArray, realizar lo siguiente:
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
-Obtener el promedio individual de cada mentor
-Obtener la lista de mentores cuyo promedio sea mayor a 9.5 
-crear un array de strings con la siguiente forma:
    "Mi nombre es {nombre} y mi promedio es de {promedio}"
*/

const mentorsArray = [
    {
        name:"Ivan Diaz",
        scores:[
            {
                signature:"HTML",
                score:10
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"Alan Medina",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Elvira Camarillo",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Alejandra Paez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
      name:"Alejandra Paez",
      scores:[
          {
              signature:"HTML",
              score:8
          },
          {
              signature:"CSS",
              score:10
          },
          {
              signature:"JS",
              score:9
          },
          {
              signature:"ReactJS",
              score:10
          }
      ]
  }
  ];



  // Ejercicio 1

/* const promedioCurso = (mentorsArray, nombreCurso)=>{
    let resultado=0, promedio=0;
    mentorsArray.forEach((item) => {
      item.scores.forEach((materia) => {
        if(materia.signature === nombreCurso){
          resultado += materia.score;
          promedio=(resultado/5)
        }
      })      
    });
    return console.log(`El promedio de ${nombreCurso} es ${promedio}`)
  
  }
  
  promedioCurso(mentorsArray, "HTML"); */
  
  // Ejercicio2
  
 /*  const promedioMentor = (mentorsArray, nombreMentor)=>{
    let resultado=0, promedio=0;
    mentorsArray.forEach((item) => {
      if (item.name===nombreMentor) {
        item.scores.forEach((materia) => {
          resultado += materia.score;
          promedio = resultado/4;     
        })
      }
            
    });
    console.log(`El promedio de ${nombreMentor} es ${promedio}`)
    return nombreMentor, promedio;
  
  }
  
  promedioMentor(mentorsArray, "Alejandra Paez") */
  
  
  // Ejercicio 3
  
  const MejoresCalif = (mentorsArray)=>{
    let resultado = 0, promedio = 0;
    let mejores = [];
    mentorsArray.forEach((item) => {
      resultado=0;   
        item.scores.forEach((materia) => {
          resultado += materia.score;  
          promedio = resultado/4;   
          if(promedio>=9.5) {
            mejores.push(item.name);
          }
        }) 
             
    });
    return console.log(mejores)
  }
  
  MejoresCalif(mentorsArray);
  
  // Resultado sera arreglo con mentores con promedio mayor a 9.5
  // Sacar el promedio :
  // Iterar el arreglo de los mentores
  // Por cada mentor obtener el promedio
  // Evaluar el promedio del mentor si es mayor a 9.5 hacer un push al arreglo
  
  // Ejercicio 4
  
 /*  const Saludo = (mentorsArray)=>{
    let resultado=0, promedio=0;
    let mejores = [];
    mentorsArray.forEach((item) => {
      resultado=0;   
        item.scores.forEach((materia) => {
          resultado += materia.score;  
          promedio =resultado/4;
          }) 
          mejores.push(`Hola, mi nombre es ${item.name} y mi promedio es ${promedio}`)
    });
    return console.log(mejores)
  }
  
  Saludo(mentorsArray);
 */

