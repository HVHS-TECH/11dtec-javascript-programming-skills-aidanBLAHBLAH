/************************************************************************************************************
 Name of task: Functions
 Person who rote it: Aidan Shannon                             
 Date written: 29/4/2025                                       
 Purpose: How to use functions              
 ***********************************************************************************************************/
console.log("Running t09_functions.js");

//Variables


/************************************************************************************************************ 
 Main code 
 ***********************************************************************************************************/
function getFavColor(){
    userFavColor = prompt("What is your favourite color?");
    alert ("Your favourite color is " + userFavColor);
};
getFavColor();

function getUserName(){
    userabcdefghijlkmnopqrstuvwxyz = prompt("What's your name?")
    alert("Welcome " + userabcdefghijlkmnopqrstuvwxyz);
};
getUserName();

function askUserAge(){
    userAge = prompt("How old are you?");
    alert("Welcome " + userAge + " year old");
};
askUserAge();

function askUserMoney(){
   var userMoney = prompt("How much money do you have?")
    if (userMoney < 4){
        alert("Your too broke to buy chocolate");
    };
    if (userMoney >= 4){
        alert("You can buy chocolate");
    };
};
askUserMoney();
/************************************************************************************************************
 Functions 
 ***********************************************************************************************************/