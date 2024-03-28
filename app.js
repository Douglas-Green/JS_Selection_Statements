console.log('Hello World!\n==========\n');
console.log(
  'Follow the steps in the README.md file to complete the exercises:\n==========\n'
);

const favoriteNumber = Math.floor(Math.random() * 11); // This will generate a random integer between 0 and 10
// console.log(favoriteNumber);

let guess = prompt('Guess a number between 0 and 10');
if (favoriteNumber > parseInt(guess)) {
  console.log('too low');
} else if (favoriteNumber < parseInt(guess)) {
  console.log('too high');
} else {
  console.log('Congrats! You guessed the right number!');
}

let birthMonth = window.prompt('What is your birth month? (January-December)');
switch (birthMonth.toLowerCase()) {
  case 'december':
  case 'january':
  case 'february':
    console.log('You were born in Winter');
    break;
  case 'march':
  case 'april':
  case 'may':
    console.log('You were born in Spring');
    break;
  case 'june':
  case 'july':
  case 'august':
    console.log('You were born in Summer');
    break;
  case 'september':
  case 'october':
  case 'november':
    console.log('You were born in Fall');
    break;
  default:
    console.log('Invalid month');
    break;
}

let typeId = '01';
let colorId = 'PU';
let sizeId = 'L';

let type = '';
let color = '';
let size = '';

switch (typeId) {
  case '01':
    type = 'Tank Top';
    break;
  case '02':
    type = 'T-Shirt';
    break;
  case '03':
    type = 'Long Sleeve';
    break;
  case '04':
    type = 'Sweatshirt';
    break;
  default:
    type = 'other';
}

switch (colorId) {
  case 'BL':
    color = 'Black';
    break;
  case 'BU':
    color = 'Blue';
    break;
  case 'RD':
    color = 'Red';
    break;
  case 'PU':
    color = 'Purple';
    break;
  default:
    color = 'White';
}

switch (sizeId) {
  case 'S':
    size = 'Small';
    break;
  case 'M':
    size = 'Medium';
    break;
  case 'L':
    size = 'Large';
    break;
  case 'XL':
    size = 'Extra Large';
    break;
  default:
    s;
    size = 'One Size Fits All';
}

console.log(`Product: ${size} ${color} ${type}`);
