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
//var = currentGuess = null;

// what happens when you press any key- random word is chosen

function randomWord() {
    answer = words[Math.floor(Math.random() * words.length)];
};

randomWord();
// - game begins and blank underscore (1 per character) appears
function guessWord() {
    currentGuess = answer.split("").map(letter => (showLettersGuessed.indexOf(letter) >= 0) ? letter: "_").join(" ");
}
// - add letter string to letters guessed section
document.getElementById("lettersGuessed").innerHTML = showLettersGuessed; 

guessWord(answer);



// - conditional statement when letter key is press

function checkLetter(letter) {

    if (event.keycode >= 65 && event.keycode <= 90) {
        var correctLetter = false;

        for (var i = 0; i < currentGuess; i++) {
            if (answer[i] == letter) {
                correctLetter = true;
            }
        }

        if (correctLetter) {
            for (var i = 0; i < currentGuess; i++) {
                if(answer[i] == letter) {
                    showLettersGuessed[i] = letter;
                }
            }
        }  else {
            showLettersGuessed.push(letter);
            
        }
    }

}


    //      - if letter is found in string, then it is revealed under whats the word?
document.getElementById("currentWord").innerHTML = currentGuess;
//      - if not then number of guesses remaining decreases
document.getElementById("guessRemaining").innerHTML = wrongGuessMax;
//      - and the letter appears under "letters guessed"



// - game ends after 7 wrong guesses




//      - Wins adds 1, and game starts over. repeat from step 1
// - max number of guesses is reached, word is revealed, game starts over