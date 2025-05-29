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
    }
    if (pocketMoney == 1);{
        alert("you can buy a Mars bar");
    }
    if (pocketMoney == 2){
        alert("You can buy a Moro bar")
    }
    if (pocketMoney == 3){
        alert("You can buy a King Size Country")
    }
    if (pocketMoney == 4){
        alert("You can buy a Dairy Mint Block")
    }
    if (pocketMoney == 5){
        alert("You can buy a Lindt Block")
    }
/************************************************************************************************************
 Functions 
 ***********************************************************************************************************/