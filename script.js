function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    let resultText = '';
  
    if (userChoice === computerChoice) {
      resultText = "It's a tie!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      resultText = "You win!";
    } else {
      resultText = "Computer wins!";
    }
  
    document.getElementById('resultText').innerText = `You chose ${userChoice}. Computer chose ${computerChoice}. ${resultText}`;
  }
  