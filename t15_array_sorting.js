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
let shopMessage = "Welcome to the shop"
/************************************************************************************************************ 
 Main code 
 ***********************************************************************************************************/
      for (i=0;i<chocolateArray.length;i++){
  shopMessage = shopMessage + "\nA "+ chocolateArray[i] +" is "+chocolatePrices[i];
 }

while(trueName){
    userName = prompt("What's your name?")
    if(userName == null || userName == "" || userName == " "||isNaN(false)) {
        alert("Enter a name");
    }if(isNaN){
      userAge = prompt("How old are you?")
    }if(userAge == null || userAge == "" || userAge == " " || isNaN(userAge)){
      alert("Enter a number")
    }if(isNaN){
      alert(shopMessage)
    }
    pocketMoney = prompt("How much pocket money do you have? (In dollars)")
    if(pocketMoney == null || pocketMoney == "" || pocketMoney == " " || isNaN(pocketMoney)) {
        alert("Enter a valid number");
    }if(pocketMoney < 2){
alert("You cannot afford any chocolate")
    }if(pocketMoney == 2){
      alert("You can buy a mars bar")
    }
    if(pocketMoney == 2.50){
      alert("You can buy a Moro bar")
    }if (pocketMoney == 3){
      alert("You can buy a king sized crunchy")
    }if(pocketMoney == 6){
      alert("You can buy a Dairy Milk block")
    }if(pocketMoney >= 7){
      alert("You can buy a Lindt block")
    }}
  

/************************************************************************************************************
 Functions 
 ***********************************************************************************************************/