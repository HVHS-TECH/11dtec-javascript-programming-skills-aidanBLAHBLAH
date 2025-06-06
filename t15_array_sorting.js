/************************************************************************************************************
 Name of task: Array sorting 
 Person who rote it: Aidan Shannon                             
 Date written: 29/4/2025                                       
 Purpose: Different ways to use arrays               
 ***********************************************************************************************************/
console.log("Running t01_introduction.js");

//Variables
let userName;
let pocketMoney;
let userAge;
let truePocket = true;
let trueName = true;
let chocolateArray = ["Mars bar", "Moro bar", "King sized crunchy", "Dairy milk block", "Lindt block" ];
let chocolatePrices = ["$2", "$2.50", "$3", "$6", "$7"];
let shopMessage = "Welcome to the shop, " + userName +  " you can buy";
/************************************************************************************************************ 
 Main code 
 ***********************************************************************************************************/
while (trueName) {
    userName = prompt("What's your name?")
    if(userName == null || userName == "" || userName == " "||isNaN(false)) {
        alert("Enter a name");
    }if(isNaN){
      userAge = prompt("How old are you?")
    }if(userAge == null || userAge == "" || userAge == " " || isNaN(userAge)){
      alert("Enter a number")
    }if(isNaN(false)){
      alert(shopMessage)
    }}


      for (i=0;i<chocolateArray.length;i++){
  shopMessage = shopMessage + "\nA "+chocolateArray[i]+" is "+chocolatePrices[i];
 }
 
    
  

  while (truePocket) {
    pocketMoney = prompt("How much pocket money do you have? (In dollars)")
    if(pocketMoney == null || pocketMoney == "" || pocketMoney == " " || isNaN(pocketMoney)) {
        alert("Enter a valid number");
    }
  }
/************************************************************************************************************
 Functions 
 ***********************************************************************************************************/