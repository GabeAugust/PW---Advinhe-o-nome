// Seu JavaScipt vem aqui
var randomNumber = Math.floor(Math.random() * 100) + 1;
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 1;
var resetButton;

function checkGuess() {
  var userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Palpites anteriores: ';
  }

  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Parabéns! Seu número está certo!';
    lastResult.style.color = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lastResult.style.fontSize = '24px';
    lastResult.color = 'red';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Errado!';
    lastResult.style.color = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent='Seu palpite está muito baixo!' ;
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Seu palpite está muito alto!';
    }
  }

  guessCount++;
  guessField.value = '';
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Iniciar novo jogo';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
  resetButton.style.backgroundColor = '#0e0778';
  resetButton.style.color = '#F0E68C';
  resetButton.style.border = 'none';

}

function resetGame() {
  guessCount = 1;
  var resetParas = document.querySelectorAll('.resultParas p');
  for(var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent='';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value='';
  guessField.focus();
  lastResult.style.backgroundColor='white';
  randomNumber=Math.floor(Math.random() * 100) + 1;
}