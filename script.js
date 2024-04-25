const result = document.querySelector('.result')
const HChoice = document.querySelector('.human')
const AIChoice = document.querySelector('.AI')
const myScore = document.querySelector('#human-score')
const AIScore = document.querySelector('#AI-score')
const reStart = document.querySelector('.reset')


let humanScoreNumber = 0
let AIScoreNumber = 0
const maxGame = 5
let tentativas = 0

const GAME_OPTIONS = {
    ROCK: 'Rock',
    PAPER: 'Paper',
    SCISSORS: 'Scissors',
    LIZARD: 'Lizard',
    SPOCK: 'Spock'
}

const playHuman = (HumanChoice) => {

    playTheGame(HumanChoice, playMachine())
    HChoice.innerHTML = HumanChoice
    if(tentativas === maxGame){
        alert("Fim de jogo");
    }
    tentativas++
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS, GAME_OPTIONS.LIZARD, GAME_OPTIONS.SPOCK]
    const randomNumber = Math.floor(Math.random() * 5)

    return choices[randomNumber]
}

const playTheGame = (human, AI) => {

    console.log('Human:' + human + 'AI:' + AI)


    if (human === AI) {
        result.innerHTML = 'a Tie'
    } else if ((human === GAME_OPTIONS.PAPER && AI === GAME_OPTIONS.ROCK) || (human === GAME_OPTIONS.PAPER && AI === GAME_OPTIONS.SPOCK) ||
        (human === GAME_OPTIONS.ROCK && AI === GAME_OPTIONS.LIZARD) || (human === GAME_OPTIONS.ROCK && AI === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.LIZARD && AI === GAME_OPTIONS.PAPER) || (human === GAME_OPTIONS.LIZARD && AI === GAME_OPTIONS.SPOCK) ||
        (human === GAME_OPTIONS.SPOCK && AI === GAME_OPTIONS.ROCK) || (human === GAME_OPTIONS.SPOCK && AI === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && AI === GAME_OPTIONS.PAPER) || (human === GAME_OPTIONS.SCISSORS && AI === GAME_OPTIONS.LIZARD)) {
        humanScoreNumber++
        myScore.innerHTML = humanScoreNumber
        result.innerHTML = 'You Win'
    } else {
        AIScoreNumber++
        AIScore.innerHTML = AIScoreNumber
        result.innerHTML = 'You Lose'
    }
    AIChoice.innerHTML = AI

}

