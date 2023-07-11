// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
        <><h2>Mission Destination</h2><ol>
        <li>Name: </li>
        <li>Diameter: </li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: </li>
        <li>Number of Moons: </li>
    </ol><img src="" /></>}



function validateInput(testInput){
if (testInput = ""){
    return 'Empty';
} else if (!isNaN(Number(testInput))){
    return 'Is a number';
} else {
    return 'Not a number';
}
    
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

let pilotStatus = document.getElementbyId("pilotStatus");
let copilotStatus = document.getElementbyId("copilotStatus");
let fuelStatus = document.getElementbyId("fuelStatus");
let cargoStatus = document.getElementbyId("cargoStatus");
let launchStatus = document.getElementbyId("launchStatus");

if (pilot === 'Empty' || copilot === 'Empty' || fuelLevel === 'Empty' || cargoMass === 'Empty'){
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

if (Number(fuelLevel) < 10000){
    list.style.visibility = 'visible';
    fuelStatus.innerHTML = 'You have too little fuel to launch!';
    launchStatus.innerHTML = '<span style="color:#C7254E">Shuttle is not ready to launch.</span>';
} else if (Number(cargoLevel > 10000)){
    list.style.visibility = 'visible';
    cargoStatus.innerHTML = 'You have too much weight in the cargo hold to launch!';
    launchStatus.innerHTML = '<span style="color:#C7254E">Shuttle is not ready to launch.</span>';
} else {
    list.style.visibility = 'visible';
    launchStatus.innerHTML = '<span style="color:#419F6A">Shuttle ready for launch!</span>';
}

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
