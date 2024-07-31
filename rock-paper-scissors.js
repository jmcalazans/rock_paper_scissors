function getComputerChoice(){
    computerPlay = Math.floor(Math.random() * 3);
    console.log(computerPlay)

    if (computerPlay = 0)  {
       computerPlay = 'Rock';
    } else if (computerPlay = 1){
       computerPlay = 'Paper';
    } else {
       computerPlay = 'Scissors';
    }
    return computerPlay
}

console.log(getComputerChoice())
