


// console.log('Hello World');


// == -> to avoid
// console.log(true == 1); // type coversion

// != -> to avoid
// console.log('1' != 1); // type conversion

// === -> strict comparison
// console.log('1' === 1);
// console.log(1 === true);
// console.log(1 === 1);

// !== -> strict comparison
// console.log(1 !== 1);


// > < <= >= -> not strict comparison 
// is indicated 
// to convert the values in number before actually compare them 
// console.log(10 > 100);
// console.log('10dasdas' > 100)
// console.log('abcd' < 'abcc');

// alert(10 < 10);

// && -> AND OPERATOR
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

// || -> OR OPERATOR ->  at least one of them to be true
// true || true -> true
// true || false -> true // one of them is true
// false || true -> true
// false || false -> false

// XOR -> strictly one of them to be true
// true ^ true -> false 
// true ^ false -> true 
// false ^ true -> true
// false ^ false -> false 

// NOTXOR -> strictly both of them to be the same state
// true ~ true -> true
// true ~ false -> false
// false ~ true -> false
// false ~ false -> true


// console.log(1 && 1);
// console.log(1 || 0);


// -> truthy values
// > 0 -> numbers
// != '' -> string
// {} -> empty object -> always true
// [] -> empty array -> always true

// short circuit

// 1 && console.log('hello');  
// step 1: 1 -> is truthy
// step 2: what is after && operator ???
// step 3: Oh, look a console.log, let's execute it
// 0 && console.log('hello');  


// 1 || console.log('dsadsa');
// step 1: 1 -> is truthy
// step 2: I don't care about the second value because the first is true
// step 3: stop at 1
// 0 || console.log('dsadsa');

// control structures

// IF
// if (0 || 0) {
//   console.log('here');
// } else if(1 || 0) {
//   console.log('else');
// } else if(1 || 0) {
//   console.log('else');
// } else {
//   console.log('ceva');
// }

let num = 123;

// if (num > 1000) {

//   // do nothing
// } else {
//   // do this
//   let num2 = 111;
//    if (num === num2) {
//      console.log('they are equal')
//    } else {
//      console.log('they are not');
//    }
// }

// switch 

let color = 'blue';

// switch(color) { // every strict is strict equal and don't forget the break after each case
//   case 'red':  // color === 'red'
//     console.log('IS RED!');
//     break;
//   case 'green': // there was no stop condition/statement
//     console.log('IS GREEN');
//     break;
//   case 'blue':
//     console.log('IS BLUE');
//     break;
// }

// if (color === 'red') {
//   console.log('IS RED!');
// } else if (color === 'green') {
//   console.log('IS GREEN');
// } else {
//   console.log('IS BLUE');
// }


// ARRAY

const shoppingList = ['banaas', 'tissues', 'shampoo', 'beer'];

const none = [];

// console.log(shoppingList);

// // push

// // shoppingList.push('eggs');


// console.log(shoppingList);

// // pop -> removes the last element

// console.log(shoppingList.pop());

// console.log(shoppingList);

// // shift -> removes the first element from the list and returns it

// console.log(shoppingList.shift());

// console.log(shoppingList);

// // unshift -> adds/ insert element to the beggining of array

// shoppingList.unshift('potatos', 'tomatos');

// console.log(shoppingList);

// console.log(shoppingList.length);

// // ACCES ARRAY ELEMENTS
// // they begin from 0 index
// console.log(shoppingList[0]);

// shoppingList[1] = 'eggs';

// console.log(shoppingList);

// shoppingList[2] = 'deo';


// console.log(shoppingList);

// shoppingList.WTFFFFF = 'wtf'; // THIS IS JUST FOR EXAMPLE

// console.log(shoppingList);

/* FOR LOOP */

// for(let i = 0; i < shoppingList.length; i = i + 1) {
//   console.log(shoppingList[i]);
// }

// const newShoppingList = [];

// for(let i = 0; i < shoppingList.length; i = i + 1) {
//   newShoppingList.push(shoppingList[i]);
//   // newShoppingList.push(shoppingList); // pushes the whole list
// }

// console.log(newShoppingList);

// WHILE LOOP

// let count = 0;
// let lastElement;
// while (count < 100) {
//   if (count === 15) {
//     lastElement = shoppingList.pop();
//   }
//   // console.log('INFINITE')
//   count += 2;
// }

// console.log(lastElement);

// for (const element of shoppingList) {
//   console.log(element);
// }

// String
// list of letters(char)

// const firstName = 'John'; // primitive data type

// console.log(firstName === 'Mathias'); // we'll come here after objects to see the difference

// for (const char of firstName) {
//   console.log(char);
// }


// for (let i = 0; i < firstName.length; i = i + 1) {
//   console.log(firstName[i]);
// }

// const lastName = 'Cena'; // '' ""

// const fullName = firstName + ' ' + lastName;

