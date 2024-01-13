// 1. For loop

for (let i = 0; i < 5; i++) {
    console.log(i);
  }

//2. For in : it iterates over the properties of the object (key value pair)

const person = {
    name:"Saqib",
    age:"24",
    job:"software engineer"
};

for(const key in person){

    console.log(`${key}: ${person[key]}`);
}

const state = {
    state1: "karnataka",
    state2: "andra",
    state3: "kerala",
    state4: "telangana"
};

const city = {
    city1: "bangalore",
    city2: "mumbai",
    city3: "pune",
    city4: "hydrabad"
};

// Loop through states and print state: city pairs

for(const key in state){
    let stateName = state[key];   // state ka city konsa  
    let cityKey = key.replace('state','city');
    let cityName  = city[cityKey];
    console.log(`${stateName}: ${cityName}`);

    //state[key]: This expression is used to access the value associated with the current key in the state object. 
    //For example, if key is "state1", then state[key] is equivalent to state["state1"], 
    //which retrieves the value "karnataka".
}