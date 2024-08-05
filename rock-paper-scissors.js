function getComputerChoice(){
    computerPlay = Math.floor(Math.random() * 3);
    if (computerPlay == 0)  { 
       return 'Rock'; 
    } else if (computerPlay == 1){ 
       return 'Paper';
    } else { 
       return'Scissors';
    }
}

function getHumanChoice(){
    while(true){
        input = prompt('Type your play (Rock, Paper or Scissors):');
        humanplay = input.toLowercase()
        if (humanPlay == 'rock'){
            return 'rock';
        } else if (humanPlay == 'paper'){
            return 'paper';
        } else if (humanPlay == 'scissors'){
            return 'scissors';
        } else {
            continue;
        }
    }
}

let humanScore = 0, computerScore = 0

function playRound(humanChoice, computerChoice){

    'Player chooses: ' + humanChoice;
    'Computer chooses: ' + computerChoice;
    
    let roundWinner = null;

    if (humanChoice == computerChoice){
        console.log('Tie!')
    } else if (humanChoice == 'rock' && computerChoice == 'Paper'){
        roundWinner = 'computer';
        console.log('You lose! Paper beats Rock.')
    } else if (humanChoice == 'rock' && computerChoice == 'Scissors'){
        roundWinner = 'human';
        console.log('You win! Rock beats Scissors.')
    } else if (humanChoice == 'paper' && computerChoice == 'Rock'){
        roundWinner = 'human';
        console.log('You win! Paper beats Rock.')
    } else if (humanChoice == 'paper' && computerChoice == 'Scissors'){
        roundWinner = 'computer';
        console.log('You lose! Scissors beats Paper.')
    } else if (humanChoice == 'scissors' && computerChoice == 'Paper'){
        roundWinner = 'human';
        console.log('You win! Scissors beats Rock.')
    } else if (humanChoice == 'scissors' && computerChoice == 'Rock'){
        roundWinner = 'computer';
        console.log('Your lose! Rock beats Scissors.')
    }

    if (roundWinner == 'computer'){
        computerScore = ++computerScore;
    } else if(roundWinner == 'human') {
        humanScore = ++humanScore;
    } 
    console.log('computer: ' + computerScore)
    console.log('human: ' + humanScore)
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
