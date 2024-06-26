//separate file for js code
console.log('Hellow World')

let named = 'Theo';
console.log(name);
//cannot use reserved keywords for variable names

const interestRate = 0.3;
//interestRate = 1; <--this would cause error bc cant reassign const

let aged = 21; //num, all numbers have the same number type
let isApproved = true; //bool
let firstName = undefined;
let lastName = null; //used when we want to clear value of a var

//js has dynamic typing, so type of var is determined at runtime, and it can change

let person = {
    name: 'Theo',
    age: 21
}

//dot notation
person.name = 'Theophilus';

//bracket notation
let selection = 'name';
person[selection] = 'MD';

console.log(person.name);

//arrays
let selectedColors = ['red', 'blue'];
console.log(selectedColors[0]);
selectedColors[2] = 'green';
console.log(selectedColors);
console.log(selectedColors.length);

//functions
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName + '!');
}

greet('Marcus', 'David');

function square(number) {
    return number * number;
}

let nummer = square(2);
console.log(nummer);