// const fullName = `${firstName}\n${lastName}`; // template string
// '\n' -> enter

// console.log(fullName);

// OBJECTS 

// const person = {
//   firstName: 'Gica',
//   lastName: 'Contra',
//   age: 29,
//   nationality: 'Romanian',
//   adress: {
//     street: 'Lipscani',
//     no: 102,
//   },
//   'abc-abc': 321321,
// }

// console.log(person.firstName);
// console.log(person['firstName']);


// const x = 'abc-abc';
 
// console.log(person[x]); // dynamic key accessing

// person.x -> undefined, because JS will look strictly to find key 'x' in person object

// if(person[x]) {
//   console.log(person[x]);
// }

// const fullName = person.firstName + ' ' + person.lastName;

// console.log(fullName);

// const missingLetters = 'Name';

// const options = [
//   'name',
//   'Name',
//   'lastName',
//   'dsadas',
//   'sdsas',
// ]


// iterate over options and if you find the key in person
// please console.log the value
// key begins with 'first'
// for ({declation keyword} {variableName} of {arrayName})

// declarion keyword -> one of const, let, var
// variable name -> whatever variable name I have
// of -> keyword 
// arrayName -> the name of the array

// const beginsWith = 'first';

// for (const option of options) {
//   if (person[beginsWith + option]) {
//     console.log(person[beginsWith + option]);
//   }
// }


// for(let i = 0; i < options.length; i = i + 1) {
//   // const key = beginsWith + options[i];
//   const key = `${beginsWith}${options[i]}`
//   if (person[key]) {
//     console.log(person[key]);
//     break; // WE EXIT THE ARRAY WHEN WE FIND WHAT ARE INTERESTED WITH
//   }
// }

// special for Cosmin do this with while loop ;)

// const person = {
//   firstName: 'Gica',
//   lastName: 'Contra',
//   age: 29,
//   nationality: 'Romanian',
//   adress: {
//     street: 'Lipscani',
//     no: 102,
//   },
//   'abc-abc': 321321,
// }

// const options = [
//   'name',
//   'Name',
//   'lastName',
//   'dsadas',
//   'sdsas',
// ];

// for (key in person) {
//   console.log(key);
// }

// for ({declation keyword} {variableName} in {objectName})

// Functions

// function addTwo(value) {
//   return value + 2;
// }

// wood -> factory -> table
// input -> function -> output

// const result = addTwo(10);

// console.log(result);

// num ++ / ++ num

// function increaseInputByCount(value, count) {
//   return value + count;
// }

// console.log(increaseInputByCount(10, 24));

// console.log(addTwo(10));

// while
// {
// const addTwo = function(value) {
//   return value + 2;
// }
// }

// arrow functions 
// const addThree = (value) => value + 3;

// equivalent with 
// const addThree = (value) => {
//   return value + 3;
// }

// num = num + 1; -> num += 1 or num++ / ++num

// return num++
// const increaseNumber = (num) => {
//   return num; // a function execution spots at return !!! 
//   num += 1; // this will not be executed
// } 

// return ++num
// const increaseNumber = (num) => {
//     num += 1;
//     return num; // a function execution spots at return !!! 
//   } 
  
// num ++ -> { return num; num += 1; }
// ++ num -> { num += 1; return num; }

// console.log(increaseNumber(10))

// function showMessage() {
//   alert('Hello');
// }

// showMessage();
// // showMessage();
// // showMessage();
// // showMessage();
// // showMessage();
// // showMessage();
// // showMessage();
// // showMessage();

// for (let i = 0; i < 10; i++) {
//   showMessage()
// }

// THIS keyword

// const person = {
//   firstName: 'Gica',
//   lastName: 'Contra',
//   age: 29,
//   nationality: 'Romanian',
//   adress: {
//     street: 'Lipscani',
//     no: 102,
//     showStreet() {
//       return this.street;
//     }
//   },
//   'abc-abc': 321321,
//   isAdult() {
//     const currentAdress = this.adress.showStreet();
//     return currentAdress;
//   },
//   age2: this.age
// }

// person.isAdult();
// person.adress.showStreet()

// if(person.adress) {
//   person.adress.showStreet();
// }

// optional chaining
// person.adress?.showStreet();

// is equivalent with: 
// if(person.adress) {
  // person.adress?.showStreet();
// }

// person.adress && person.adress.showStreet();

// console.log(person.isAdult());

// write a function that 
// iterates over options and if you find the key in person
// and key begins with 'first'
// please return the value and console.log it


// ARRAY methods
// forEach

const arr = [];

const arr2 = [1,2,3,4,5];

const forEachCallback = (value) => {
  arr.push(value)
}

arr2.forEach((value) => {
  arr.push(value)
});

arr2.forEach(forEachCallback);

console.log(arr);

// map

const arr3 = arr2.map((val, i, arr) => {
  console.log(val, i, arr);

  return val * 2;
})

console.log(arr3);
