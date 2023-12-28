var board = new Array(9);
var count  = 1;
var winner = "";
const Gameboard = {
    // init : () =>{
    //     board = [];
    //     count = 1;
    //     winner = "";
    // },
    addX : (index) => {
        board[index] = "X";
    },
    addO : (index) => {
        board[index] = "O";
    },
    bindEvent : () =>{
        var buttons = document.querySelectorAll('div');
        buttons.forEach(btn => {
            btn.addEventListener('click',choose);
        });
    },
    checkWinner : () => {
        winner = "";
        for (const [index,element] of board.entries()) {
            if(element === "X" || element === "O"){
                if(index <= 6){
                    if(board[index] === board[index + 1] && board[index] === board[index + 2]){
                        element === "X" ? winner = "X" : winner = "O";
                        console.log(winner);
                        return;
                       }
                }
                if(index <= 2){
                    if(board[index] === board[index + 3] && board[index] === board[index + 6]){
                        element === "X" ? winner = "X" : winner = "O";
                        console.log(winner);
                        return;
                       }
                }
                if(board[0] === board[4] && board[0] === board[8]){
                    element === "X" ? winner = "X" : winner = "O";
                    console.log(winner);
                    return;
                }
                if(board[2] === board[4] && board[2] === board[6]){
                    element === "X" ? winner = "X" : winner = "O";
                    console.log(winner);
                    return;
                   }
            }
        }
    },
    render : (id) => {
        console.log(id);
    },
};

// Gameboard.init();
Gameboard.bindEvent();
function choose(e){
    winner = "";
    let index = e.target.id;
    if(board[index] != null){
        return;
    }
    Gameboard.addX(index);
    Gameboard.render(index);
    if(count != 5){
        var randomIndex = Math.floor(Math.random() * 9);
        while(board[randomIndex] != null){
            randomIndex = Math.floor(Math.random() * 9);
        }
        Gameboard.addO(randomIndex);
    }
    console.log(board);
    Gameboard.checkWinner();
    count++;
}
// function startGame(){
//     while(count <= 5){
//         var userInput = parseInt(prompt("Enter index "));
//         while(board[userInput] != null){
//             var userInput = parseInt(prompt("Enter index "));
//         }
//         Gameboard.addX(userInput);

//         console.log(randomIndex);
//         console.log(board);
//         winner = "";
//         Gameboard.checkWinner();
//         if(winner.length != 0){
//             console.log("Winner = "+winner);
//             Gameboard.reset();
//             return;
//         }
//         count++;
//     }
// }