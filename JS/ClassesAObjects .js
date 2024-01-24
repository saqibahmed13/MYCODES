// Classes and Objects 

// Objects : A Javascript Object is an entity with properties ( like variables) and behaviour(like function)

// Prototypes : these are the special default objects within the objects ( jab hame object banati tabbich ino default banjate so)
// student.toString (. k baad jo aaya wo prototype)
// we can also make our own prototype

const employee = {
    calTax(){
        console.log("tax is deducted");
    },
    // both are same 
    calTax2 : function(){
        console.log("tax is deducted");
    }
}

// creating our own prototype

const ashiq = {

salary:26000

};

ashiq.__prototype__ = employee;    // prototype has been created 

// in this way we dont have to create functions all the type we can create that as prototype and use it

console.log(ashiq);

// note : if prototype and object has same method then object method will be used 

// Assume ashiq(object) has 20% tax and employee(prototype) has 10% than 20% will be used 