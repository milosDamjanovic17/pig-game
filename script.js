"use strict";

// selecting elements

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

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

let scores, currentScore, activePlayer, playing;


const resetInitialValues = function(){

  scores = [0,0]; // accumulative score
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
}
resetInitialValues();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1:0; // if player no0 is active, switch to player no1
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// rolling dice (🎲 Roll dice button) functionality
btnRoll.addEventListener("click", function(){
  // play the game ONLY when playing is true
  if(playing){

    // Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;//will give numbers 1-6

    // Display the dice
    diceEl.classList.remove('hidden');
    // depending on dice value, show appropriate dice png
    diceEl.src = `dice-${dice}.png`;

    //console.log(dice);
    
    // 3. Check for rolled no1: 
    if(dice !== 1){
      //add dice value to total score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
      //switch to next player and reset activePlayers currentScore
      switchPlayer();

    }
  }
});

// hold button functionality (📥 Hold)
 btnHold.addEventListener('click', function(){
  if(playing){
    // add currentScore to the activePlayer score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // if score is >=100 , acitvePlayer wins, if not, switch players
    if(scores[activePlayer] >= 100){
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      diceEl.classList.add('hidden');
      playing = false;
    }else{
    // switch player
      switchPlayer();
    }
  }
});

// new game functionality(🔄 New game)
btnNew.addEventListener('click', resetInitialValues);
