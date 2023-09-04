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


// console.log(func(5)); // Нахождение факториала числа 
// function func(number) {
//     if (number === 0) {
//         return 1;
//     }
//     else {
//         return number * func(number - 1);
//     }
// }


//                       Обьекты( обькты сохраняются в памяти как и массивы)
// Варианты создания обьектов
// let obj = {
//     apple: 3,
//     bananas: 34,
//     qiwi: 45,
// }
// console.log(obj)

// console.log(obj.apple) // ключ по котором достаем определенное значение

// obj.apple = 45; // изменение значения для applell

// Object.freeze(obj);// замороженный обьект(защищенный от изменений) так же фриз блокирует полностью обькет, нельзя ни удалить, ни изменить
// Object.seal(obj);// закрытый обьект(не защищенный от изменений, но защищенный от удаления)


// delete obj.apple; // удаление ключа apple из списка обьктов


// var name = 'Tom';
// function tom () {
//     console.log(this.name + 'Runs');
// }
// tom();

// function funcMult (a,b){
//     console.log(arguments);
// }
// funcMult(1,3);

// const obj = {
//     name: 'Tom',
//     showName: function () {
//         console.log(this.name);
//     }
// }
// obj.showName();

// const obj = {
//     name: 'Tom',
// }

// const obj2 = {
//     name: 'Alex',
// }

// function showContext() {
//     console.log(this);
// }
// showContext.call(obj);
// showContext.call(obj2);

// const person = {
//     name: 'Tom',
//     saySmth: function (word) {
//         console.log(`${word} ${this.name}`);
//     }
// }

// const otherPerson = {
//     name: 'Alex',
// }

// person.saySmth.call(otherPerson,'Hello');
// person.saySmth.bind(otherPerson,'Hello'); // привязывает функцию к обьекту и возвращает уже связку

// const newSaySmth = person.saySmth.bind(otherPerson);

// newSaySmth('Hello');