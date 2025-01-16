const states = {
    state1:"karnataka",
    state2:"Telangana",
    state3:"Tamil Nadu",
    state4:"Andra pradesh",
    state5:"Kerala"
}

const cities = {
    city1:"Bengaluru",
    city2:"Hydrabad",
    city3:"Chennai",
    city4:"Amaravati",
    city5:"thiruvanantapuram"
}

for (key in states){
    const stateNames = states[key];
    
    const cityKey = key.replace('states','cities');

    console.log(cityKey)
}