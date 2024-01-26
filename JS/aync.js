// synchronous : where data is printing in sequence order

console.log("first");
console.log("second");
console.log("third");

//aysnchronous : where the data is getting printed randomly by not waiting for other data if its taking time
// in aysnc the data which is taking more time will execute later and the data taking less time will execute 

console.log("printing first");

setTimeout(()=>{
console.log("last printing")
},2000);;

console.log("printing second");

//callback : functions passing as an argumnent

function sum(a,b){
    return a+b;
}


function calculator(a,b,callback){
    let result = callback(a,b);       // in callback return statement is there you need use 
    console.log(result)
}

 calculator(5,6,sum);


