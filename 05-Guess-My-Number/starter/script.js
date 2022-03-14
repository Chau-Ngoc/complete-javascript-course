"use strict";

/*
 console.log(document.querySelector(".message").textContent);

 document.querySelector(".number").textContent = "7";
 document.querySelector(".score").textContent = "10";

 document.querySelector('.guess').value = 19;
 console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector(".check").addEventListener("click",
    function () {
        const guess = Number(document.querySelector(".guess").value);
        console.log(guess, typeof guess);

        // When there is no input
        if (!guess) {
            document.querySelector(".message").textContent = "⛔ No number" +
                " guessed!";

            //    When the player wins
        } else if (guess === secretNumber) {
            document.querySelector(".number").textContent = String(secretNumber);
            document.querySelector(".message").textContent = "🎉 Correct!";
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = "30rem";

            if (score > highscore) {
                highscore = score;
                document.querySelector(".highscore").textContent = `${highscore}`;
            }

            //    When guess is different from secretNumber
        } else if (guess !== secretNumber) {
            if (score > 1) {
                document.querySelector(".message").textContent = guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
                score--;
                document.querySelector(".score").textContent = `${score}`;
            } else {
                document.querySelector(".message").textContent = "💥 You lose!";
                document.querySelector(".score").textContent = "0";
            }
        }
    }
);

document.querySelector(".again").addEventListener("click", function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector(".message").textContent = "Start guessing...";
        document.querySelector(".number").textContent = "?";
        document.querySelector(".guess").value = "";
        document.querySelector(".score").textContent = `${score}`;
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";

    }
);
