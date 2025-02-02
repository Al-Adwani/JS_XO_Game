// Premade function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills
  document.getElementById(index).innerHTML = text;
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// Delete this code once you are done testing


/**
 *
 * THE MAIN FUNUCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
let count = 9
function clickButton(index, text) {
  if (count % 2 !== 0) {
    text = "O"
  } else {
    text ="X"
  }
  console.log(`Button number ${index} is clicked`);
  fillButton(index, text);
  count = count - 1
}

// in this function you should check if the player is X or O
function checkPlayer() {
  
}

/**
 *
 * checkWinner should be a function that checks
 * who is winning and returns the winner
 */
// function checkWinner

// function restart game

// premade a function. You can use this function to present an alert to say somene wins
function winningAlert(winner) {
  alert(`Horraaay, ${winner} wins!`);
}

