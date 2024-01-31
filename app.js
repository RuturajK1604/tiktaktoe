let gameContainer = document.querySelector(".conatiner");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let winMsg = document.querySelector("#winMsg");
let winMsgText = document.querySelector('.msg');
let newGame = document.querySelector(".new-btn");
// let gameEnded = false;

let turnO = true;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

const checkWinner = () => {
    for (let pattern of winPatterns) {
        position1val = boxes[pattern[0]].innerText;
        position2val = boxes[pattern[1]].innerText;
        position3val = boxes[pattern[2]].innerText;
        if (position1val != '' && position2val != '' && position3val != '') {
            if (position1val === position2val && position2val === position3val) {
                boxes.forEach((box) => {
                box.disabled = true;
                winMsg.classList.remove('hide');
                winMsgText.innerText = `The winner is player ${position1val}`;
                gameContainer.classList.add('hide');
                resetBtn.classList.add('hide');
                });
            }
        }
    }
}

const startNewGame = () => {
    turnO = true;
    boxes.forEach((box) => {
        box.innerText = '';
        box.disabled = false;
        winMsg.classList.add('hide');
        gameContainer.classList.remove('hide');
        resetBtn.classList.remove('hide');
    })
}

resetBtn.addEventListener('click', startNewGame);
newGame.addEventListener('click', startNewGame);


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        } else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        // boxes.forEach((box) => {
        //     if (box.innerText != '') {
        //         gameEnded = true;
        //     } else {
        //         gameEnded = false;
        //     }
        // })
        // if (gameEnded) {
        //     startNewGame();
        // }
    });
});




