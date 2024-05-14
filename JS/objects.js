//objects are a fundamental data type that allows you to store and organize data using a collection of key-value pairs.

// Objects should be use when elements are of string 

// array should be use when elements are of numbers 


const person = {
    name:"saqib",
    lname:"ahmed",
    age: 24,
    gender:"male"
};

console.log(person.name);

person.name = "sagheer";


// can modify like this 
console.log(person.name);

// basic example with empty object 

const person1 ={};

person1.name = "sadiq";

person1.age = 23;

console.log(person1);


// calculator 

const calculator = {
    add:function(a,b){
        return (a+b);
    },
    sub:function(a,b){
        return (a-b);
    }
};

console.log(calculator.add(3,2));
console.log(calculator.sub(3,2));

// to print full name 

const human = {
    fname : "nyma",
    lname : "jain",
    fullName : function(){
        return(this.fname + " " + this.lname);  // this jaako ek object k function ka jo object ki property hai uska 
                                                // (eg : property yahan pe fullName hai so)
    }
}
console.log(human.fullName());



// Object Constructor

function admi(first,last,age){
    this.first = first;
    this.last = last;
    this.age = age;
}

const admi1 = new admi("saqib","ahmed",23);
const admi2 = new admi("sharif","baig",28);

console.log(admi1);
console.log(admi2);



// the prototype :  is a mechanism that allows objects to inherit properties and methods from other objects

// Creating a prototype for Person objects
function Person(name, age) {
    this.name = name;
    this.age = age;
    
  }
  
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
  // Creating instances of the Person object
  let person1 = new Person("Alice", 25);
  let person2 = new Person("Bob", 30);
  
  person1.greet();  // Output: Hello, my name is Alice and I am 25 years old.
  person2.greet();  // Output: Hello, my name is Bob and I am 30 years old.
  