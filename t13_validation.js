/************************************************************************************************************
 Name of task: Validations
 Person who wrote it: Aidan Shannon                             
 Date written: 28/5/2025                                       
 Purpose: How to work validation            
 ***********************************************************************************************************/
console.log("Running t13_validation.js");

//Variables
var pocketMoney = prompt("How much pocket money do you have?");
let nooo = true;

/************************************************************************************************************ 
 Main code 
 ***********************************************************************************************************/
while (nooo) {
    if(pocketMoney == null || pocketMoney == "" || pocketMoney == " " || isNaN(pocketMoney)) {
        alert("Enter a valid number");
    }else (pocketMoney == 1){
        alert("you can buy a chocolate")
    }

/************************************************************************************************************
 Functions 
 ***********************************************************************************************************/