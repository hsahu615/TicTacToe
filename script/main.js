let turn = 0;


function win(arr){
  if((arr[0]==arr[1] && arr[0]==arr[2] && arr[0]!="empty") || (arr[3]==arr[4] && arr[3]==arr[5] && arr[3]!="empty") || (arr[6]==arr[7] && arr[6]==arr[8] && arr[6]!="empty")){
    return true;
  }
  else if((arr[0]==arr[3] && arr[0]==arr[6] && arr[0]!="empty") || (arr[1]==arr[4] && arr[1]==arr[7] && arr[1]!="empty") || (arr[2]==arr[5] && arr[2]==arr[8] && arr[2]!="empty")){
    return true;
  }
  else if((arr[0]==arr[4] && arr[0]==arr[8] && arr[0]!="empty") || (arr[6]==arr[4] && arr[6]==arr[2] && arr[6]!="empty")){
    return true;
  }
  else{
    return false
  };
}


const Players = function(name, mark){
  this.name = name;
  this.mark = mark;
}

const startGame = function(){
  let one = prompt("One: ");
  let two = prompt("Two: ");

  const mainArr = ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty","empty"];

  let player1 = new Players(one, "X");
  let player2 = new Players(two, "O");

  return {player1, player2, mainArr};
}

const game = startGame();


function fillBox(e){
  let div = document.getElementById(e.target.id);
  if(turn===0){
    game.mainArr[e.target.id.charAt(e.target.id.length-1)] = game.player1.mark;
    turn = 1;
    div.textContent = "X";
  }
  else{
    game.mainArr[e.target.id.charAt(e.target.id.length-1)] = game.player2.mark;
    turn = 0;
    div.textContent = "O";
  }
}

function isWon(arr){
  if(win(arr)){
    if(turn===1){
      document.querySelector(".board").innerHTML = `${game.player1.name} Won`;
    }
    else{
      document.querySelector(".board").innerHTML = `${game.player2.name} Won`;
    }
  }
}

function isDraw(arr){
  if(arr.indexOf("empty")===-1){
    document.querySelector(".board").innerHTML = "Match Draw";
  }
}


let btn = document.querySelectorAll(".box");
btn.forEach(box => box.addEventListener('click', function(e){
  fillBox(e);
  isWon(game.mainArr);
  isDraw(game.mainArr);
}))


