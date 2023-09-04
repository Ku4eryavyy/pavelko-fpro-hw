
function arithmeticMean(arr) {
    let sum = 0;
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number') {
            sum += arr[i];
            count ++;
        }
    }

    if(count === 0) {
        return 0;
    }
    return sum/count
}

const arr = [4,6,7,'f','g','a',1,9,'gg','h'];
const result = arithmeticMean(arr);

console.log(result);