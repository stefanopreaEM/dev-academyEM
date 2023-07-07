# JavaScript Practice Problems

Arrays/Strings(easy):
1. Please write a function that takes an array of words and returns the length of the shortest word.
  ```
    const words = ['bananas', 'tomatos', 'apples', 'pears', 'kiwis', 'mangos', 'pineapples'];
    const shortestWordLength = getShortestWordLength(words);

    // implement getShortestWordLength function here

    console.log(shortestWordLength); // 5
  ```


2. Please write a function that takes an array of numbers and returns the largest (without using Math.max()) 
  ```
    const numbers = [2321, 421, 12, 9, 29, 19, 21, 12, 2, 32, 4, 541, 6, 7, 8];

    // implement getLargestNumber function here
    // ... 

    // use the function for the following array:
    console.log(getLargestNumber(numbers)); // 2321

    // use the function for the following arrays as well:
    const numbers2 = [321, 321, 32, 12, 5321, 321, 44];

    console.log(getLargestNumber(numbers2)); // 5321

    const numbers3 = [9, 15, 22, 1, 873, 3215, 54, 987];

    console.log(getLargestNumber(numbers3)); // 3215

  ```


  Hints:
   - You can loop through an array with a simple for loop, and keep track of the largest number you've seen so far in a variable.

3. Please write a function that takes an array of words and a character and returns each word that has that character present in another array.
  ```
    const words = ['bananas', 'tomatos', 'apples', 'pears', 'kiwis', 'mangos', 'pineapples'];
    const wordsWithA = getWordsWithCharacter(words, 'a');

    // implement getWordsWithCharacter function here
    // ...

    console.log(wordsWithA); // ['bananas', 'tomatos, 'apples', 'mangos', 'pineapples']
  ```


  Hints:
   - You can loop through an array with a simple for loop, and check each word to see if it contains the characte by using other for loop.


4. Please write a function that takes an array of words and inserts an asterisk (*) between each letter of each word.
  ```
    const words = ['bananas', 'tomatos', 'apples', 'pears', 'kiwis', 'mangos', 'pineapples'];
    const wordsWithAsterisk = getWordsWithAsterisk(words);

    // implement getWordsWithAsterisk function here
    // ...

    console.log(wordsWithAsterisk); // ['b*a*n*a*n*a*s', 't*o*m*a*t*o*s', 'a*p*p*l*e*s', 'p*e*a*r*s', 'k*i*w*i*s', 'm*a*n*g*o*s', 'p*i*n*e*a*p*p*l*e*s']
  ```
  Hints:
   - You can loop through an array with a simple for loop, and loop through each word to add the asterisk between each letter.


Arrays/Strings(medium) OPTIONAL:
5. Please write a function that takes an array of words and returns the number of vowels in the array.
  ```
    const words = ['bananas', 'tomatos', 'apples', 'pears', 'kiwis', 'mangos', 'pineapples'];
    const numberOfVowels = getNumberOfVowels(words);

    // implement getNumberOfVowels function here
    // ...

    console.log(numberOfVowels); // 18
  ```
  Hints:
   - You can loop through the words array with a simple for loop, and loop through each word to count the vowels.
   - You can check if a letter is a vowel by comparing it to a string of vowels: 'aeiou'.indexOf(letter) > -1 
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

6. Please write a function that takes an array of words and returns the number of palindromes in the array.
  ```
    const words = ['racecar', 'car', 'job', 'level', 'noon', 'madam', 'refer'];

    const numberOfPalindromes = getNumberOfPalindromes(words);

    // implement getNumberOfPalindromes function here
    // ...


    console.log(numberOfPalindromes); // 5
  ```
  Hints:
   - You can loop through the words array with a for...of.. loop, and check each word to see if it's a palindrome.
   - You can check a plaindrom by looping through the word and comparing the first letter to the last letter, the second letter to the second to last letter, and so on. If any of the letters don't match, it's not a palindrome.
   - And also write a helper function for checking if a word is a palindrome.



Objects(easy):

1. Please write a function that takes an object and returns the sum of all the values in the object.
  ```
    const obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5
    };

    const sum = getSumOfValues(obj);

    // implement getSumOfValues function here
    // ...

    console.log(sum); // 15
  ```
  Hints:
   - You can loop through an object with a for in loop, and add each value to a sum variable.


2. Please write a function that takes an object and returns all the keys in an array.
  ```
    const obj = {
      banana: 'yellow',
      tomatoe: 'red',
      apple: 'green',
      pear: 'green',
      kiwi: 'green',
    };

    const keys = getKeys(obj);

    // implement getKeys function here
    // ...

    console.log(keys); // ['banana', 'tomatoe', 'apple', 'pear', 'kiwi'];
  ```
  Hints:
   - You can loop through an object with a for in loop, and add each key to an array.

   
3. Please write a function that takes an object and returns all the values in an array.
  ```
    const obj = {
      banana: 'yellow',
      tomatoe: 'red',
      apple: 'green',
      pear: 'green',
      kiwi: 'green',
    };

    const values = getValues(obj);

    // implement getValues function here
    // ...

    console.log(values); // ['yellow', 'red', 'green', 'green', 'green'];
  ```
  Hints:
   - You can loop through an object with a for in loop, and add each value to an array.


4. Plese write an object with a method that returns the sum of all the values in the object.
  ```
    const obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      sum() {
        // implement sum method here
        // ...
      }
    };

    console.log(obj.sum()); // 15
  ```
  Hints:
   - You can loop through an object with a for..in.. loop, and add each value to a sum variable.
   - You can use the this keyword to refer to the object inside the sum method.

5. Please write a function that takes an object and returns the number of values that are numbers.
  ```
    const obj = {
      a: 1,
      b: 'two',
      c: 3,
      d: 'four',
      e: 5
    };

    const numberOfValuesThatAreNumbers = getNumberOfValuesThatAreNumbers(obj);

    // implement getNumberOfValuesThatAreNumbers function here
    // ...

    console.log(numberOfValuesThatAreNumbers); // 3
  ```
  Hints:
   - You can loop through an object with a for..in.. loop, and check if each value is a number.
   - You can check if a value is a number by using the typeof operator: typeof value === 'number'

6. Given a person object with the properties firstName and lastName, please do the following:
  - Write a method called getFullName that returns the full name of the person.
  - Write a method that checks if the age of the person is greater than 18.
  - Write a method that gets the full adress of the person in a single string.
  - Write a method that changes the street of the person to the given value (in the address object)

  ```
    const person = {
        firstName: 'Gica',
        lastName: 'Popescu',
        age: 30,
        address: { 
          street: 'Barbu Vacarescu 12',
          city: 'Bucharest',
          state: 'Romania',
          zipCode: '12345',
          // implement changeAddressStreet method here
        }
        
        // implement getFullName method here

        // implement isOver18 method here

        // implement getFullAddress method here
    };

    console.log(person.getFullName()); // Gica Popescu

    console.log(person.isOver18()); // true

    console.log(person.getFullAddress()); // Barbu Vacarescu 12 Buchaest Romania, 12345

    person.address.changeAddressStreet('Lipscani 102');

    console.log(person.getFullAddress()); // Lipscani 102 Buchaest Romania, 12345
  ```

  Hints: 
    Look what we did the last time when we used objects. We can use the same approach here.