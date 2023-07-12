// Write your JavaScript code here!
import { addDestinationInfo, formSubmission, pickPlanet } from "./scriptHelper";

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
       pickPlanet();
        let name = listedPlanets[result].name;
        let diameter = listedPlanets[result].diameter;
        let star = listedPlanets[result].diameter;
        let distance = listedPlanets[result].distance;
        let moons = listedPlanets[result].moons;
        let imageURL = listedPlanets[result].imageURL;

        img.innerHTML = imageURL;
       addDestinationInfo(document, name, diameter, star, distance, moons, imageURL);
   })
   
});