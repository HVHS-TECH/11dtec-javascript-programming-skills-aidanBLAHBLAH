/************************************************************************************************************
 Name of task: Buttons
 Person who rote it: Aidan Shannon                             
 Date written: 29/4/2025                                       
 Purpose: How to use buttons            
 ***********************************************************************************************************/
console.log("Running t010_activate_via_button.js");

//Variables
let userName;
let userAge;
let userMoney;

function askName(){
    prompt("What's your name?")
};
function askuserAge(){
    prompt("How old are you?");
};
function askMoney(){
    prompt("How much money do you have?")
}

function start(){
   userName = askName;
   userAge = askuserAge;
   userMoney = askMoney;
    };
    
/************************************************************************************************************ 
 Main code 
 ***********************************************************************************************************/
/************************************************************************************************************
 Functions 
 ***********************************************************************************************************/