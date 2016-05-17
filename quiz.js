//THIS FILE IS FOR POPULATING THE DOM AND CALLING THE loadInventory() function
CarLot.loadInventory(populateDOM); // Method below calls to load inventory from JSON and begin populating the page

function populateDOM(inventory) { // this function builds the innerHTML by looping through the inventory array

  var cardOutput = document.getElementById("card-output");

  var buildTheCarLot = "";

  for (var i = 0; i < inventory.length; i++) {
    buildTheCarLot += `<div id="${inventory[i].id}" class="column col-lg-3 col-md-5 col-sm-5 col-xs-12 cards cardBorder"
                        style="border-color:${inventory[i].color}">
                          <h2>${inventory[i].make} ${inventory[i].model}</h2>
                            <dt>Year</dt><dd>${inventory[i].year}</dd>
                            <dt>Price</dt><dd>${inventory[i].price}</dd>
                            <dt>Color</dt><dd>${inventory[i].color}</dd>
                            <dt>Description</dt><dd class="description">${inventory[i].description}</dd>
                            <dt>Availability</dt><dd class="sold">${inventory[i].purchased}</dd>
                        </div>
                        <div class="column col-lg- col-md-1 col-sm-1"></div>`;
  };
  cardOutput.innerHTML = buildTheCarLot;
  CarLot.activateEvents();
}
