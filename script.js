const result = document.querySelector('.result')
const HChoice = document.querySelector('.human')
const AIChoice = document.querySelector('.AI')
const myScore = document.querySelector('#human-score')
const AIScore = document.querySelector('#AI-score')

let humanScoreNumber = 0
let AIScoreNumber = 0



const playHuman = (HumanChoice) => {

    playTheGame(HumanChoice, playMachine())
    HChoice.innerHTML = HumanChoice

    
  
}


const playMachine = () => {
    const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']
    const randomNumber = Math.floor(Math.random() * 5)

    return choices[randomNumber]
}

const playTheGame = (human, AI) => {

    console.log('Human:' + human + 'AI:' + AI)
    

    if (human === AI) {
        result.innerHTML = 'a Tie'
    } else if ((human === 'Paper' && AI === 'Rock') || (human === 'Paper' && AI === 'Spock') || 
    (human === 'Rock' && AI === 'Lizard') || (human === 'Rock' && AI === 'Scissors') ||
    (human === 'Lizard' && AI === 'Paper') || (human === 'Lizard' && AI === 'Spock') ||
    (human === 'Spock' && AI === 'Rock') || (human === 'Spock' && AI === 'Scissors') ||
    (human === 'Scissors' && AI === 'Paper') || (human === 'Scissors' && AI === 'Lizard') ) {
        humanScoreNumber++
        myScore.innerHTML = humanScoreNumber
        result.innerHTML = 'You Win'
    }else {
        AIScoreNumber++
        AIScore.innerHTML = AIScoreNumber
        result.innerHTML = 'You Lose'
    }
    AIChoice.innerHTML = AI
}

