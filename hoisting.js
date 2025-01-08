function modifyArray(arr) {
  arr.push(4);
}

let myArray = [1, 2, 3];
modifyArray(myArray);
console.log(myArray); // Outputs: [1, 2, 3, 4] (original array modified)
