console.log("JS file is connected to HTML! Woo!")
//this code has been tested and all seems well
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
/*not sure if i need EVERY possibility accounted for, but they are just in case*/

/*
if (cardOne === cardThree){
  message = "Great job! It's a match!";
} else {
  message = "Sorry.  Not a match.  Try again!";  
 } 

if (cardOne === cardFour){
  message = "Great job! It's a match!";
} else {
  message = "Sorry.  Not a match.  Try again!";   
} 

if (cardTwo === cardOne){
  message = "Great job! It's a match!";
} else {
  message = "Sorry.  Not a match.  Try again!";  
}  

if (cardTwo === cardThree){
  message = "Great job! It's a match!";
} else {
  message = "Sorry.  Not a match.  Try again!";  
}  

if (cardTwo === cardFour){
  message = "Great job! It's a match!";
} else {
  message = "Sorry.  Not a match.  Try again!";  
}  

if (cardThree === cardFour){
  message = "Great job! It's a match!";
} else {
  message = "Sorry.  Not a match.  Try again!";  
}
*/

var gameBoard=document.getElementById('game-board');
function createBoard(){
  for(var i=0;i<gameBoard.length;i++){
    var newDiv=document.createElement('div');
    newDiv[i].className='card';
    div.appendChild(newDiv);
  }
}


