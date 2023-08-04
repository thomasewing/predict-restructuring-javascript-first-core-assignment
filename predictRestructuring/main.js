// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
//Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)

// syntax error, line 3
//WRONG, but not sure why, confused about the use of the comma in destructuring, when i go back to read through the section in the platform it seems as though this should remove the first entry in the array

// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
//Predict the output
// console.log(name);
// console.log(otherName);



//syntax error line 18, strikethrough
//CORRECT but not sure why

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
//Predict the output
// console.log(password);
// console.log(hashedPassword);

//12345
//12345
//WRONG first half CORRECT, second half 'undefined'

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
//Predict the output
// console.log(first == second);
// console.log(first == third);

//syntax error line 46 for '=='
//WRONG, '==' to translate as 'same as', line 42 is index 1('2'), line 43 is index 3('5'), line 44 is index 8('2')

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//value, 1, 2, 1, 8, 3, 3
//5
//1
//5
//WRONG
//WRONG
//CORRECT
//CORRECT






