/*****************************************************************************/
/*                            GUESS THE NUMBER GAME                          */
/*****************************************************************************/

/*********************************** Variables *******************************/

//Generate random number between 0 and 100
var randomNumber = Math.floor(100 * Math.random());

//Remaning lives
var lives = 7;

//Value input
var valueInput = document.querySelector('#valueInput');

//Form
var form = document.querySelector('form');


/************************************ Game  **********************************/


//Submit Event
form.addEventListener('submit', function(event) {
    
    //Prevent page reload
    event.preventDefault();

    //Remove one life point
    lives -= 1;

    //Value check
    if(valueInput.value == randomNumber) {
        displayMessage('Gagné');
    }
    else if(valueInput.value < randomNumber) {
        displayMessage('Le nombre que vous cherchez est plus grand');
    }
    else {
        displayMessage('Le nombre que vous cherchez est plus petit');
    }

    //Life check
    if(lives <= 0) {
        displayMessage('Perdu');
    }

});


//Display message
function displayMessage(message) {
    var element = document.createElement('p');
    element.innerText = message;
    document.body.appendChild(element);
}
