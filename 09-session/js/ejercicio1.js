// -Obtener el promedio individual de cada mentor

// -Obtener la lista de mentores cuyo promedio sea mayor a 9.5 
// -crear un array de strings con la siguiente forma:
//     "Mi nombre es {nombre} y mi promedio es de {promedio}"

const mentorsArray = [
    {
        name:"Ivan Diaz",
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
                score:8
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
                score:10
            },
        ]
    },
  ]
  
  
  
  
 /*  let songsData = [
      {
        name: "Just like Heaven",
        band: "The Cure",
        releaseYear: "1980",
        statistics: {
          likes: 2545109856,
          reproductions: 4324309,
        }
      },
      {
        name: "asdasdasdsad",
        band: "The Cure",
        releaseYear: "1980",
        statistics: {
          likes: 2545109856,
          reproductions: 4324309,
        }
      },
      {
        name: "Nikita",
        band: "Elton John",
        releaseYear: "1980",
        statistics: {
          likes: 9409483256,
          reproductions: 9843293,
        }
      },
      {
        name: "Kashmir",
        band: "Led Zeppelin",
        releaseYear: "1980",
        statistics: {
          likes: 20000,
          reproductions: 8000,
        }
      },
      {
        name: "Smells Like Teen Spirit",
        band: "Nirvana",
        releaseYear: "1989",
        statistics: {
          likes: 25000,
          reproductions: 100000,
        }
      }, {
        name: "So What",
        band: "Metallica",
        releaseYear: "1990",
        statistics: {
          likes: 12000,
          reproductions: 95000,
        }
      }, {
        name: "Nothing Else Matters",
        band: "Metallica",
        releaseYear: "1992",
        statistics: {
          likes: 128000,
          reproductions: 915000,
        }
      }, {
        name: "Daze",
        band: "Poets of the Fall",
        releaseYear: "2018",
        statistics: {
          likes: 3548413,
          reproductions: 87095138,
        }
      }, {
        name: "The Sweet Scape",
        band: "Poets of the fall",
        releaseYear: "2018",
        statistics: {
          likes: 26268856,
          reproductions: 2424568,
        }
      }
    ] */
  
    // -Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
  
  // {
  //     html:34,
  //     css: 34,
  //     js:34,
  // }
  
 /*  const getCoverageBySignature = (mentors) => {
      let html = 0;
      let css = 0;
      let js = 0;
      let reactJs = 0;
  
      mentors.forEach((mentor) => {
          mentor.scores.forEach((score) => {
              switch (score.signature) {
                  case 'HTML':
                      html += score.score / mentors.length;
                      break;
                  case 'CSS':
                      css += score.score / mentors.length
                      break;
                  case 'JS':
                      js += score.score / mentors.length 
                      break;
                  default:
                      reactJs += score.score / mentors.length 
                      break;
              }
          })
      });
      return {
          html,
          css, 
          js,
          reactJs
      };
  }; */
  
  
  
  const getCoverageBySignature2 = (mentors) => {
      let signatures = {};
  
      mentors.forEach((mentor) => {
          mentor.scores.forEach((score) => {
              console.log(signatures[score.signature])
  
              /* if(score.signature in signatures) {
                  signatures[score.signature] += score.score / mentors.length;
              } else {
                  signatures[score.signature] = score.score / mentors.length
              } */
          })
      });
      
  
      /* return {
          html,
          css, 
          js,
          reactJs
      }; */
  };


  getCoverageBySignature2(mentorsArray);

  
   /* console.log(getCoverageBySignature2(mentorsArray)) */
  
  // Obtener el promedio individual de cada mentor
  
/*   const coverageByMentor = (mentorsArray) => {
      const newMentors = [];
      mentorsArray.forEach((mentor) => {
          let coverage = 0;
          mentor.scores.forEach((mentorData ) => {
              coverage += mentorData.score / mentor.scores.length;
          });
          console.log(coverage)
          newMentors.push({ name: mentor.name, coverage})
      });
      return newMentors;
  };
  
  console.log(coverageByMentor(mentorsArray)) */
  
  // -Obtener la lista de mentores cuyo promedio sea mayor a 9.5 
  
 /*  const getFilter = () => {
      const newMentos= [];
      coverageByMentor(mentorsArray).forEach(( mentor ) => {
          if(mentor.coverage > 9.5) {
              newMentos.push(mentor)
          }
      })
  return newMentos;
  }; */
  
 