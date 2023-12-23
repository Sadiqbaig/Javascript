let randomNumber = Math.floor(Math.random() * 100) + 1;

//selector:
let submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessField');
let guessSlot = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let startOver = document.querySelector('.resultParas');

let p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

//event:

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        let guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`Please enter a Valid number`)
    } else if (guess < 1) {
        alert(`Please enter a number greater than 1`)
    } else if (guess > 100) {
        alert(`Please enter a number smaller than 100`)
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over and Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You Won, Number is correct`)
        endGame();
    } else if (guess > randomNumber) {
        displayMessage(`Number is too High`)
    } else if (guess < randomNumber) {
        displayMessage(`Number is too Small`)
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id ='newGame'>Start new Game<h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    let newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e) => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}
