// Write your JavaScript code here!

window.addEventListener("load", function() {

  require("./scriptHelper.js");
   
  let form = document.querySelector("form");

    form.addEventListener("submit", function(event){
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");

       /* if(pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
            alert("Please input data into all fields.");
        
            event.preventDefault();
           }*/
           
           if (validateInput(pilotNameInput.value) === "Empty" || validateInput(copilotNameInput.value) === "Empty" || validateInput(fuelLevelInput.value) === "Empty" || validateInput(cargoMassInput.value) === "Empty"){
            alert("Please input data into all fields.");
        
            event.preventDefault();
           }
        
    })

 /*   form.addEventListener("submit", function(event){
        if (validate.validateInput(fuelLevelInput.value) === true){
            alert("Not a number. Please input a number.");
        event.preventDefault();}
        }
    )*/

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});