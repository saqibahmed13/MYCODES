// Write a function stringToNumber that takes a string input and tries to convert it to a number. 
// If the conversion fails, return "Not a number".


function stringToNumber(input) {
    const converted = parseInt(input)
    if (typeof converted === 'number') {
        return converted;
    }
    else {
        return NaN;
    }
}
const results = console.log(stringToNumber('hi'));


// Write a function flipBoolean that takes any input and converts it to its boolean equivalent, 
// then flips it. For example, true becomes false, 0 becomes true, etc.

function flipBoolean(input) {
    return !Boolean(input)
}

console.log(flipBoolean("true"));

// Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", 
// if it's a string, return "I'm a string!"


function whatAmI(input) {
    if(typeof (input) === 'number'){
        return 'number';
    }else if(typeof(input) === 'string'){
        return 'string';
    }else{
        return 'neither i am string nor number';
    }
}

console.log(whatAmI(2));


// Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.

function isItTruthy(input) {
    if (input) {
        return "It's truthy!";
    } else {
        return "It's falsey!";
    }
}

function filterNumbers(arr) {
    let sum  = [];
     for (let i = 0; i<arr.length; i++){
         if(typeof(arr[i]) === 'number'){
             sum.push(arr[i])
         }
     }
     
   return sum;
 }
 
 function reverseArray(arr) {
   return arr.reverse();
 }
 
 function findMax(arr) {
     let sum = arr[0];
     for(let i = 0 ; i<arr.length; i++){
         if(arr[i]>sum)
         sum = arr[i]
     }
   return sum;
 }
 
 function removeDuplicates(arr) {
 //   return [...new Set(arr)]      // removes the duplicates 
 //   or
    return arr.filter((item,index)=>arr.indexOf(item)===index);   // indexOf means it will give the first occurence of the element
 }
 
 function flattenArray(arr) {
      return arr.flat(Infinity);    // flattens all the nested arrays ( [1,2,[3,[4,6]],8] )  
      //Infinity as an argument for the depth means it will keep flattening the array no matter how deep the nested arrays go. Essentially, it will flatten all levels of nesting recursively, no matter how many nested arrays there are.
 }

 function sumOfN(n) {
    return (n*(n+1))/2;
  }
  
  function printMultiplicationTable(n) {
      const result = [];
      for(let i = 1 ; i<=10; i++){
          result.push(`${n} * ${i} = ${n*i}`);
      }
    return result;
  }
  
  function countVowels(str) {
      let counter = 0;
      for(let i=0; i<str.length; i++){
          if(str[i] === "A"|| str[i] ==="E" || str[i] ==="I" ||str[i]=== "O" || str[i]==="U" ||str[i]=== "a"||str[i]==="e"|| str[i]==="i"|| str[i]==="o"|| str[i]==="u")
          counter = counter + 1;
      }
    return counter;
  }


  function squareNumbers(input){
    const double  = input.map((values)=> {
          return values*2
      });
      return double;
  }
  
  const arr = [1,2,3,4,5,6];



const squareNumbers = (arr) => arr.map((value) => value*2) ;

const filterEvenNumbers = (arr) => arr.filter((item)=>(item%2)===0);

const sumPositiveNumbers = (arr) => (arr.filter((item)=>item>0).reduce((sum,item)=>sum+item, 0) );

const getNames = (arr) => arr.map((item)=>item.name);

const findLongestWord = (arr) => arr.reduce((longest,current)=>(current.length>longest.length?current:longest, " "));
 
 


