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
var letterChosen = "";


// counters
var wins = 0;
var losses = 0;
var guessesRemaining = 7;

// start/reset the game

var gameBegins = function() {



    // guesses remaining resets
    guessesRemaining = 7;

    //random word is chosen
    chosenWord = gameWords[Math.floor(Math.random() * gameWords.length)];
    console.log(chosenWord);

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


// 1. check to see if letter pressed is a letter
function letterCheck(letter) {
    var correctLetter = false;

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

    } else {
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

    } else if (guessesRemaining === 0) {
        losses++;
        alert("You Lose");
        document.getElementById("totalLosses").innerHTML = losses;
        gameBegins();
    }

}



gameBegins();

document.onkeyup = function(event) {
    // Check if the key pressed is a letter.
    if (event.keyCode >= 60 && event.keyCode <= 90) {
        // Capture pressed key and make it lowercase.
        letterChosen = String.fromCharCode(event.which).toLowerCase(); //String(event.keycode).toLowerCase();
        letterCheck(letterChosen);
        // Pass the guessed letter into our updatePage function to run the game logic.
        gameReset();
        console.log(letterChosen);
    }

};