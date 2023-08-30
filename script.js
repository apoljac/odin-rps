function getComputerChoice (items){
    return items[Math.floor(Math.random()*items.length)];
}

const element = ["Rock", "Paper", "Scissors"];
console.log(getComputerChoice(element));