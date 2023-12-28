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
        console.log(index);
    },
    bindEvent : function(){
        buttons.forEach(btn => {
            btn.addEventListener('click',(e) => {
                console.log(e.target.id);
            });
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
            }
        }
    }
};