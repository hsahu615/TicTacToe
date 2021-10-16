let turn = 0;
let game;
let basic;



const Basic = function(){
  let fillBox = function(e){
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
  
  let isWon = function(arr){
    let result = document.querySelector(".result");
    if(win(arr)){
      if(turn===1){
        document.querySelector(".resulth1").textContent = `${game.player1.name} Won`;
        result.style.display = "flex";
      }
      else{
        document.querySelector(".resulth1").textContent = `${game.player2.name} Won`;
        result.style.display = "flex";
      }
    }
  }
  
  let isDraw = function(arr){
    if(arr.indexOf("empty")===-1){
      // If it's column and get win 
      if((document.querySelector(".resulth1").textContent.slice(-3,)!=="Won")){ 
        (document.querySelector(".resulth1").textContent) = "Match Draw";
      }
    }
  }

  return ({fillBox, isWon, isDraw});
}


// Winner Check function
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

// Initialising Players
const Players = function(name, mark){
  this.name = name;
  this.mark = mark;
}

const startGame = function(one, two){
  let board = document.querySelector(".board");
  board.style.display = "flex";
  const mainArr = ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty","empty"];

  let player1 = new Players(one, "X");
  let player2 = new Players(two, "O");

  return {player1, player2, mainArr};
}




let btn = document.querySelectorAll(".box");
btn.forEach(box => box.addEventListener('click', function(e){
  basic = Basic();
  basic.fillBox(e);
  basic.isWon(game.mainArr);
  basic.isDraw(game.mainArr);
}, {once:true}));


// Start Match
function start(){
  const one = document.getElementById("player1").value
  const two = document.getElementById("player2").value
  game = startGame(one, two);
}


function restart(){
  location.reload();
}
