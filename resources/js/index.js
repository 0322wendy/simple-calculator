// Function that displays on screen

function display(result) {
    document.getElementById('display').innerHTML = result;
}

display(8008135);

const calculator = document.querySelector('main');
const keys = calculator.querySelector('.container');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {

    }
})

const key = e.target;
const action = key.dataset.action;

if (!action) {
    console.log('number key!');
}

if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
) {
    console.log('operator key!');
}

if (action === 'decimal') {
    console.log('decimal key!');
}

if (action === 'clear') {
    console.log('clear key!');
}

if (action === 'calculate') {
    console.log('equal key!');
}

if (action === 'sqroot') {
    console.log('sq root key!');
}

if (action === 'percent') {
    console.log('percent key!');
}

if (action === 'plusminus') {
    console.log('plusminus key!');
}

