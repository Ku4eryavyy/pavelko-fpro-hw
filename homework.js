//Task 1 Вивести на сторінку в один рядок через кому числа від 10 до 20.
// for(let i = 10; i<=20; i++){
//     console.log(i);
// }

//Task 2 Вивести квадрати чисел від 10 до 20.
// for(let i = 10; i<=20; i++){
//     console.log(i*i);
// }

//Task 3 Вивести таблицю множення на 7.
// for(let i = 1; i<=10; i++) {
//     console.log(${i} * 7 = ${i*7});
// }

//Task 4 Знайти суму всіх цілих чисел від 1 до 15
// let sum = 0;
// for(let i = 1; i<=15; i++) {
//   sum +=i;
// }
// console.log(sum);

//Task 5 Знайти добуток усіх цілих чисел від 15 до 35.
// let mult = 1;
// for(let i = 15; i<=35; i++) {
//   mult *=i;
// }
// console.log(mult);

//Task 6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
// let sum = 0;
// for(let i = 1; i<=500; i++) {
//     sum +=i;
// }
// console.log(sum/500);

//Task 7 Вивести суму лише парних чисел в діапазоні від 30 до 80.
// let sum = 0;
// for(let i = 30; i<=80; i++) {
//     if(i % 2 == 0){
//         sum +=i;
//     }
// }
// console.log(sum);

//Task 8 Вивести всі числа в діапазоні від 100 до 200 кратні 3.
// for(let i = 100; i<=200; i++) {
//     if(i % 3 == 0) {
//         console.log(i);
//     }
// }

// Task 9 Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// let number = prompt("Введіть будь яке натуральне число");

// if( number >=1 && number <= 9){
//     for(let i = 1; i <=9; i++) {
//         if(number % i === 0) {
//             console.log(i);
//         }
//     }
// }

// else {
//     console.log("Невірне значення");
// }

// Task 10 Визначити кількість його парних дільників.
// let number = prompt("Введіть будь яке натуральне число");
// let count = 0;

// if( number >=1 && number <= 9){
//     for(let i = 1; i <=9; i++) {
//         if(number % i === 0) {
//           if(i % 2 ==0){
//             count++;
//           }
//         }
//     }
//     console.log(count);
// }

// else {
//     console.log("Невірне значення");
// }


// Task 11 Знайти суму його парних дільників.
// let number = prompt("Введіть будь яке натуральне число");
// let sum = 0;

// if( number >=1 && number <= 9){
//     for(let i = 1; i <=9; i++) {
//         if(number % i === 0) {
//           if(i % 2 ==0){
//             sum +=i;
//           }
//         }
//     }
//     console.log(sum);
// }

// else {
//     console.log("Невірне значення");
// }


// Task 12 Надрукувати повну таблицю множення від 1 до 10.
// for(let i = 1; i<=10; i++){
//     console.log(`Множення на ${i}`);
//     for(let j = 1; j<=10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }