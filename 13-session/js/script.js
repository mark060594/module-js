// Crear tabla con el sigueinte arreglo

const mentorsArray = [{
        name: "Ivan Diaz",
        scores: [{
                signature: "HTML",
                score: 8
            },
            {
                signature: "CSS",
                score: 10
            },
            {
                signature: "JS",
                score: 8
            },
            {
                signature: "ReactJS",
                score: 8
            }
        ]
    },
    {
        name: "Alan Medina",
        scores: [{
                signature: "HTML",
                score: 8
            },
            {
                signature: "CSS",
                score: 7
            },
            {
                signature: "JS",
                score: 10
            },
            {
                signature: "ReactJS",
                score: 10
            }
        ]
    },
    {
        name: "Elvira Camarillo",
        scores: [{
                signature: "HTML",
                score: 9
            },
            {
                signature: "CSS",
                score: 9
            },
            {
                signature: "JS",
                score: 10
            },
            {
                signature: "ReactJS",
                score: 9
            }
        ]
    },
    {
        name: "Alejandra Paez",
        scores: [{
                signature: "HTML",
                score: 10
            },
            {
                signature: "CSS",
                score: 10
            },
            {
                signature: "JS",
                score: 10
            },
            {
                signature: "ReactJS",
                score: 10
            },
        ]
    },
]

const headers = [
    'Mentor',
    'HTML',
    'CSS',
    'JS',
    'REACT',
    'PROMEDIO',
];






// [
//     {
//         name:"Ivan Diaz",
//         html: 90,
//         css:90,
//         js:10,
//         reactJs: 90,
//         promedio: 9.3
//     }
// ]



const getMentors = mentorsArray.map((mentor) => {
    const data = {
        mentor: mentor.name,
    };
    let average = 0
    mentor.scores.forEach((signature) => {
        if (!data[signature.signature]) {
            data[signature.signature] = signature.score;
        }

        average += signature.score / mentor.scores.length;
    });

    data.average = average;
    return data;
});

// Crear el tabla
// -Crear el thead de la tabla
// crear un row 
// Iterar un arreglo que tenga los heads
// crear un th por cada elemento de ese arreglo  


// -Crear Tbody de la tabla

const table = document.createElement('table');
const theadTable = document.createElement('thead');
const tr = document.createElement('tr');

headers.forEach((element) => {
    const th = document.createElement('th');
    const title = document.createTextNode(element);
    th.appendChild(title);
    tr.appendChild(th);
});

theadTable.appendChild(tr);
table.appendChild(theadTable);
// ---------------

const tbody = document.createElement('tbody');
getMentors.forEach((mentor) => {
    const trBody = document.createElement('tr');

    for (element in mentor) {
        const td = document.createElement('td');
        td.textContent = mentor[element];
        trBody.appendChild(td);
    }

    tbody.appendChild(trBody);
});

table.appendChild(tbody);
document.body.appendChild(table);





/* const table = document.createElement("table");
const thead = document.createElement("thead");
const trow = document.createElement("tr");
let fields = ["Mentor", "HTML", "CSS", "JS", "ReactJS", "Promedio"];

const header = fields.forEach((item) => {
    const td = document.createElement("td");
    const text = document.createTextNode(item);
    td.appendChild(text);
    trow.appendChild(td);

})
 */

/* for (let row in mentorsArray) {
    let td = document.createElement('td');
    let tr = document.createElement('tr');
    console.log(mentorsArray[row].name);
    td.appendChild(document.createTextNode(mentorsArray[row].name));
    tr.appendChild(td);
    let newArray = mentorsArray[row].scores
    for (let field in newArray) {
        let td2 = document.createElement('td');
        td2.appendChild(document.createTextNode(newArray[field].score));
        tr.appendChild(td2);
        console.log(newArray[field].score);
    }
    table.appendChild(tr);
}

thead.appendChild(trow);
table.appendChild(thead);
 */


//Promedio 

/* const promedioMentor = (mentorsArray) => {
    let resultado, promedio;

    mentorsArray.forEach((item) => {
        promedio = 0;
        resultado = 0;
        item.scores.forEach((materia) => {
            resultado += materia.score;
            promedio = resultado / 4;

        })

        console.log(promedio);




    });

}

console.log(promedioMentor(mentorsArray));

document.body.appendChild(table);
 */