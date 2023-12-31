// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
       let div = document.getElementById("missionTarget");
       div.innerHTML = `
       <h2>Mission Destination</h2><ol>
        <li>Name: ${name} </li>
        <li>Diameter: ${diameter} </li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance} </li>
        <li>Number of Moons: ${moons} </li>
    </ol><img src="${imageUrl}" /></>`
}



function validateInput(testInput){
    if (testInput === ""){
        return 'Empty';
    } else if (isNaN(Number(testInput))){
        return 'Not a number';
    } else if (!isNaN(Number(testInput))) {
        return 'Is a number';
    }
    
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

let pilotStatus = document.getElementById("pilotStatus");
let copilotStatus = document.getElementById("copilotStatus");
let fuelStatus = document.getElementById("fuelStatus");
let cargoStatus = document.getElementById("cargoStatus");
let launchStatus = document.getElementById("launchStatus");

if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty'){
    alert("Please input data into all fields.");
}

if (validateInput(fuelLevel) === 'Not a number'){
    alert("Please input a number for Fuel Level.");
} else if (validateInput(cargoLevel) === 'Not a number'){
    alert("Please input a number for Cargo Mass.");
} else if (validateInput(pilot) === 'Is a number' || validateInput(copilot) === 'Is a number'){
    alert("Please input letters for the pilot and copilot.");
} else{
    pilotStatus.innerHTML = `Pilot ${pilot} is ready.`;
    copilotStatus.innerHTML = `Pilot ${copilot} is ready.`;
    list.style.visibility = 'hidden';
}

if (Number(fuelLevel) < 10000 && Number(cargoLevel) > 10000){
    list.style.visibility = 'visible';
    launchStatus.style.color = "#C7254E";
    launchStatus.innerHTML = '<span>Shuttle is not ready to launch.</span>';
    fuelStatus.innerHTML = '<span>You have too little fuel to launch! Please raise fuel to above 10000 liters.</span>';
    cargoStatus.innerHTML = '<span>You have too much weight in the cargo hold to launch! Please drop the weight to below 10000 kilograms.</span>';
} else if (Number(fuelLevel) > 10000 && Number(cargoLevel) > 10000){
    list.style.visibility = 'visible';
    launchStatus.style.color = "#C7254E";
    launchStatus.innerHTML = '<span>Shuttle is not ready to launch.</span>';
    fuelStatus.innerHTML = '<span>Fuel level high enough for launch</span>';
    cargoStatus.innerHTML = '<span>You have too much weight in the cargo hold to launch! Please drop weight to below 10000 kilograms.</span>';
} else if (Number(fuelLevel) < 10000 && Number(cargoLevel) < 10000){
    list.style.visibility = 'visible';
    launchStatus.style.color = "#C7254E";
    launchStatus.innerHTML = '<span>Shuttle is not ready to launch.</span>';
    fuelStatus.innerHTML = '<span>You have too little fuel to launch! Please raise fuel level to above 10000 liters.</span>';
    cargoStatus.innerHTML = '<span>Cargo mass low enough for launch<span>';
} else {
    list.style.visibility = 'visible';
    launchStatus.style.color = '#419F6A';
    launchStatus.innerHTML = '<span>Shuttle ready for launch!</span>';
    fuelStatus.innerHTML = '<span>Fuel level high enough for launch</span>';
    cargoStatus.innerHTML = '<span>Cargo mass low enough for launch<span>';
}

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch(`https://handlers.education.launchcode.org/static/planets.json`).then( function(response) {
    return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let planetIndex = Math.floor(Math.random()*planets.length);
    return planets[planetIndex];
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
