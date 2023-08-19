let age = prompt('What is your year of birth?');
let city = prompt('What city do you live in?');
let sport = prompt('Your favorite sport?');

const year = 2023;
let deduction = year - age;

if(age === null) {
    alert('It is a pity that you did not want to enter your date of birth');
    console.log('It is a pity that you did not want to enter your date of birth');
}
else {
    alert(`Your age: ${deduction}`);
    console.log(`Your age: ${deduction}`);
}

switch(city) {
    case 'Kyiv':
        alert('You live in the capital of Ukraine');
        console.log('You live in the capital of Ukraine');
        break;
    case 'Washington':
        alert('You live in the capital of America');
        console.log('You live in the capital of America');
        break;
    case 'London':
        alert('You live in the capital of Great Britain');
        console.log('You live in the capital of Great Britain');
        break;
    case null:
        alert('It is a pity that you did not want to enter your city');
        console.log('It is a pity that you did not want to enter your city');
        break;
    default:
        alert(`You live in ${city}`);
        console.log(`You live in ${city}`);
}

switch(sport) {
    case 'box':
        alert(`Cool! Do you want to be like Mike Tyson?`);
        console.log(`Cool! Do you want to be like Mike Tyson?`);
        break;
    case 'football':
        alert('Cool! Do you want to be like Lionel Messi?');
        console.log('Cool! Do you want to be like Lionel Messi?');
        break;
    case 'basketball':
        alert('Cool! Do you want to be like Lebrone James?');
        console.log('Cool! Do you want to be like Lebrone James?');
        break;
    case null:
        alert('It is a pity that you did not want to enter your favorite sport');
        console.log('It is a pity that you did not want to enter your favorite sport');
        break;
    default:
        alert(`Super! Do you want to be a champion in ${sport} ?`);
        console.log(`Super! Do you want to be a champion in ${sport} ?`);
}


