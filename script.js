// Write your JavaScript code here!

window.addEventListener("load", function() {
   
  let form = document.querySelector("form");

    form.addEventListener("submit", function(event){
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        
       let list = document.getElementById("faultyItems");
       let pilot = pilotNameInput.value;
       let copilot = copilotNameInput.value;
       let fuelLevel = fuelLevelInput.value;
       let cargoLevel = cargoMassInput.value;
       formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
       event.preventDefault();
    })

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let pickedPlanet = pickPlanet(listedPlanets);
        let name = pickedPlanet.name;
        let diameter = pickedPlanet.diameter;
        let star = pickedPlanet.star;
        let distance = pickedPlanet.distance;
        let moons = pickedPlanet.moons;
        let imageURL = pickedPlanet.image;

       addDestinationInfo(document, name, diameter, star, distance, moons, imageURL);
   })
   
});