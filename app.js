// import functions
import { add } from './calculations.js';
import { sub } from './calculations.js';
import { multi } from './calculations.js';
import { divi } from './calculations.js';


// reference needed DOM elements
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

const subNumber1 = document.getElementById('sub-number-1');
const subNumber2 = document.getElementById('sub-number-2');
const subButton = document.getElementById('sub-button');
const subAnswer = document.getElementById('sub-answer');

const multiNumber1 = document.getElementById('multi-number-1');
const multiNumber2 = document.getElementById('multi-number-2');
const multiButton = document.getElementById('multi-button');
const multiAnswer = document.getElementById('multi-answer');

const diviNumber1 = document.getElementById('divi-number-1');
const diviNumber2 = document.getElementById('divi-number-2');
const diviButton = document.getElementById('divi-button');
const diviAnswer = document.getElementById('divi-answer');

// set event listeners 
addButton.addEventListener('click', () => {
    // get user input(s)
    const num1 = +addNumber1.value;
    const num2 = +addNumber2.value;
    // do any needed work with the value(s)
    const sum = add(num1, num2);
    // update DOM to reflect new value(s)
    addAnswer.textContent = sum;
});

subButton.addEventListener('click', () => {
    const num1 = +subNumber1.value;
    const num2 = +subNumber2.value;
    const sum = sub(num1, num2);
    subAnswer.textContent = sum;
});

multiButton.addEventListener('click', () => {
    const num1 = +multiNumber1.value;
    const num2 = +multiNumber2.value;
    const sum = multi(num1, num2);
    multiAnswer.textContent = sum;
});

diviButton.addEventListener('click', () => {
    const num1 = +diviNumber1.value;
    const num2 = +diviNumber2.value;
    const sum = divi(num1, num2);
    diviAnswer.textContent = sum;
});