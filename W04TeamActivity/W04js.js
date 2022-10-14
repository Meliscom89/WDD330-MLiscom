

 const boxArray = document.getElementsByClassName('.box');
 const button = document.getElementById('resetButton');
 const player1 = "X";
 const player2 = "O";
 let player = player1;

 function playerMove(e, player) {
    console.log(e.target)
    e.target.innerHTML = player;
 }

function xFunction(boxArray) {
    console.log(boxArray.length);
    
}
addEventListener('click', xFunction,);