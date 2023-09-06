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

// function doMath (x,znak,y) {
//     switch(znak) {
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
//             alert(`${x} / ${y} = ${x / y}`);
//             break;
//         case '%':
//             alert(`${x} % ${y} = ${x % y}`);
//             break;
//     }
// }
// let znak = prompt('Choose an action: *, +, -, /, %');

// let x = +prompt('Please enter the first number');
// let y = +prompt('Please enter the second number');
// doMath(x,znak,y);

function doMath(x, znak, y) {
    switch (znak) {
        case '*' :
            alert(`${x} * ${y} = ${x * y}`);
            break;
        case '+':
            alert(`${x} + ${y} = ${x + y}`);
            break;
        case '-':
            alert(`${x} - ${y} = ${x - y}`);
            break;
        case '/':
            if (y === 0) {
                alert("Division by zero is not allowed.");
            } else {
                alert(`${x} / ${y} = ${x / y}`);
            }
            break;
        case '%':
            if (y === 0) {
                alert("Modulo by zero is not allowed.");
            } else {
                alert(`${x} % ${y} = ${x % y}`);
            }
            break;
        default:
            alert('Invalid action');
    }
}

let znak = prompt('Choose an action: *, +, -, /, %');

if (znak === '*' || znak === '+' || znak === '-' || znak === '/' || znak === '%') {
    let x = +prompt('Please enter the first number');
    let y = +prompt('Please enter the second number');
    
    doMath(x, znak, y);
} else {
    alert('Invalid action');
}

