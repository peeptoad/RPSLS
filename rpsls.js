const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let  userChoice 
let computerChoice
let result 




possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id 
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult()
} ))



function generateComputerChoice() {  
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) 
    console.log(randomNumber)
     
    if (randomNumber === 1) {
        computerChoice = "Rock"
    }
    
    if (randomNumber === 2) {
        computerChoice = "Paper"
    }
    
    if (randomNumber === 3) {
        computerChoice = "Scissors"
    }

    if (randomNumber === 4) {
        computerChoice = "Lizard"
    }

    if (randomNumber === 5) {
        computerChoice = "Spock"
    }
   computerChoiceDisplay.innerHTML = computerChoice;
    
}

function getResult() {
    if(computerChoice === userChoice) {
        result = 'Jynx! try again'
    }
    if(computerChoice === "Rock" && userChoice === "Paper") {
        result = 'Rock covered! You Win!'
    }
    if(computerChoice === "Rock" && userChoice === "Scissors") {
        result = 'As it always has Rock crushes Scissors. You lose!'
    }
    if(computerChoice === "Rock" && userChoice === "Lizard") {
        result = 'Lizard crushed! You Lose!'
    }
    if(computerChoice === "Rock" && userChoice === "Spock") {
        result = 'Rock vaporized! You Win!'
    }
    if(computerChoice === "Paper" && userChoice === "Scissors") {
        result = 'Its Shear luck. You Win!'
    }
    if(computerChoice === "Paper" && userChoice === "Rock") {
        result = 'Rock covered! You Lose!'
    }
    if(computerChoice === "Paper" && userChoice === "Lizard") {
        result = 'Lizard eats Paper. You Win!'
    }
    if(computerChoice === "Paper" && userChoice === "Spock") {
        result = 'You have been disproven. You Lose!'
    }
    if(computerChoice === "Scissors" && userChoice === "Rock") {
        result = 'As it always has Rock crushes Scissors. You Win!'
    }
    if(computerChoice === "Scissors" && userChoice === "Paper") {
        result = 'Ouch Paper cut! You Lose!'
    }
    if(computerChoice === "Scissors" && userChoice === "Lizard") {
        result = 'Scissors decapitates Lizard! You Lose!'
    }
    if(computerChoice === "Scissors" && userChoice === "Spock") {
        result = 'BAZINGA! You Win!'
    }
    if(computerChoice === "Lizard" && userChoice === "Rock") {
        result = 'lizard crushed! You Win!'
    }
    if(computerChoice === "Lizard" && userChoice === "Paper") {
        result = 'Lizard eats Paper. You Lose!'
    }
    if(computerChoice === "Lizard" && userChoice === "Scissors") {
        result = 'Scissors decapitates Lizard! You Win!'
    }
    if(computerChoice === "Lizard" && userChoice === "Spock") {
        result = 'You have been poisoned! You Lose!'
    }
    if(computerChoice === "Spock" && userChoice === "Rock") {
        result = 'Spock vaporizes Rock! You Lose!'
    }
    if(computerChoice === "Spock" && userChoice === "Paper") {
        result = 'Spock has been disproven! You Win!'
    }
    if(computerChoice === "Spock" && userChoice === "Scissors") {
        result = 'Spock smashes Scissors! You lose!'
    }
    if(computerChoice === "Spock" && userChoice === "Lizard") {
        result = 'Lizard poisons Spock! You Win!'
    }

   resultDisplay.innerHTML = result
   
}