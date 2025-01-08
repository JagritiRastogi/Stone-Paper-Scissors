let userScore = 0;
let compScore = 0;

const options = document.querySelectorAll(".option");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#com-score");


const genCompOption = () => {
    const choice = ["stone", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return choice[randomIdx];
};

const drawGame = () => {
    msg.innerText = "Game is Draw! Play Again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userOption, compOption) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userOption} beats ${compOption}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${userOption} beats Your ${compOption}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userOption) => {
    console.log("user option = ", userOption);

    //generate computer opinon
    const compOption = genCompOption();
    console.log("computer option = ", compOption);

    if (userOption === compOption) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userOption === "rock") {
            userWin = compOption === "paper" ? false : true;
        }
        else if (userOption === "paper") {
            userWin = compOption === "scissors" ? false : true;
        } else {
            userWin = compOption === "rock" ? false : true;
        }
        showWinner(userWin, userOption, compOption);
    }
};

options.forEach((option) => {
    option.addEventListener("click", () => {
        const userOption = option.getAttribute("id");
        playGame(userOption);
    });
});

