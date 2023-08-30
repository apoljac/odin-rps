function getComputerChoice(items){
    return items[Math.floor(Math.random()*items.length)];
}

function getPlayerChoice(){
    let choose = prompt("What do you choose", "Rock, Paper, Scissors");
    return choose.charAt(0).toUpperCase() + choose.slice(1);
}

function play(playerSelection, computerSelection){
    let p_score = 0;
    let c_score = 0;
    
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
}

const element = ["Rock", "Paper", "Scissors"];

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice(element);
console.log(play(playerSelection, computerSelection));