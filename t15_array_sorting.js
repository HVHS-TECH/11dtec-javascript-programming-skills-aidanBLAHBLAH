/************************************************************************************************************
 Name of task: Array sorting 
 Person who rote it: Aidan Shannon                             
 Date written: 29/4/2025                                       
 Purpose: Different ways to use arrays               
 ***********************************************************************************************************/
console.log("Running t01_introduction.js");

//Variables
let pocketMoney;
let nooo = true;
let chocolateArray = ["Mars bar", "Moro bar", "King sized crunchy", "Dairy milk block", "Lindt block" ];
let chocolatePrices = ["$2", "$2.50", "$3", "$6", "$7"];
let shopMessage = "Welcome to the shop, you can buy";
/************************************************************************************************************ 
 Main code 
 ***********************************************************************************************************/
for (i=0;i<chocolateArray.length;i++){
  shopMessage = shopMessage + "\nA "+chocolateArray[i]+" is "+chocolatePrices[i];
 }
 alert(shopMessage)
/************************************************************************************************************
 Functions 
 ***********************************************************************************************************/