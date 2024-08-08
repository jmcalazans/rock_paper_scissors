
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
        humanPlay = input.toLowerCase();
        if (humanPlay == 'rock'){
            return 'Rock';
        } else if (humanPlay == 'paper'){
            return 'Paper';
        } else if (humanPlay == 'scissors'){
            return 'Scissors';
        } else {
            continue;
        }
    }
}


let humanScore = 0, computerScore = 0

function playRound(humanChoice, computerChoice){
    console.log('Player chooses: ' + humanChoice);
    console.log('Computer chooses: ' + computerChoice);
    
    let roundWinner = null;

    if (humanChoice == computerChoice){
        console.log('Tie!')
    } else if (humanChoice == 'Rock' && computerChoice == 'Paper'){
        roundWinner = 'computer';
        console.log('You lose! Paper beats Rock.')
    } else if (humanChoice == 'Rock' && computerChoice == 'Scissors'){
        roundWinner = 'human';
        console.log('You win! Rock beats Scissors.')
    } else if (humanChoice == 'Paper' && computerChoice == 'Rock'){
        roundWinner = 'human';
        console.log('You win! Paper beats Rock.')
    } else if (humanChoice == 'Paper' && computerChoice == 'Scissors'){
        roundWinner = 'computer';
        console.log('You lose! Scissors beats Paper.')
    } else if (humanChoice == 'Scissors' && computerChoice == 'Paper'){
        roundWinner = 'human';
        console.log('You win! Scissors beats Rock.')
    } else if (humanChoice == 'Scissors' && computerChoice == 'Rock'){
        roundWinner = 'computer';
        console.log('Your lose! Rock beats Scissors.')
    }

    if (roundWinner == 'computer'){
        computerScore = ++computerScore;
    } else if(roundWinner == 'human') {
        humanScore = ++humanScore;
    }
}


function playGame(){

    let i = 0;
    while(i < 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        i++;

        console.log('Round ' + i);
        console.log('You: ' + humanScore);
        console.log('Computer: ' + computerScore);
    }

    if (humanScore > computerScore){
        console.log('Game Over! You Won!');
    } else if (humanScore == computerScore){
        console.log('Tied!')} else {
        console.log('Game Over! You Lost');
    }
    
}

playGame()