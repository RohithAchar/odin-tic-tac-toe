const buttons = document.querySelectorAll('div');
const Gameboard = {
    remainingSlot : 9,
    board : new Array(9),
    init : function(){
        this.board = [];
        this.remainingSlot = 9;
    },
    addX : function(index){
        if(this.remainingSlot > 0){
            this.board[index] = "X";
            this.remainingSlot--;
        }
    },
    addO : function(index){
        if(this.remainingSlot > 0){
            this.board[index] = "O";
            this.remainingSlot--;
        }
    },
    render : function(index){
        console.log(this.board[index]);
    },
    bindEvent : function(){
        buttons.forEach(btn => {
            btn.addEventListener('click',play);
        });
    },
    checkWinner : function(){
        for (const [index,ele] of this.board.entries()) {
            if(ele === "X" || ele === "O"){
                if(index <= 6 && this.board[index] === this.board[index + 1] &&
                    this.board[index] === this.board[index + 2]){
                        this.init();
                        return ele;
                }
                if(index <= 2 && this.board[index] === this.board[index + 3] &&
                    this.board[index] === this.board[index + 6]){
                        this.init();
                        return ele;
                }
                if(this.board[0] === this.board[4] && this.board[0] === this.board[8]){
                    this.init();
                    return ele;
                }
                if(this.board[2] === this.board[4] && this.board[2] === this.board[6]){
                    this.init();
                    return ele;
                }
            }
        }
    }
};
Gameboard.init();
Gameboard.bindEvent();
function play(event){
    if(Gameboard.remainingSlot >= 0){
        userInput = event.target.id;
        if(Gameboard.board[userInput] != null){
            return;
        }
        Gameboard.addX(userInput);
        if(Gameboard.remainingSlot != 0){
            var randomIndex = Math.floor(Math.random()*9);
            while(Gameboard.board[randomIndex] != null){
                console.log("Hi");
                randomIndex = Math.floor(Math.random()*9);
            }
        }
        Gameboard.addO(randomIndex);
        if(Gameboard.checkWinner() === "X" || Gameboard.checkWinner === "O"){
            console.log("Winner = "+Gameboard.checkWinner());
        }
    } 
}