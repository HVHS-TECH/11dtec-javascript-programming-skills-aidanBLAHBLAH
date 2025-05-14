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
    userabcdefghijlkmnopqrstuvwxyz = prompt("What's your name?")
    alert("Welcome " + userabcdefghijlkmnopqrstuvwxyz);
};
function askuserAge(){
    userAge = prompt("How old are you?");
    alert("Welcome " + userAge);
};
function askMoney(){
   var userMoney = prompt("How much money do you have?")
    if (userMoney < 4){
        alert("Your too broke to buy chocolate");
    };
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