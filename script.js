const buttons = document.querySelectorAll('div');
const winnerOutput = document.querySelector('h1');
const Gameboard = {
    remainingSlot : 9,
    board : new Array(9),
    init : function(){
        winnerOutput.innerText = "Tic Tac Toe";
        this.board = new Array(9);
        this.remainingSlot = 9;
        this.bindEvent();
        buttons.forEach(element => {
            element.innerText = "";
        });
    },
    addX : function(index){
        if(this.remainingSlot > 0){
            this.board[index] = "X";
            this.remainingSlot--;
            this.render(index,"X");
        }
    },
    addO : function(index){
        if(this.remainingSlot > 0){
            this.board[index] = "O";
            this.remainingSlot--;
            this.render(index,"O");
        }
    },
    render : function(index,ele){
        for (const div of buttons) {
            if(div.id == index){
                console.log("LOL");
                div.innerText = ele;
                break;
            }
        }
    },
    bindEvent : function(){
        buttons.forEach(btn => {
            btn.addEventListener('click',play);
        });
    },
    checkWinner : function(){
        for (const [index,ele] of this.board.entries()) {
            if(ele === "X" || ele === "O"){
                if(this.board[index] === this.board[index + 1] &&
                    this.board[index] === this.board[index + 2]){
                        return ele;
                }
                if(this.board[index] === this.board[index + 3] &&
                    this.board[index] === this.board[index + 6]){
                        return ele;
                }
                if(this.board[index] === this.board[index + 4] && this.board[index] === this.board[index + 8]){
                    return ele;
                }
                if(this.board[index] === this.board[index + 2] && this.board[index] === this.board[index + 4]){
                    return ele;
                }
            }
        }
    }
};
Gameboard.init();
function play(event){
    if(Gameboard.remainingSlot >= 0){
        userInput = event.target.id;
        if(Gameboard.board[userInput] != null){
            return;
        }
        Gameboard.addX(userInput)
        
        if(Gameboard.checkWinner() === "X" || Gameboard.checkWinner === "O"){
            console.log("Winner = "+Gameboard.checkWinner());
            setTimeout(() => Gameboard.init(),1000);
            return;
        }

        if(Gameboard.remainingSlot != 0){
            var randomIndex = Math.floor(Math.random()*9);
            while(Gameboard.board[randomIndex] != null){
                randomIndex = Math.floor(Math.random()*9);
            }
        }
        setTimeout(() => Gameboard.addO(randomIndex),500);
        console.log(Gameboard.board);
        console.log(Gameboard.checkWinner());
        if(Gameboard.checkWinner() == "X" || Gameboard.checkWinner() == "O"){
            console.log("Winner = "+Gameboard.checkWinner());
            setTimeout(() => Gameboard.init(),1000);
            
        }
        if(Gameboard.remainingSlot <= 0){
            setTimeout(() => Gameboard.init(),1000);
        }
    } 
}