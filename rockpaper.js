function getComputerChoice() {
    var option = ["Rock", "Paper", "Scissors"];
    var randomChoice = Math.floor(Math.random() * option.length);
    return option[randomChoice];
}

