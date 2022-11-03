'use strict';
let secretNum = Math.floor(Math.random() * 20)
let score = 19
console.log(secretNum)
document.querySelector(".check").addEventListener('click', function(){
    let highscore = 0
    const guess = Number((document.querySelector('.guess').value))
    if(!guess) {
        document.querySelector(".message").textContent = 'No number'
    } else if (guess === secretNum){
        document.querySelector(".message").textContent = 'You Win'
        document.querySelector(".number").innerHTML = secretNum
        document.querySelector("body").style.backgroundColor = '#60b347'
        if(score > highscore){
            highscore = score
            document.querySelector(".highscore").textContent = highscore + 1
        }
    } else if (guess < secretNum)
    {
    document.querySelector(".message").textContent = 'Higher!'
    } else{
    document.querySelector(".message").textContent = 'Lower!'
    }

    if (guess !== secretNum){
        document.querySelector(".score").textContent = score--
        if (score < 0){
            document.querySelector(".message").textContent = 'You Lose!'
        }

    }

})

//reset
document.querySelector('.again').addEventListener('click', function () {
    score = 19;
    secretNum = Math.floor(Math.random() * 20 +1)
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector("body").style.backgroundColor = '#333'

  });
  