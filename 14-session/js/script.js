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



table = document.createElement('table');
tHead = document.createElement('thead');
headRow = document.createElement('tr');

tHead.appendChild(headRow);
table.appendChild(tHead);
document.body.appendChild(table);


// Create table header

headers.forEach((element) => {

    let td = document.createElement('td');
    let text = document.createTextNode(element);
    td.appendChild(text);
    headRow.appendChild(td);
})


// Create table body 


mentorsArray.forEach((element) => {

    let average, add;
    let bodyRow = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.textContent = element.name;
    bodyRow.appendChild(td1);
    table.appendChild(bodyRow);
    let newArray = element.scores;

    average = 0;
    add = 0;
    newArray.forEach((element) => {

        let td2 = document.createElement('td');
        td2.textContent = element.score;
        bodyRow.appendChild(td2);
        add += element.score;
        average = add / newArray.length
    })

    let td3 = document.createElement('td');

    td3.textContent = average;
    bodyRow.appendChild(td3);

    let btn = document.createElement('BUTTON');
    btn.classList.add('btn');
    btn.textContent = 'Remove'
    bodyRow.appendChild(btn);

})