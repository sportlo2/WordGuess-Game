// save words to guess as variable


var words = [
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

var wins = 0
var answer = "";
var showLettersGuessed = [];
var wrongGuessMax = 7
// what happens when you press any key- random word is chosen

function randomWord() {
    answer = words[Math.floor(Math.random() * words.length)];
};

randomWord();
// - game begins and blank underscore (1 per character) appears
function guessWord() {
    currentGuess = answer.split("").map(letter => (showLettersGuessed.indexOf(letter) >= 0) ? letter: "_").join(" ");
}
guessWord(answer);

// - add letter string to letters guessed section
document.getElementById("lettersGuessed").innerHTML = showLettersGuessed; 

// - conditional statement when letter key is press
//      - if letter is found in string, then it is revealed under whats the word?
document.getElementById("currentWord").innerHTML = currentGuess;
//      - if not then number of guesses remaining decreases
document.getElementById("guessRemaining").innerHTML = wrongGuessMax;
// - game ends after 7 wrong guesses



// - all blank underscores are revealed;
//      - Wins adds 1, and game starts over. repeat from step 1
// - max number of guesses is reached, word is revealed, game starts over