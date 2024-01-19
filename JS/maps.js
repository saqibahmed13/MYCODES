// maps are the higher order functions which operates on arrays 

const numbers = [1,2,3,4,5];

// using normal function 
const doubleNumber = numbers.map(function(num){
    console.log(num * 2);
});
 
// using arrow functions

const doubleNumber2 = numbers.map((num1)=>num1*2);

console.log(doubleNumber2);



const map1 = new Map();             //  creation of a map

map1.set('a',1);                    //  adding values to a map
map1.set('b',2);
map1.set('c',4);

console.log(map1);

console.log(map1.get('a'));         // for output i.e 1

map1.set('a', 13);                 //  changing the value 

console.log(map1.get('a'));        //  for output i.e 13

console.log(map1.size);            // 3 

map1.delete('c');

console.log(map1.size);            // 2



