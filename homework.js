//Решил чуть модернизировать
let numOrStr = prompt('input number or string');
let checkVal = parseInt(numOrStr);

switch(true) {
    case numOrStr === null:
        console.log('ви скасували');
        break;
    case numOrStr.trim() === '':
        console.log("Empty string");
        break;
    case !isNaN(checkVal):
        console.log('OK!');
        break;
    case isNaN(checkVal) && typeof numOrStr === "string":
        console.log("number is Ba_NaN")
        break;
    default:
}