/*Example#01
if it is raining then, I will take my umbrella, else I will leave my 
umbrella at home.*/

let rain= true;
if(rain){
console.log("I will be taking my  umbrella, while leaviing.");
}
else
{
    console.log("Leaving umbrella at home.");
}

/*Example#02
If the age is below 18, log to the console that access is 
denied, otherwise log to the console that the person is allowed to come in:*/

import promptSync from "prompt-sync";
const Prompt =promptSync();

let userAge =Number(Prompt("Kindly enter your age"));
/*if(userAge < 18){
    console.log("Access denied");
}
else{
    console.log("You are  allowed to come in.");
}
*/

//Exercise#4.1
/*
//Create a variable with a Boolean value.
let beingAngry =true;
//Output the value of the variable to the console.
console.log(beingAngry);
/*Check whether the variable is true and if so, output a message to the console, 
using the following syntax 
if (beingAngry){
    console.log("Stay away, mood is not good.");
}
else{
    console.log("Mood sounds pleasant go ahead...");
}
*/
/*Add another if statement with an ! in front of the variable to check whether 
the condition is not true, and create a message that will be printed to the 
console in that instance. You should have two if statements, one with an 
! and the other without. You could also use an if and an else statement 
instead—experiment!

Change the variable to the opposite to see how the result changes.*/
/*
if (!beingAngry){
    console.log("Stay away, mood is not good.");
}
else{
    console.log("Mood sounds pleasant go ahead...");
}
*/


//else if statements
/*take this statement, to determine what the ticket price should be. If 
 a person is younger than 3, then access is free, else if a person is older than 3 and 
 younger than 12, then access is 5 dollars, else if a person is older than 12 and younger 
 than 65, then access is 10 dollars, else if a person is 65 or older, then access is 7 
 dollars 


 
 let cost = 0;
 let message;
 if(userAge < 3){
    message="You can have a free access, not payment for tickets is required.";
 }
else if(userAge >3 && userAge < 12){
    message = "You have to pay 5$ for the ticket";
    cost = "5$";
}
else if(userAge >=12 && userAge <= 65){
    message = "You have to pay 10$ for the ticket";
    cost = "10$";
}
else if(userAge >65){
    message = "You have to pay 7$ for the ticket";
    cost = "7$";
}
console.log(`Welcome to the Amusement Park", ${message}, \n total amount = ${cost}`);
*/


//Example 4.2
/*Create a prompt to ask the user's age
2. Convert the response from the prompt to a number
3. Declare a message variable that you will use to hold the console message for the user*/

let myMessage;

/*If the input age is equal to or greater than 21, set the message variable to 
confirm entry to a venue and the ability to purchase alcohol */

if(userAge >= 21){
    myMessage = "Your entry has been confirmed,also you are allowed to purchase alcohol.";
}
/*If the input age is equal to or greater than 19, set the message variable to 
confirm entry to the venue but deny the purchase of alcohol*/
else if(userAge >= 19){
    myMessage = "Your entry has been confirmed & you are NOT  allowed to purchase alcohol.";
}
/*Provide a default else statement to set the message variable to deny entry if 
none are true*/
else{
    myMessage = "Sorry! your entry is not permitted."
}
/*Output the response message variable to the console*/
console.log(myMessage);


//Conditional Ternary Operators
/* Example
If age is lower than 18, then it 
will assign the value denied, else it will assign the value allowed. You can also specify 
an action in a ternary statement, like this:*/

let aage= 17;
let access = aage >=18 ? log("Premission Granted"):console.log("Permission Denied");

//Example#4.3
//Create a Boolean value for an ID variable
let ID_provided =true;
/*Using a ternary operator, create a message variable that will check whether 
their ID is valid and either allow a person into a venue or not
Output the response to the console*/
let ID_Validation = ID_provided ? console.log("ID verified you are permitted to go inside"):console.log("ID not verified you cannot go inside");


//Switch Statements
//Practise Exercise 4.4
/* the JavaScript function Math.random() will return a random number in the range of 0 to less than 1, including 0 
but not 1. You can then scale it to the desired range by multiplying the result and 
using Math.floor() to round it down to the nearest whole number; for example, to 
generate a random number between 0 and 9*/

//let randomNumber =Math.floor(Math.random() * 6);
//console.log(randomNumber);
 //8 ball random answer generator

 /*let randomNumber =Math.floor(Math.random() * 6);*/

 let randomNumber =Math.floor(Math.random() * 6);
/*Create a prompt that can get a string value input from a user that you can 
repeat back in the final output.*/
 let userInput = Prompt("Ask me a question");
 /*Create 6 responses using the switch statement, each assigned to a different 
value from the random number generator.
Create a variable to hold the end response, which should be a sentence 
printed for the user. You can assign different string values for each case, 
assigning new values depending on the results from the random value.
*/
 let answer;
 switch (randomNumber) {
        case 0:
        answer="Hmm seems this question can be answered correctly by James.";
            break;
        case 1:
        answer="You should consult Maria.";
            break;
        case 2:
            answer="Hmm, Nelson is the right choice for this.";
            break;
        case 3:
            answer="Colon, will be there to help you out in this.";
            break;
        case 4:
            answer="Maxwell, will be there to help you out in this.";
            break; 
        case 5:
            answer="Hellen, will be there to help you out in this.";
            break;               
    default:
        answer="Sorry you are asking something in-appropriate";
        break;
 }
/*Output the user's original question, plus the randomly selected case 
response, to the console after the user enters their question.*/
    console.log(`${userInput}  : ${answer}`);

//Combining Cases
//Practise Exercise 4.5

let prize = Number(Prompt("Kindly select a number between 0 to 10"));
let outPutMesage = "My Selection: "
switch(prize){
case 0:
    outPutMesage += " Many Congrats!,you won a VR Headset";
    break;
case 1:
    outPutMesage += " You won a Tissue papers, kindly wipe out your tears";
    break;
case 2:
    outPutMesage += " Hurray...You won an X-Box.";
    break;
case 3:
    outPutMesage += " Hurray...You won an toy-Box.";
    break;
case 4:
    outPutMesage += " Hurray...You won an clay-Box.";
    break;
case 5:
    outPutMesage += " Hurray...You won an hoppers-Box.";
    break;
case 6:
    outPutMesage += " Hurray...You won an ring-Box.";
    break;
case 7:
    outPutMesage += " Hurray...You won an wings-Box.";
    break;
case 8:
    outPutMesage += " Hurray...You won an pink-Box.";
    break;
default:
    outPutMesage += "Number not valid";
}
console.log(outPutMesage);

//Chapter Projects
//Friend Checker Game

let personName = Prompt ("Enter your name(Use Sentence Case)");
let friendRecognition;
let confirmationMessage;
switch(personName){
    case "Ayesha":
    friendRecognition = true;
    confirmationMessage = `Hello ${personName}, my dear friend how are you?`;

    case "Elsa":
    friendRecognition = true;
    confirmationMessage = `Hello ${personName}, my dear friend how are you?`;

    case "Elizabeth":
    friendRecognition = true;
    confirmationMessage = `Hello ${personName}, my dear friend how are you?`;

default:
    confirmationMessage  = "Sorry you are not a friend of mine";

}
console.log(`Is a friend:${friendRecognition} \n`, confirmationMessage);
