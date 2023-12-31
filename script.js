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
            this.render[0](index,"X");
        }
    },
    addO : function(index){
        if(this.remainingSlot > 0){
            this.board[index] = "O";
            this.remainingSlot--;
            this.render[0](index,"O");
        }
    },
    render : [function(index,ele){
        for (const div of buttons) {
            if(div.id == index){
                div.innerText = ele;
                break;
            }
        }
    },function(winner){
        winnerOutput.innerText = "Winner is "+winner;
    }],
    bindEvent : function(){
        buttons.forEach(btn => {
            btn.addEventListener('click',play);
        });
    },
    checkWinner : function(){
        for (const [index,ele] of this.board.entries()) {
            if(ele == "X"|| ele == "O"){
                if(index == 0 || index == 3 || index == 6){
                    if(this.board[index] == ele && this.board[index + 1] == ele && this.board[index + 2] == ele){
                        return ele;
                    }
                }
                if(index == 0 || index == 1 || index == 2){
                    if(this.board[index] == ele && this.board[index + 3] == ele && this.board[index + 6] == ele){
                        return ele;
                    }
                }
                if(this.board[0] == ele && this.board[4] == ele && this.board[8] == ele){
                    return ele;
                }
                if(this.board[2] == ele && this.board[4] == ele && this.board[6] == ele){
                    return ele;
                }
            }
        }
    }  
};

Gameboard.init();
function play(event){
    if(Gameboard.remainingSlot > 0){
        userInput = event.target.id;
        if(Gameboard.board[userInput] != null){
            return;
        }
        Gameboard.addX(userInput)
        console.log(Gameboard.board);
        
        if(Gameboard.checkWinner() === "X" || Gameboard.checkWinner() === "O"){
            let winner = Gameboard.checkWinner();
            Gameboard.render[1](winner);
            setTimeout(() => Gameboard.init(),1000);
            return;
        }

        if(Gameboard.remainingSlot != 0){
            var randomIndex = Math.floor(Math.random()*9);
            while(Gameboard.board[randomIndex] != null){
                randomIndex = Math.floor(Math.random()*9);
            }
        }
        setTimeout(() => {
            Gameboard.addO(randomIndex);
            if(Gameboard.checkWinner() === "X" || Gameboard.checkWinner() === "O"){
                let winner = Gameboard.checkWinner();
                Gameboard.render[1](winner);
                setTimeout(() => Gameboard.init(),1000);
            }
            if(Gameboard.remainingSlot <= 0){
                setTimeout(() => Gameboard.init(),1000);
            }
        },500);
    }
}