let arrLength  = +prompt("Length");

let arr = [];

for (let i = 0; i < arrLength; i++) {
    let numberArr = +prompt("Number");
    arr.push(numberArr);
}

console.log(arr);

arr.sort((a,b) => a-b);
console.log(arr);

arr.splice(1,3);
console.log(arr);

