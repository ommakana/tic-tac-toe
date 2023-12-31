const boxes = document.querySelectorAll(".box");

const winPatters = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let playerXTurn = true;

boxes.forEach((box) => {
    box.addEventListener("click", function() {
        if (playerXTurn) {
            box.innerHTML = "X";
            playerXTurn = false;
            box.disa;
        } else {
            box.innerHTML = "O";
            playerXTurn = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const winnerMsgElement = document.querySelector("#winner-msg");
const checkWinner = () => {
    winPatters.forEach((pattern) => {
        const p1 = pattern[0];
        const p2 = pattern[1];
        const p3 = pattern[2];
        if (boxes[p1].innerHTML && boxes[p2].innerHTML && boxes[p3].innerHTML) {
            if (
                boxes[p1].innerHTML === boxes[p2].innerHTML &&
                boxes[p2].innerHTML === boxes[p3].innerHTML
            ) {
                console.log("WINNER", boxes[p1].innerHTML);
                winnerMsgElement.innerHTML = `Winner Player ${boxes[p1].innerHTML} !!!!`
            }
        }
    });
};