let homeScore = 0;
const homeScoreBoard = document.getElementById("home-score-board");
const homeAddOne = document.getElementById("home-add-one");
const homeAddTwo = document.getElementById("home-add-two");
const homeAddThree = document.getElementById("home-add-three");

let awayScore = 0;
const awayScoreBoard = document.getElementById("away-score-board");
const awayAddOne = document.getElementById("away-add-one");
const awayAddTwo = document.getElementById("away-add-two");
const awayAddThree = document.getElementById("away-add-three");

const resetGame = document.getElementById("reset-game");

const homeTitle = document.getElementById("home");
const awayTitle = document.getElementById("away");

function compareScore() {
    if (homeScore > awayScore) {
        homeTitle.style.color = "#26a96c";
        awayTitle.style.color = "#d00000";
    } else if (homeScore < awayScore) {
        homeTitle.style.color = "#d00000";
        awayTitle.style.color = "#26a96c";
    } else {
        homeTitle.style.color = "#eeeeee";
        awayTitle.style.color = "#eeeeee";
    }
}

function addOne() {
    let buttonId = event.target.id;
    if (buttonId === "home-add-one") {
         homeScore++;
        homeScoreBoard.textContent = homeScore;
        
    }
    else if (buttonId === "away-add-one") {
         awayScore++;
         awayScoreBoard.textContent = awayScore;
    }
    compareScore();
}

function addTwo() {
    let buttonId = event.target.id;
    if (buttonId === "home-add-two") {
         homeScore += 2;
         homeScoreBoard.textContent = homeScore;
    }
    else if (buttonId === "away-add-two") {
         awayScore += 2;
         awayScoreBoard.textContent = awayScore;
    }
    compareScore();
}

function addThree() {
    let buttonId = event.target.id;
    if (buttonId === "home-add-three") {
         homeScore +=3;
         homeScoreBoard.textContent = homeScore;
    }
    else if (buttonId === "away-add-three") {
         awayScore += 3;
         awayScoreBoard.textContent = awayScore;
    }
    compareScore();
}

function newGame() {
    homeScoreBoard.textContent = 0;
    homeScore = 0;
    awayScoreBoard.textContent = 0;
    awayScore = 0;
    compareScore();
}


homeAddOne.addEventListener("click", addOne);
homeAddTwo.addEventListener("click", addTwo);
homeAddThree.addEventListener("click", addThree);

awayAddOne.addEventListener("click", addOne);
awayAddTwo.addEventListener("click", addTwo);
awayAddThree.addEventListener("click", addThree);

resetGame.addEventListener("click", newGame);