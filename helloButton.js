let randomAnswer = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

function submitGuess() {
    var userGuess = document.querySelector(".guesses").value;
    guessCount++;
    console.log(userGuess);
}