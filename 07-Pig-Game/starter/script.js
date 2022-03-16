"use strict";

// selecting elements
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");
const score0Element = document.querySelector("#score--0");
const score1Element = document.getElementById("score--1");
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");
const diceImgElement = document.querySelector(".dice");
const buttonNew = document.querySelector(".btn--new");
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");

// define variables to keep track of the score and the active player
let scores, currentScore, activePlayer, playing;

function resetCurrentScore() {
    // set the current score of the active player to 0
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = `${currentScore}`;
}

function switchActivePlayer() {
    // switch active player
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle("player--active");
    player1Element.classList.toggle("player--active");
}

function initializeGame() {
    currentScore = 0;
    scores = [0, 0];
    activePlayer = 0;
    playing = true;

    player0Element.classList.remove("player--winner");
    player1Element.classList.remove("player--winner");
    player0Element.classList.add("player--active");
    player1Element.classList.remove("player--active");

    diceImgElement.classList.add("hidden");
    score0Element.textContent = "0";
    score1Element.textContent = "0";
    current0Element.textContent = "0";
    current1Element.textContent = "0";
}

initializeGame();

// roll dice functionality
buttonRoll.addEventListener("click", function () {
    if (playing) {
        // auto-generate a random dice number
        const diceNumber = Math.trunc(Math.random() * 6) + 1;

        // display the corresponding dice
        diceImgElement.src = `dice-${diceNumber}.png`;
        diceImgElement.classList.remove("hidden");

        // check for rolled 1: if true, switch to the other player
        if (diceNumber !== 1) {
            currentScore += diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent = `${currentScore}`;
        } else {
            resetCurrentScore();
            switchActivePlayer();
        }
    }
});

// hold score functionality
buttonHold.addEventListener("click", function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = `${scores[activePlayer]}`;

        if (scores[activePlayer] >= 100) {
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
            diceImgElement.classList.add("hidden");
            playing = false;
        } else {
            resetCurrentScore();
            switchActivePlayer();
        }
    }
});

// reset game functionality
buttonNew.addEventListener("click", initializeGame);