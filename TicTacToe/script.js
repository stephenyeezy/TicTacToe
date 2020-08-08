const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const squareElements = document.querySelectorAll('[game-square]')
const resetButton = document.getElementById('resetButton')
let circleTurn

startGame()

resetButton.addEventListener('click', startGame)

function startGame() {
    circleTurn = false
    squareElements.forEach(square => {
        square.classList.remove(X_CLASS)
        square.classList.remove(CIRCLE_CLASS)
        square.removeEventListener('click', handleClick)
        square.addEventListener('click', handleClick, {once: true})
    })
}

function handleClick(e) {
    const square = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS 
    placeMark(square, currentClass)
    switchTurn()
}

function placeMark(square, currentClass) {
    square.classList.add(currentClass)
}

function switchTurn() {
    circleTurn = !circleTurn
}