let firstNumber = prompt('Please enter the first number');
let secondNumber = prompt('Please enter the second number');

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

let add = firstNumber + secondNumber;
let sub = firstNumber - secondNumber;
let mult = firstNumber * secondNumber;
let div = firstNumber / secondNumber;

alert(`Your result: \n
${firstNumber} + ${secondNumber} = ${add} \n 
${firstNumber} - ${secondNumber} = ${sub} \n
${firstNumber} * ${secondNumber} = ${mult} \n 
${firstNumber} / ${secondNumber} = ${div}`);

console.log(`${add}\n ${sub}\n ${mult}\n ${div}`);
