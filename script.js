function getComputerChoice(items){
    return items[Math.floor(Math.random()*items.length)];
}

function getPlayerChoice(){
    let choose = prompt("What do you choose", "Rock, Paper, Scissors");
    return choose.charAt(0).toUpperCase() + choose.slice(1);
}

function play(playerSelection, computerSelection){
    if ((playerSelection == "Rock" && computerSelection == "Rock") 
    || (playerSelection == "Paper" && computerSelection == "Paper")
    || (playerSelection == "Scissors" && computerSelection == "Scissors")){
        console.log(`Tie. Both selected |${playerSelection}|.`);
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") 
    || (playerSelection == "Paper" && computerSelection == "Rock")
    || (playerSelection == "Scissors" && computerSelection == "Paper")){
        ++p_score;
        console.log(`You win! You selected |${playerSelection}| and Computer selected |${computerSelection}|.`);
    }
    else if ((playerSelection == "Rock" && computerSelection == "Paper") 
    || (playerSelection == "Paper" && computerSelection == "Scissors")
    || (playerSelection == "Scissors" && computerSelection == "Rock")){
        ++c_score;
        console.log(`You lose! You selected |${playerSelection}| and Computer selected |${computerSelection}|.`);
    }
    else {
        console.log("Something went wrong. Sorry.");
    }

    return [p_score, c_score]
}

function game(p_score, c_score) {
    for (let i = 0; i < 5; i++){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice(element);
        console.log(play(playerSelection, computerSelection));
    }

    console.log(`Result after 5 games: Player = ${p_score} Computer = ${c_score}`);
    if (p_score > c_score){
        console.log("Player won!");
    }
    else if (c_score > p_score){
        console.log("Computer won!");
    }
    else {
        console.log("Tie!");
    }

    console.log("");
    console.log("Thanks for playing.");
}

const element = ["Rock", "Paper", "Scissors"];

let p_score = 0;
let c_score = 0;
game(p_score, c_score);