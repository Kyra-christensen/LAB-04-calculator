// IMPORT MODULES under test here:
import { add } from '../calculations.js';

const test = QUnit.test;



// name your test by what it is testing
test('adds num 5 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 5;
    const y = 3;
    const expected = 8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('adds num 4 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 3;
    const expected = 7;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

import { sub } from '../calculations.js';

test('sub num 3 and 2', (expect) => {
    const x = 3;
    const y = 2;
    const expected = 1;
    const actual = sub(x, y);
    expect.equal(actual, expected);
});

import { multi } from '../calculations.js';

test('multi num 3 and 2', (expect) => {
    const x = 3;
    const y = 2;
    const expected = 6;
    const actual = multi(x, y);
    expect.equal(actual, expected);
});

import { divi } from '../calculations.js';

test('divi num 10 and 2', (expect) => {
    const x = 10;
    const y = 2;
    const expected = 5;
    const actual = divi(x, y);
    expect.equal(actual, expected);
});
