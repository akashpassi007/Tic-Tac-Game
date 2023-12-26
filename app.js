let boxes = document.querySelectorAll(".box");

let rbtn = document.querySelector("#rbtn");

let newBtn = document.querySelector("#newBtn");

let msgContainer = document.querySelector(".msg-container");  //class

let msg = document.querySelector("#msg");  //id

let turn0 = true; //playerX, playerY

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turn0 = true;   
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        //console.log("Button was Clicked");
        // box.innerText = "Abcd"; 

        if (turn0) {
            //playero
            box.innerText = "O";
            turn0 = false;
        } else {
            //playerX
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                //console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};


newBtn.addEventListener("click", resetGame);
rbtn.addEventListener("click", resetGame);








