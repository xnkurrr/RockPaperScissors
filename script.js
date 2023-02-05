const computerInput = document.getElementById('comp-choice');
const userInput = document.getElementById('user-choice');
const showResult = document.getElementById('result');
const showCPoints = document.getElementById('compPoints');
const showUPoints = document.getElementById('userPoints');
const possibleChoices = Array.from(document.getElementsByClassName('options'));
let userChoice;
let computerChoice;
let result;
let cPoints = 0;
let uPoints = 0;

possibleChoices.forEach(possibleOption => possibleOption.addEventListener('click', (e) => {
   userChoice = e.target.id;
   userInput.innerHTML = userChoice;
   generateComputerInput();
   getResult();
}));

function generateComputerInput(){
    const randomNum = Math.floor(Math.random() * possibleChoices.length);
    switch (randomNum) {
        case 0:
            computerChoice = 'Rock';
            break;
        case 1:
            computerChoice = 'Paper';
            break;
        case 2:
            computerChoice = 'Scissors';
            break;
        default:
            computerChoice = '';
    }
    computerInput.innerHTML = computerChoice;
}

function getResult(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerIndex = choices.indexOf(computerChoice);
    const userIndex = choices.indexOf(userChoice);
    if (computerIndex === userIndex) {
        result = 'It\'s a Draw!';
    } else if ((computerIndex + 1) % 3 === userIndex) {
        result = 'Bot Wins!';
        cPoints++;
    } else {
        result = 'YOU Win!!';
        uPoints++;
    }
    showResult.innerHTML = result;
    showCPoints.innerHTML = cPoints;
    showUPoints.innerHTML = uPoints;
}
