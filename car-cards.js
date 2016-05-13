//AUGMENTED IIFE FOR CHANGING THE BORDER / BACKGROUND WHEN CAR IS CLICKED
var CarLot = (function(carlot) {
  var cardsInDOM = document.getElementsByClassName("cards"); // cardsInDOM is an array of inventory divs, class given to div that holds car elements
  var textInput = document.getElementById("text-input"); // text input in nav bar
  var cardSelected;


  //Changes the border and background of the card when it is clicked
  carlot.changeBorderAndBackground = function(event, orange) {
    carlot.resetBorderAndBackground();
    cardSelected = event.currentTarget;
    cardSelected.classList.add("orange");
    carlot.setSelectedID(event.currentTarget.id);
  }

  //Once the user clicks the submit button, the function resets to default color
  carlot.resetBorderAndBackground = function() {
    for (var i = 0; i < cardsInDOM.length; i++) {
      cardsInDOM[i].classList.remove("orange");
    }
  }

  return carlot;
}(CarLot || {}));
