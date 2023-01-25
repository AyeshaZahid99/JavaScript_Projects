import PromptSync from "prompt-sync";
let Prompt = PromptSync();

//Rock Paper Scissor Game

//Create an array that contains the variables Rock, Paper, and Scissors.
let optionsToBbeSelected =["rock","paper","scissors"];

/*Set up a variable that generates a random number 0-2 for the player and then 
do the same for the computer's selection. The number represents the index 
values in the array of the 3 items.*/
let computerSelection = Math.floor(Math.random()*3);
let userSelection = Math.floor(Math.random()*3);
/*Create a variable to hold a response message to the user. This can show the 
random results for the player and then also the result for the computer of the 
matching item from the array.*/
let message =`User Selection ${optionsToBbeSelected[userSelection]} vs Computer Selection ${optionsToBbeSelected[computerSelection]} } `;
/*Create a condition to handle the player and computer selections. If both are 
the same, this results in a tie.*/
if (computerSelection == userSelection){
message += "It is a tie";
}

