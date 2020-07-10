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
    // wrongLetters resets to empty
    wrongLetters = [];
    //Current word resets to show blanks for next word
    revealAnswer = [];
    //random word is chosen
    chosenWord = gameWords[Math.floor(Math.random() * gameWords.length)];
    // display _ for each letter of random word
    lettersInChosenWord = chosenWord.split("");
    blanks = lettersInChosenWord.length;

    console.log(chosenWord);

    for (var i = 0; i < blanks; i++) {
        revealAnswer.push("_");
    }

    console.log(revealAnswer);

    // print to appropriate HTML

    document.getElementById("guessRemaining").innerHTML = guessesRemaining;
    document.getElementById("currentWord").innerHTML = revealAnswer.join(" ");
    document.getElementById("lettersGuessed").innerHTML = wrongLetters;
};

// gameBegins();

// on.click event for when letter is selected

// 1. check to see if letter pressed is a letter
function letterCheck(letter) {

}
// 2. if it is a letter in the chosen word then display it instead of _
// 3. if letter is not in chosen word then display it in guessed letters section
        // and decrease guesses remaining and display
// once remaining guesses reaches 0 then
// 1. losses counter adds 1 and displays
//2. game starts over/resets

// or once chosen word is revealed then
//1. wins counter adds 1 and displays
//2. games starts over/resets



// BONUS: play tropical music when word is revealed; or different sound if lost
// play waves sound during entire game; play different noise when letter selected is right or wrong