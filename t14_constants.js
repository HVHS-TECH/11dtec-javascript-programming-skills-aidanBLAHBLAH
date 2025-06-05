/************************************************************************************************************
 Name of task: Constants
 Person who rote it: Aidan Shannon                             
 Date written: 3/6/2025                                       
 Purpose: How to use constants               
 ***********************************************************************************************************/
console.log("Running t14_constants.js");
//Variables
let pocketMoney;
let nooo = true;
const MINMON = 0;
const MAXMON = 5;
/************************************************************************************************************ 
 Main code 
 ***********************************************************************************************************/
 while (nooo) {
    pocketMoney = prompt("How much pocket money do you have? (In dollars)")
    if(pocketMoney == null || pocketMoney == "" || pocketMoney == " " || isNaN(pocketMoney)) {
        alert("Enter a valid number");
    }
    if(pocketMoney == 5){
    alert("You can buy a Lindt block\nOr a dairy Milk block\nOr a king sized Crunchy\nOr 2 Mars bars\nOr 5 Moro bars")
}
    if(pocketMoney == 1){
    alert("You can buy a Moro bar")
}
if(pocketMoney == 2){
    alert("You can buy a Mars bar\nOr 2 Moro bars")
}
if(pocketMoney == 3){
    alert("You can buy a king sized Crunchy\nOr a Mars bar\nOr 3 Moro bars")
}
if(pocketMoney == 4){
    alert("You can buy a dairy Milk block\nOr a king sized Crunchy\nOr 2 Mars bars\nOr 4 Moro bars")
}
if(pocketMoney >= 6){
    alert("You can buy loads of chocolate!")
}
}
/************************************************************************************************************
 Functions 
 ***********************************************************************************************************/
