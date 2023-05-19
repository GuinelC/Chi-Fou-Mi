const imgBot = document.getElementById("imgBot"); //
const imgUser = document.getElementById("imgUser"); //
const scores = document.getElementById("scores");
const comment = document.getElementById("comment");
let finish = document.getElementById("finish");

// 3 BUTTONS WEAPON
const btns = document.querySelectorAll(".gameButton button");

// initialize Score
let botScore = 0;
let userScore = 0;

// Search img button selected & start playing round
let userSelection
btns.forEach(btn => btn.addEventListener('click', (e) => {
    userSelection = e.target.id;
    imgUser.innerHTML = `<img src="img/${userSelection}.png">`
    playRandomBot();
}));


// Function random playing BOT & img Bot Selection
function playRandomBot() {
    var botSelection = ""
    //randomNum = Math.floor(Math.random() * 3);
    var randomNum = new Uint8Array(1);
    window.crypto.getRandomValues(randomNum);
    randomNum = randomNum[0] % 3;
    if (randomNum === 0) {
        botSelection = "pierre";
    }
    if (randomNum === 1) {
        botSelection = "feuille";
    }
    if (randomNum === 2) {
        botSelection = "ciseaux";
    };
    // Afficher img -> BOT Selection
    imgBot.innerHTML = `<img src="img/${botSelection}.png">`;


    // Conditions pour déterminer le gagnant
    if (userSelection === botSelection) {
        comment.innerHTML = `Egalité =`;
    } else if (
        (userSelection === "pierre" && botSelection === "ciseaux") ||
        (userSelection === "feuille" && botSelection === "pierre") ||
        (userSelection === "ciseaux" && botSelection === "feuille")) {
        comment.innerHTML = "Gagné !";
        userScore++;
    } else {
        comment.innerText = "Perdu !";
        botScore++;
    };

    // Affichage du score
    scores.innerHTML = ` ${userScore}   -   ${botScore} `;

    // Vérif score and reset
    if (userScore >= 3) {
        finish.innerHTML = `- VICTOIRE - <br> <button class="btnReset" onclick="reset()">New game</button>`;
        document.querySelector(".gameButton").style.display = "none";
        
    } else if (botScore >= 3){
        finish.innerHTML = `- DÉFAITE - <br> <button class="btnReset" onclick="reset()">New game</button>`;
        document.querySelector(".gameButton").style.display = "none";        
    }  
};

// RESET Function
function reset() {
    userScore = 0;
    botScore = 0;
    scores.textContent = "0 - 0";
    comment.textContent = "Allez revanche :D";
    finish.textContent = "";
    imgBot.textContent = "";
    imgUser.textContent = "";
    document.querySelector(".gameButton").style.display = "";
    // document.getElementById("finish").style.display ="none";
}