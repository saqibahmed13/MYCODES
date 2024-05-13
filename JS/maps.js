// maps are the higher order functions which operates on arrays 

const numbers = [1,2,3,4,5];

// using normal function 
const doubleNumber = numbers.map(function(num){
    console.log(num * 2);
});
 
// using arrow functions

const doubleNumber2 = numbers.map((num1)=>num1*2);

console.log(doubleNumber2);
