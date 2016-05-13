// First IIFE
var CarLot = (function(carlot) { // this iife makes the carlot from the json file

  var inventory = [];

  carlot.getInventory = function() {
    return inventory;
  };

  carlot.setAvailableDescription = function (id, sold) {
    inventory[id - 1].purchased = sold;
    populateDOM(inventory);
  }

  carlot.loadInventory = function() {
    var myDataRequest = new XMLHttpRequest();
    myDataRequest.open("GET", "inventory.json"); // What to do, get the JSON file data
    myDataRequest.send();
    myDataRequest.addEventListener("load", function() {
      var data = JSON.parse(this.responseText);
      var cars = data.cars;
      for (var i = 0; i < cars.length; i++) {
        inventory.push(cars[i]);
      }
      populateDOM(inventory); // give populateDOM inventory and invoke it
    }); // end of eventListener for loading JSON
  }; // end of loadInventory
  return carlot;
}(CarLot || {}));
