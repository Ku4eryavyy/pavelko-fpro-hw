console.log(pow(10,-2));

function pow(number,degree) {
    if(degree === 0) {
        return 1;
    }
    else if(degree < 0) {
        return 1 / (number * pow(number, -degree -1));
    }
    else {
        return number * pow(number, degree -1);
    }
}
