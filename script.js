"use strict";

// selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;

// rolling dice functionality
btnRoll.addEventListener("click", function(){
  // Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;//will give numbers 1-6

  // Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //console.log(dice);
  
  // 3. Check for rolled no1: 

  if(dice !== 1){
    //add dice value to total score
    currentScore += dice;
    current0El.textContent = currentScore; // change to affect both players
  }else{
    //if true, switch to next player
    //currentScore = 0;
  }

})
