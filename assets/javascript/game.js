// save words to guess as variable


var gameWords = [
    "tropical",
    "sunny",
    "vacation",
    "beaches",
    "pineapple",
    "toucan",
    "sloth",
    "equator",
    "storm"
];

// variables that hold the solutions
var chosenWord = "";
var wrongLetters = [];
var lettersInChosenWord = [];
var blanks = 0;
var revealAnswer = [];


// counters
var wins = 0;
var losses = 0;
var guessesRemaining = 7;

// start/reset the game

function gameBegins() {



    // guesses remaining resets
    guessesRemaining = 7;

    //random word is chosen
    chosenWord = gameWords[Math.floor(Math.random() * gameWords.length)];
    // display _ for each letter of random word
    lettersInChosenWord = chosenWord.split("");
    blanks = lettersInChosenWord.length;

    // wrongLetters resets to empty
    wrongLetters = [];
    //Current word resets to show blanks for next word
    revealAnswer = [];

    for (var i = 0; i < blanks; i++) {
        revealAnswer.push("_");
    }


    // print to appropriate HTML

    document.getElementById("guessRemaining").innerHTML = guessesRemaining;
    document.getElementById("currentWord").innerHTML = revealAnswer.join(" ");
    document.getElementById("lettersGuessed").innerHTML = wrongLetters;
}


gameBegins();

// 1. check to see if letter pressed is a letter
function letterCheck(letter) {
    var correctLetter = false;

    guessesRemaining = 7;

    for (var i = 0; i < blanks; i++) {
        if (chosenWord[i] === letter) {
            correctLetter = true;
        }
    }
    if (correctLetter) {
        for (var j = 0; j < blanks; j++) {
            if (chosenWord[j] === letter) {
                revealAnswer[j] = letter;
            }
        }

    }
    else {
        wrongLetters.push(letter);
        guessesRemaining--;
    }

}

// 2. if it is a letter in the chosen word then display it instead of _
// 3. if letter is not in chosen word then display it in guessed letters section
// and decrease guesses remaining and display


// once remaining guesses reaches 0 then

function gameReset() {
console.log("total wins" + wins + "total Losses" + losses + "guesses left" + guessesRemaining);

    document.getElementById("guessRemaining").innerHTML = guessesRemaining;
    document.getElementById("currentWord").innerHTML = revealAnswer.join(" ");
    document.getElementById("lettersGuessed").innerHTML = wrongLetters.join(" ");

    if (lettersInChosenWord.toString() === revealAnswer.toString()) {
        wins++;
        alert("WINNER!!");
        document.getElementById("totalWins").innerHTML = wins;
        gameBegins();
    }
    else if (guessesRemaining === 0) {
        losses++;
        alert("You Lose");
        document.getElementById("totalLosses").innerHTML = losses;
        gameBegins();
    }

}

document.onkeyup = function(event) {

    if (event.keycode >= 65 && event.keycode <= 90) {

        var letterChosen = event.key.toLowerCase();
        letterCheck(letterChosen);
        gameReset();
    }
};


// 1. losses counter adds 1 and displays
//2. game starts over/resets

// or once chosen word is revealed then
//1. wins counter adds 1 and displays
//2. games starts over/resets


// on.click event for when letter is selected and run functions


// BONUS: play tropical music when word is revealed; or different sound if lost
// play waves sound during entire game; play different noise when letter selected is right or wrong