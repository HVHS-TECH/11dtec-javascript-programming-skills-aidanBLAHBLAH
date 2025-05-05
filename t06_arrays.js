/************************************************************************************************************
 Name of task: Arrays
 Person who rote it: Aidan Shannon                             
 Date written: 29/4/2025                                       
 Purpose: To store multiple data values               
 ***********************************************************************************************************/
 console.log("Running t06_arrays.js");

 //Variables
 let aidanArray =["Aidan 0", "Aidan 1", "Aidan 2", "Aidan 3", "Aidan 4", "Aidan 5", "Aidan 6"];
 let chocolateArray = ["You hate chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!"]
 
 /************************************************************************************************************ 
  Main code 
  ***********************************************************************************************************/
  let choice = prompt("Pick a number 0-6");
 alert("Person "+choice+" is "+aidanArray[choice]);
  let choco = prompt("On a scal 0-3 how much do you like chocolate?");
  alert(chocolateArray[choco]);
  console.log("Person "+choice+" is "+aidanArray[choice]);
  console.log(chocolateArray[choco]);
 
 
 /************************************************************************************************************
  Functions 
  ***********************************************************************************************************/