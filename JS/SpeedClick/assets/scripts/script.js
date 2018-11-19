/*
 * Script
 * Description: This script handles the game
 */

/*******************************************************************************/
/*                                  Variables                                  */
/*******************************************************************************/

var buttons = document.querySelectorAll('.button'); //Buttons
var timeDisplay = document.querySelector('.time'); //Time display 
var intervalId; //IntervalID
var remaningButtons = buttons.length; //Remaning button to click count
var remaningTime = 5; //Remaining time


/*******************************************************************************/
/*                                   Events                                    */
/*******************************************************************************/

//Buttons click event
buttons.forEach(function(element, currentIndex) {
    element.addEventListener('click', function(event) {
        //Set index
        var index = currentIndex;

        //If first button is clicked, start timer
        if(index == 0) {
            startTimer();
        }

        //Disable button
        event.toElement.setAttribute('disabled', 'disabled');

        //Remove one button to click from count and check victory
        removeFromCount();
        
        //If this button is not the last, remove hidden class form next element
        if(index + 1 < buttons.length) {
            buttons[index + 1].classList.remove('hidden');
        }
        
    });
});


/*******************************************************************************/
/*                                 Functions                                   */
/*******************************************************************************/

//Start Timer
function startTimer() {
    //Show remaning time
    timeDisplay.innerText = remaningTime;
    
    //Create interval
    intervalId = setInterval(function() {
        //Decrease remaning time
        remaningTime--;

        //Show remaning time
        timeDisplay.innerText = remaningTime;

        //If remaning time equals 0
        if(remaningTime == 0) {
            //End game
            gameEnd("You loose");
        }

    }, 1000);
}

//Remove from count and check victory
function removeFromCount() {
    //Remove one from buttons to click count
    remaningButtons--;

    //If no button remains to click
    if(remaningButtons == 0) {
        //End game
        gameEnd("You win");
    }
}

//Game end
function gameEnd(message) {
    //Shows message
    alert(message);

    //Clear interval
    clearInterval(intervalId);
}