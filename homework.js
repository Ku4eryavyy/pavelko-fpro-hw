let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
    // Task 1 Знайти суму та кількість позитивних елементів.

// let countPositive = 0;
// let sum = 0;

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i]> 0) {
//         sum += arr[i];
//         countPositive ++;
//     }  
// }

// console.log(sum);
// console.log(countPositive);


    //Task 1(Второй способ)

// let arrAfterReduce = arr.reduce((accumulator, item) => {
//     if(item > 0) {
//         accumulator.sum += item;
//         accumulator.countPositive++;
//     }
//     return accumulator;
// },{ sum: 0, countPositive: 0});

// console.log(arrAfterReduce.sum);
// console.log(arrAfterReduce.countPositive);


    // Task 2 Знайти мінімальний елемент масиву та його порядковий номер.

// let minNumber = 0;

// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] < minNumber){
//         minNumber = arr[i];
//     }
// }
// console.log(minNumber);
// console.log(arr.indexOf(minNumber));


    //Task 3 Знайти максимальний елемент масиву та його порядковий номер.

// let maxNumber = 0;

// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNumber){
//         maxNumber = arr[i];
//     }
// }

// console.log(maxNumber);
// console.log(arr.indexOf(maxNumber));


    // Task 4 Визначити кількість негативних елементів.

// let arrAfterReduce = arr.reduce((accumulator, item) =>{
//     if( item < 0) {
//         accumulator.countNegative++;
//     }
//     return accumulator;

// },{countNegative :0});

// console.log(arrAfterReduce.countNegative);


    //Task 4 ( Второй способ)

// let countNegative = 0;

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] < 0) {
//         countNegative ++;
//     }
// }
// console.log(countNegative);


    // Task 5 Знайти кількість непарних позитивних елементів.

// let count = 0;
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i]> 0 && arr[i] % 2 !== 0) {
//         count ++;
//     }  
// }

// console.log(count);


    //Task 5 ( Второй способ )

// const isOdd = (num) => num % 2 !== 0 && num > 0;

// const odd = arr.filter(isOdd);

// console.log(odd);


    //Task 6 Знайти кількість парних позитивних елементів.

// let count = 0;
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i]> 0 && arr[i] % 2 === 0) {
//         count ++;
//     }  
// }

// console.log(count);


    //Task 6 (Второй способ)

// const isOdd = (num) => num % 2 === 0 && num > 0;

// const odd = arr.filter(isOdd);

// console.log(odd);


    //Task 7 Знайти суму парних позитивних елементів.

// let sum = 0;

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i]> 0 && arr[i] % 2 === 0) {
//         sum += arr[i];
//     }  
// }

// console.log(sum);


    //Task 7 (Второй способ)

// let arrAfterReduce = arr.reduce((accumulator, item) =>{
//     if( item > 0 && item % 2 === 0) {
//         accumulator.sum += item;
//     }
//     return accumulator;

// },{sum :0});

// console.log(arrAfterReduce.sum);


    //Task 8 Знайти суму непарних позитивних елементів.

// let sum = 0;

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i]> 0 && arr[i] % 2 !== 0) {
//         sum += arr[i];
//     }  
// }

// console.log(sum);


    //Task 8 (Второй способ)

// let arrAfterReduce = arr.reduce((accumulator, item) =>{
//     if( item > 0 && item % 2 !== 0) {
//         accumulator.sum += item;
//     }
//     return accumulator;

// },{sum :0});

// console.log(arrAfterReduce.sum);


    //Task 9 Знайти добуток позитивних елементів.

// let mult = 1;

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i]> 0) {
//         mult *= arr[i];
//         console.log(arr[i]);
//     }  
// }

// console.log(mult);


    // Task 10 Знайти найбільший серед елементів масиву, ост альні обнулити.

// let maxNumber = 0;

// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNumber){
//         maxNumber = arr[i];
//     }
// }

// console.log(maxNumber);
// console.log(arr.indexOf(maxNumber));

// let foundedIndex = arr.indexOf(maxNumber);

// for(let i = 0; i < arr.length; i++) {
//     if(i != foundedIndex) {
//         arr[i] = 0;
//     }
// }

// console.log(arr);