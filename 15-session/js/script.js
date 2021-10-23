const butInc = document.createElement('BUTTON');

const butDec = document.createElement('BUTTON');

const data = document.createElement('p');

butInc.textContent = 'Increment';
butDec.textContent = 'Decrement';

document.body.appendChild(data);
document.body.appendChild(butInc);
document.body.appendChild(butDec);

let value = 0;

butInc.addEventListener('click', () => {

    value += 1;
    console.log('Click');
    data.textContent = value;


});

butDec.addEventListener('click', () => {

    value -= 1;
    console.log('Click');
    data.textContent = value;


});