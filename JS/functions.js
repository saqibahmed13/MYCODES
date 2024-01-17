// Basic Function 

function add(a,b){
    console.log(a+b);
}
add(3,2);


// function with parameters

function greet(name){
   return ("my name is "+ name)
}

let result = greet("saqib");
console.log(result);

// function as expression 

const multiply = function(a,b){
    return a*b;
}

let answer = multiply(5,5);
console.log(answer);

// Arrow function  : for single expression no need write { } 

subtract =  (a,b) => {
return a-b;
}   

//OR 

// subtract =  (a,b) => a-b; 
    

let subAns = subtract(10,3);
console.log(subAns);



// function with default parameters

function math(base, exponent=2){
    let result = Math.pow(base,exponent);
    return result;
}

let mathAns = math(3);

console.log(mathAns);

