/************************************************************************************************************
 Name of task: Buttons
 Person who wrote it: Aidan Shannon                             
 Date written: 29/4/2025                                       
 Purpose: How to use buttons            
 ***********************************************************************************************************/
console.log("Running t10_activate_via_button.js");

//Variables
let userName;
let userAge;
let userMoney;

function start() {
    userName = askName();
    userAge = askuserAge();
    userMoney = askMoney();
}
function askName() {
    prompt("What is your name?")
}
function askuserAge() {
    prompt("How old are you?")
}
function askMoney() {
    prompt("How much money do you have?")
}
/************************************************************************************************************ 
 Main code 
 ***********************************************************************************************************/
/************************************************************************************************************
 Functions 
 ***********************************************************************************************************/