//Метод Math.round

// let number1 = 123.623;
// console.log(Math.round(number1));

// Метод Math.floor

// let number = 123.623;
// console.log(Math.floor(number));

// Метод toFixed

// let number = 123.62374828374;
// console.log(number.toFixed(2)); // toFixed округляет так же значение

// let name = 'adfsasdadaff' ;
// console.log([2]);

//Метод split и join

// let name1 = 'adfsasdadaff' ;
// console.log(name1.split(''));


// let name1 = 'adfsasdadaff' ;
// let arr = name1.split('');
// console.log(arr);
// let newString = arr.join(',');
// console.log(newString);


// let name1 = 'adfsa.sdadaff';
// let arr = name1.split('.');
// console.log(arr);
// let newString = arr.join(',');
// console.log(newString);

//Метод replace 

// let cost = '$1234,365';
// let costWithoutSymbols = cost.replace('$', '').replace(',','.');
// console.log (parseInt(costWithoutSymbols));
// console.log (parseFloat(costWithoutSymbols));

// Метод slice

// let cost = '$1234,365';
// let costWithoutSymbols = cost.slice(1); // Метод похож на replace, только более узконаправленное
// console.log (costWithoutSymbols);


// ДЗ 12
// function generateKey(count, characters) {
//     let key = '';
// // 0 characters.length-1
//     let index = Math.round(Math.random() * 10);
//     console.log(index)

//     key += characters[index];

//     return key;
// }
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i


//Рекурсия ( значит, что фунция умеет вызывать сама себя)

// func()
// function func() { // Бесконечная рекурсия
// func();
// }


// func();
// function func() { // Остановка с помощью return
//     console.log(1);
// return;
// }


console.log(func(5)); // Нахождение факториала числа 
function func(number) {
    if (number === 0) {
        return 1;
    }
    else {
        return number * func(number - 1);
    }
}