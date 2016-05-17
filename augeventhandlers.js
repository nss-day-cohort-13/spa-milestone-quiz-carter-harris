//Event Handlers IIFE
// THIS IIFE IS FOR EVENTLISTENERS
var CarLot = (function(carlot) {

  // DOM element variables
  var cardsInDOM = document.getElementsByClassName("cards"); // cardsInDOM is an array of inventory divs, class given to div that holds car elements
  var form = document.getElementById("form");
  var textInput = document.getElementById("text-input"); // text input in nav bar
  var submitButton = document.getElementById("submit-button"); // submit button in nav bar
  var cardContainer = document.getElementById("container");
  var labelPurchased = document.getElementById("purchased");
  var cardDescription;
  var purchased;
  var selectedID = "";

  // When card element is selected,
  // the text input auto populates with the description of the selected car
  function textInputFocusEvent(event) {
    var cardSelected = event.target.parentNode; // parentNode is the div built in js
    if (cardSelected.tagName.toLowerCase() === "div") { //tagName is the html element itself
      cardDescription = cardSelected.querySelector(".description"); // this targets the class="description" by using the querySelector, class added into quiz.js inside the description part
      var soldAsGold = cardSelected.querySelector(".sold");
      labelPurchased.checked = JSON.parse(soldAsGold.innerHTML); // makes the value into a boolean instead of a string, it will always be truthy
      textInput.focus(); // this puts the focus on the input field
      textInput.value = cardDescription.innerHTML; // last, the value typed into the input field is now equal to the text in the cardDescription
    }
  }

  //When the user types in the input field,
  // the selected cars' description matches what is being typed in the input field
  function replaceTextInput() {
    cardDescription.innerHTML = textInput.value;
  }

  // Prevents the the page from reloading if the user presses return, bc it's wrapped in a form
  function defaultEnter(event) {
    event.preventDefault();
  }

  // selectedID holds the id of whichever card it clicked on, function recives that line `13 car-cards.js
  carlot.setSelectedID = function(divID) {
    selectedID = divID;
    console.log("divID", selectedID);
  }


  //activateEvents method adds all DOM element event listeners
  carlot.activateEvents = function() { // took out "inventory" as a argument
    cardContainer.addEventListener("click", textInputFocusEvent); //
    textInput.addEventListener("keyup", replaceTextInput); // line 39
    form.addEventListener("submit", defaultEnter); // line 44

    for (var i = 0; i < cardsInDOM.length; i++) {
      cardsInDOM[i].addEventListener("click", function(){
       CarLot.changeBorderAndBackground(event);
      }); // event listener for both car-cards.js functions
    }; // end of forloop

    submitButton.addEventListener("click", function(event) {
      textInput.value =''; // clears out once you jump cards
      cardDescription=''; // unbinds the card you were currently on so it doesn't begin jumping
      CarLot.resetBorderAndBackground();
      if (labelPurchased.checked) {
        carlot.setAvailableDescription(selectedID, true);
      }
      labelPurchased.checked = false;
    });
  }; // end of activateEvents
  return carlot;
}(CarLot || {}));
