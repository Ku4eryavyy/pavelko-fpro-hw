//Task 1
// function arithmeticMean(arr) {
//     let sum = 0;
//     let count = 0;

//     for(let i = 0; i < arr.length; i++) {
//         if(typeof arr[i] === 'number') {
//             sum += arr[i];
//             count ++;
//         }
//     }

//     if(count === 0) {
//         return 0;
//     }
//     return sum/count
// }

// const arr = [4,6,7,'f','g','a',1,9,'gg','h'];
// const result = arithmeticMean(arr);

// console.log(result);

//Task 2
// function doMath(x, znak, y) {
//     switch (znak) {
//         case '*' :
//             alert(`${x} * ${y} = ${x * y}`);
//             break;
//         case '+':
//             alert(`${x} + ${y} = ${x + y}`);
//             break;
//         case '-':
//             alert(`${x} - ${y} = ${x - y}`);
//             break;
//         case '/':
//             if (y === 0) {
//                 alert("Can't divide by 0");
//             } else {
//                 alert(`${x} / ${y} = ${x / y}`);
//             }
//             break;
//         case '%':
//             if (y === 0) {
//                 alert("Can't divide by 0");
//             } else {
//                 alert(`${x} % ${y} = ${x % y}`);
//             }
//             break;
//         default:
//             alert('Invalid action');
//     }
// }

// let znak = prompt('Choose an action: *, +, -, /, %');

// if (znak === '*' || znak === '+' || znak === '-' || znak === '/' || znak === '%') {
//     let x = +prompt('Please enter the first number');
//     let y = +prompt('Please enter the second number');
    
//     doMath(x, znak, y);
// } else {
//     alert('Invalid action');
// }

//Task 3
function fillingArrayData() {
    const numRows = +prompt("Enter the number of rows for a two-world array:");
    const numCols = +prompt("Enter the number of columns for a two-world array:");

    const array = [];

    for (let i = 0; i < numRows; i++) {
        array[i] = [];

        for (let j = 0; j < numCols; j++) {
            const value = +prompt(`Enter value for element in row ${i}, column ${j}:`);
            array[i][j] = value;
        }
    }

    return array;
}

const userArray = fillingArrayData();
console.log(userArray);

//Task 4

// function removeCharacters(inputString, charactersInput) {
//     charactersInput.forEach(character => {
//       inputString = inputString.split(character).join('');
//     });
//     return inputString;
//   }
  
//   let inputString = prompt("Enter the string:");
//   let charactersInput = prompt("Enter characters to delete (no spaces)").split('');
//   let result = removeCharacters(inputString, charactersInput);
//   console.log("Result: " + result);
  
  
