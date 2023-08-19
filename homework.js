let action = prompt('Choose an action: add, sub, mult, div');

let firstNumber = prompt('Please enter the first number');
let secondNumber = prompt('Please enter the second number');

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

let add = firstNumber + secondNumber;
let sub = firstNumber - secondNumber;
let mult = firstNumber * secondNumber;
let div = firstNumber / secondNumber;

switch(action) {
    case 'add':
        alert(`${firstNumber} + ${secondNumber} = ${add}`);
        console.log(`${firstNumber} + ${secondNumber} = ${add}`);
        break;
    case 'sub':
        alert(`${firstNumber} - ${secondNumber} = ${sub}`);
        console.log(`${firstNumber} - ${secondNumber} = ${sub}`);
        break;
    case 'mult':
        alert(`${firstNumber} * ${secondNumber} = ${mult}`);
        console.log(`${firstNumber} * ${secondNumber} = ${mult}`);
        break;
    case 'div':
        alert(`${firstNumber} / ${secondNumber} = ${div}`);
        console.log(`${firstNumber} / ${secondNumber} = ${div}`);
        break;
    default:
        alert(`You didn't enter a number`);
        console.log(`You didn't enter a number`);
}

