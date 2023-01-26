import PromptSync from "prompt-sync";
import randomInteger from 'random-int'; 
let Prompt = PromptSync();

//Rock Paper Scissor Game

//Create an array that contains the variables Rock, Paper, and Scissors.
let optionsTobeSelected =["rock","paper","scissors"];

/*Set up a variable that generates a random number 0-2 for the player and then 
do the same for the computer's selection. The number represents the index 
values in the array of the 3 items.*/

//Computer Selection
let computerSelection =randomInteger(0,2);
computerSelection=optionsTobeSelected[computerSelection];
//console.log(computerSelection);

//User Selection

let userPrompt = "Select 0 for Rock, 1 for Paper and 2 for Scissors";
let outCome = "Ready to play"

let userInput = Prompt(userPrompt);
let userChoice = optionsTobeSelected[userInput]


/*Create a variable to hold a response message to the user. This can show the 
random results for the player and then also the result for the computer of the 
matching item from the array.*/

/*Create a condition to handle the player and computer selections. If both are 
the same, this results in a tie.*/
if (computerSelection == userChoice){
outCome= "It is a tie";
}
else if (computerSelection ==="rock" && userChoice=="paper"){
    outCome= "Player Wins";
}
else if (computerSelection ==="rock" && userChoice=="scissors"){
    outCome= "Player Wins";
}
else if (computerSelection ==="paper" && userChoice=="rock"){
    outCome= "Computer Wins";
}
else if (computerSelection ==="paper" && userChoice=="scissors"){
    outCome= "Player Wins";
}
else if (computerSelection ==="scissors" && userChoice=="rock"){
    outCome= "Player Wins";
}
else if (computerSelection ==="scissors" && userChoice=="paper"){
    outCome= "Computer Wins";
}
console.log(`Computer Selected: ${computerSelection} \n User Selected: ${userChoice}\n Result : ${outCome}`);
