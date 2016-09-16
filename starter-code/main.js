console.log("JS file is connected to HTML! Woo!")

var cards = ['queen','queen','king','king'];
var cardsInPlay = [];
var board=document.getElementById('game-board');

function createBoard(){
  for(var i=0;i<cards.length;i++){
    var cardElement=document.createElement('div');

    cardElement.className='card';

cardElement.setAttribute('data-card', cards[i]);
cardElement.addEventListener('click', isTwoCards);

board.appendChild(cardElement);
board.appendChild(cardElement);
}
}
//isTwoCards function set up to see if two cards are in play
function isTwoCards(){
 //this stars another loop that will add 'this' 'data-card' on each card
   cardsInPlay.push(this.getAttribute('data-card'));
//this shows the card's image
  console.log(this.getAttribute('data-card'));
  
  if (this.getAttribute('data-card')==='king') {
    this.innerHTML = "<img src = 'king%20.png'>";
  }else{
    this.innerHTML = "<img src =  'queen.png'>";
  }
   //structure of game is initiated: if 2 cards are active, run isMatch function to test
   //empty array cardInPlay will be populated by those cards during game
   if (cardsInPlay.length ===2){
    isMatch(cardsInPlay);
    cardsInPlay = [];
   }
 }

 function isMatch(cards){
if (cards [0]=== cards[1]){
  alert ("Great job! It's a match!");
} else {
  alert ("Sorry.  Not a match.  Try again!");  
 }

if (cards [0]=== cards[2]){
  alert ("Great job! It's a match!");
} else {
  alert ("Sorry.  Not a match.  Try again!");  
 }

if (cards [0]=== cards[3]){
  alert ("Great job! It's a match!");
} else {
  alert ("Sorry.  Not a match.  Try again!");  
 }

if (cards [1]=== cards[2]){
  alert ("Great job! It's a match!");
} else {
  alert ("Sorry.  Not a match.  Try again!");  
 }

if (cards [1]=== cards[3]){
  alert ("Great job! It's a match!");
} else {
  alert ("Sorry.  Not a match.  Try again!");  
 }

if (cards [2]=== cards[3]){
  alert ("Great job! It's a match!");
} else {
  alert ("Sorry.  Not a match.  Try again!");  
 }
}
createBoard();
