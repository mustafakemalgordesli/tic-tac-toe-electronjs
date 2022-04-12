const exit = document.getElementById("exit");
const restartButton = document.getElementById("restartButton");
const nextChar = document.getElementById("nextChar");

const btns = [
    document.getElementById("btn0"),
    document.getElementById("btn1"),
    document.getElementById("btn2"),
    document.getElementById("btn3"),
    document.getElementById("btn4"),
    document.getElementById("btn5"),
    document.getElementById("btn6"),
    document.getElementById("btn7"),
    document.getElementById("btn8")
]

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

exit.addEventListener("click", () => {
    window.close()
})

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if(btn.innerHTML != "") 
            alert("Hatalı seçim!");
        else {
            btn.innerHTML = nextChar.innerHTML;
            checkWinner();
        }
    })
})

function updateNext(){
    if(nextChar.innerHTML == "X") 
        nextChar.innerHTML = "O";
    else
        nextChar.innerHTML = "X";
}

function checkWinner() {
    winningConditions.forEach((contidion) => {
        if((btns[contidion[0]].innerHTML == btns[contidion[1]].innerHTML) && (btns[contidion[1]].innerHTML == btns[contidion[2]].innerHTML 
            && (btns[contidion[0]].innerHTML == "X" || btns[contidion[0]].innerHTML == "O"))){
            alert(btns[contidion[0]].innerHTML + " oyunu kazandı!");
            return;
        }
    });
    updateNext();
};

restartButton.addEventListener("click", () => {
    btns.forEach(btn => {
        btn.innerHTML = "";
    });
    nextChar.innerHTML = "X";
})

