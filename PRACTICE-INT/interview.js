const obj = {
    name1: "Saqib",
    name2:"Sanjay"
}

obj.name3 = "kumar"
console.log(obj);

Object.preventExtensions(obj);

obj.name4 = "Mahesh";
console.log(obj);