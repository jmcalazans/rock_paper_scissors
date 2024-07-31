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

console.log(getComputerChoice())

function getHumanChoice(){
    humanPlay = prompt('Type your play', 'Rock,paper or scissors.')
    return humanPlay.toLowerCase();
}

console.log(getHumanChoice())