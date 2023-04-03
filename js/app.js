const gameBlock = document.querySelector(".game__block");
let blockGame = document.querySelectorAll(".block");
const spaceShip = document.querySelector(".anim1 img");
const spaceShip2 = document.querySelector(".anim2 img");
const spaceShip3 = document.querySelector(".anim3 img");
const start = document.querySelector(".turn_to_walk_button button");
const huIsGame = document.querySelector(".turn_to_walk");
const span = document.querySelector(".turn_to_walk span");
const wins = document.querySelector(".turn_to_walk_wins");
const winsO = document.querySelector(".turn_to_walk_wins span");
const noWins = document.querySelector(".turn_to_walk_no_wins");
const playAgain = document.querySelectorAll(".play__again");
let reds = document.querySelector(".red");
let cursorX = document.querySelectorAll(".x");
let cursorY = document.querySelectorAll(".y");
const couners = document.querySelector('.wrapper_counter')
let countX = document.querySelector('.count_x')
let countY = document.querySelector('.count_y')
let countNoWin = document.querySelector('.count_no_win')
const playMusic = document.querySelector('.music_play .music')
const sounds = document.querySelector('.music_play .sounds')
const xHover = document.querySelectorAll('.x_hover')
const counterReset = document.querySelector('.counter__reset')


const music = new Audio("./audio/music.mp3");
const audio = new Audio("./audio/dor.mp3");
const frend = new Audio("./audio/frend.mp3");
const audioX = new Audio("./audio/2.mp3");
const audioY = new Audio("./audio/1.mp3");
const audioWinX = new Audio("./audio/winX.mp3");
const audioWinY = new Audio("./audio/winY.mp3");



function soundClick() {
  const music = new Audio(); 
  music.src = './audio/music.mp3'; 
  music.autoplay = true; 
  music.loop = true;
  music.volume = 0.1;
}
let musPlay = 0;
playMusic.addEventListener('click', ()=>{
  if(!musPlay){
    musPlay = 1;
    music.play();
  playMusic.textContent = 'Музика : of'
  } else {
    musPlay = 0;
    playMusic.textContent = 'Музика : on'
    music.pause();
    music.currentTime = 0;
  }

})
let soundPlay = 0;
sounds.addEventListener('click',()=>{
  if(!soundPlay){
    sounds.textContent = 'Включити всі звуки'
    soundPlay = 1;
    musPlay = 0;
    music.pause();
    music.currentTime = 0;
    playMusic.textContent = 'Музика : on';
  } else{
    soundPlay = 0;
    sounds.textContent = 'Виключити всі звуки'
    playMusic.textContent = 'Музика : of';
    musPlay = 1;
    music.play();
  }
})



let goGame = false;
let color = "red";
start.addEventListener("click", () => {
  if(!soundPlay){
    audio.play();
  }

  huIsGame.style.display = "block";
  start.style.display = "none";
  couners.style.display = 'flex'
  goGame = true;
  runGame(goGame);
});
countX.textContent = 0;
  countY.textContent = 0;
  countNoWin.textContent = 0;
function runGame(goGame) {
  
  if (goGame) {
   
    blockGame.forEach((item) => {
      item.style.cursor = "pointer";
      
    });
    function gameBlockClick(e) {
      const img1 = `<img class="red" src="./image/1.jpeg" alt="">`;
      const img2 = `<img class="blue" src="./image/2.png" alt="">`;
      const x = `<div class='x'></div>`;
      const y = `<div class='y'></div>`;
      if (e.target.classList.contains("block")) {
        if (color === "red") {

          if(!soundPlay){
            audioX.play();
          }
          
          
          span.textContent = "O";
          span.style.color = "red";
          e.target.closest(".block").insertAdjacentHTML("beforeend", img1);
          e.target.closest(".block").insertAdjacentHTML("beforeend", x);
          setTimeout(() => {
            e.target.firstChild.classList.add("move__starship1");
            e.target.lastChild.classList.add("x__op");
          }, 1);

          reds = document.querySelectorAll(".red");

          color = "blue";
        } else if (color === "blue") {
          if(!soundPlay){
            audioY.play();
          }
          
          span.textContent = "X";
          span.style.color = "rgba(43, 134, 193, 255)";
          e.target.closest(".block").insertAdjacentHTML("beforeend", img2);
          e.target.closest(".block").insertAdjacentHTML("beforeend", y);
          setTimeout(() => {
            e.target.firstChild.classList.add("move__starship2");
            e.target.lastChild.classList.add("y__op");
          }, 1);
          color = "red";
        }
        blockGame = document.querySelectorAll(".block");

        // ВИГРАВ X
        setTimeout(() => {
          cursorX = document.querySelectorAll(".x");
          cursorY = document.querySelectorAll(".y");

          function endGameX() {
            if(!soundPlay){
              audioWinX.play();
            }
          
            countX.textContent++;
            goGame = false;
            huIsGame.style.display = "none";
            wins.style.display = "flex";
           
            playAgain[0].style.display = "block";
            gameBlock.removeEventListener("click", gameBlockClick);
            blockGame.forEach((item) => {
              item.style.cursor = "default";
            });
            cursorX.forEach((item) => {
              item.style.cursor = "default";
            });
            cursorY.forEach((item) => {
              item.style.cursor = "default";
            });
            winsO.textContent = "X";
            winsO.style.color = "rgba(43, 134, 193, 255)";
          }

          function endGameY() {
            if(!soundPlay){
              audioWinY.play();
            }
            countY.textContent++;
            goGame = false;
            huIsGame.style.display = "none";
            wins.style.display = "flex";
            playAgain[0].style.display = "block";
            gameBlock.removeEventListener("click", gameBlockClick);
            blockGame.forEach((item) => {
              item.style.cursor = "default";
            });
            cursorX.forEach((item) => {
              item.style.cursor = "default";
            });
            cursorY.forEach((item) => {
              item.style.cursor = "default";
            });
            winsO.textContent = "O";
            winsO.style.color = "red";
          }
          //  ---
          const imgX =
            '<img class="red move__starship1" src="./image/1.jpeg" alt=""><div class="x x__op"></div>';
          const imgY =
            '<img class="blue move__starship2" src="./image/2.png" alt=""><div class="y y__op"></div>';
          if (
            blockGame[0].innerHTML === imgX &&
            blockGame[1].innerHTML === imgX &&
            blockGame[2].innerHTML === imgX
          ) {
            endGameX();
          } else if (
            blockGame[3].innerHTML === imgX &&
            blockGame[4].innerHTML === imgX &&
            blockGame[5].innerHTML === imgX
          ) {
            endGameX();
          } else if (
            blockGame[6].innerHTML === imgX &&
            blockGame[7].innerHTML === imgX &&
            blockGame[8].innerHTML === imgX
          ) {
            endGameX();
          } else if (
            blockGame[0].innerHTML === imgX &&
            blockGame[3].innerHTML === imgX &&
            blockGame[6].innerHTML === imgX
          ) {
            endGameX();
          } else if (
            blockGame[1].innerHTML === imgX &&
            blockGame[4].innerHTML === imgX &&
            blockGame[7].innerHTML === imgX
          ) {
            endGameX();
          } else if (
            blockGame[2].innerHTML === imgX &&
            blockGame[5].innerHTML === imgX &&
            blockGame[8].innerHTML === imgX
          ) {
            endGameX();
          } else if (
            blockGame[0].innerHTML === imgX &&
            blockGame[4].innerHTML === imgX &&
            blockGame[8].innerHTML === imgX
          ) {
            endGameX();
          } else if (
            blockGame[2].innerHTML === imgX &&
            blockGame[4].innerHTML === imgX &&
            blockGame[6].innerHTML === imgX
          ) {
            endGameX();
          } else if (
            blockGame[0].innerHTML === imgY &&
            blockGame[1].innerHTML === imgY &&
            blockGame[2].innerHTML === imgY
          ) {
            endGameY();
          } else if (
            blockGame[3].innerHTML === imgY &&
            blockGame[4].innerHTML === imgY &&
            blockGame[5].innerHTML === imgY
          ) {
            endGameY();
          } else if (
            blockGame[6].innerHTML === imgY &&
            blockGame[7].innerHTML === imgY &&
            blockGame[8].innerHTML === imgY
          ) {
            endGameY();
          } else if (
            blockGame[0].innerHTML === imgY &&
            blockGame[3].innerHTML === imgY &&
            blockGame[6].innerHTML === imgY
          ) {
            endGameY();
          } else if (
            blockGame[1].innerHTML === imgY &&
            blockGame[4].innerHTML === imgY &&
            blockGame[7].innerHTML === imgY
          ) {
            endGameY();
          } else if (
            blockGame[2].innerHTML === imgY &&
            blockGame[5].innerHTML === imgY &&
            blockGame[8].innerHTML === imgY
          ) {
            endGameY();
          } else if (
            blockGame[0].innerHTML === imgY &&
            blockGame[4].innerHTML === imgY &&
            blockGame[8].innerHTML === imgY
          ) {
            endGameY();
          } else if (
            blockGame[2].innerHTML === imgY &&
            blockGame[4].innerHTML === imgY &&
            blockGame[6].innerHTML === imgY
          ) {
            endGameY();
          } else if (
            blockGame[0].innerHTML !== "" &&
            blockGame[1].innerHTML !== "" &&
            blockGame[2].innerHTML !== "" &&
            blockGame[3].innerHTML !== "" &&
            blockGame[4].innerHTML !== "" &&
            blockGame[5].innerHTML !== "" &&
            blockGame[6].innerHTML !== "" &&
            blockGame[7].innerHTML !== "" &&
            blockGame[8].innerHTML !== "" 
          ) {
            if(!soundPlay){
              frend.play();
            }
            countNoWin.textContent++;
            goGame = false;
            huIsGame.style.display = "none";
            noWins.style.display = "flex";
            playAgain[1].style.display = "block";
            gameBlock.removeEventListener("click", gameBlockClick);
            blockGame.forEach((item) => {
              item.style.cursor = "default";
            });
            cursorX.forEach((item) => {
              item.style.cursor = "default";
            });
            cursorY.forEach((item) => {
              item.style.cursor = "default";
            });
          }
        }, 50);
      }
    }

    // function mouseOverX(e){
    //   const x = `<div class='x'></div>`;
    //   if(e.target.classList.contains("x_hover")){
    //     console.log(e.target.classList.contains("x_hover"))
    //     if(color === "red"){
    //       xHover.insertAdjacentHTML("beforeend", x);
    //     }
    //   }
      
    // }
    // gameBlock.addEventListener("mouseover", mouseOverX);
    gameBlock.addEventListener("click", gameBlockClick);
    
  }
}

counterReset.addEventListener('click',()=>{
  countY.textContent = 0;
  countX.textContent = 0;
  countNoWin.textContent = 0;
})

playAgain.forEach((rplay) => {
  rplay.addEventListener("click", () => {
    if(!soundPlay){
      audio.play();
    }
    
    blockGame.forEach((item) => {
      item.innerHTML = "";
    });
    huIsGame.style.display = "block";
    start.style.display = "none";
    noWins.style.display = "none";
    wins.style.display = "none";
    goGame = true;
    runGame(goGame);
  });
});
// Зауск корабля через весь екран зацикливание
setInterval(() => {
  let rightTopspaceShip1;
  setTimeout(() => {
    const stylesImg = getComputedStyle(spaceShip);
    rightTopspaceShip1 = setInterval(() => {
      spaceShip.style.bottom = parseFloat(stylesImg.bottom) + 0.5 + "px";
      spaceShip.style.right = parseFloat(stylesImg.right) + 1 + "px";
      spaceShip.style.width = parseFloat(stylesImg.width) - 0.1 + "px";
    }, 1);
  }, 2000);
  setTimeout(() => {
    clearInterval(rightTopspaceShip1);
    spaceShip.style.bottom = "200px";
    spaceShip.style.right = "0px";
    spaceShip.style.width = "440px";
  }, 10000);
  let rightTopspaceShip2;
  setTimeout(() => {
    const stylesImg = getComputedStyle(spaceShip2);
    rightTopspaceShip2 = setInterval(() => {
      spaceShip2.style.bottom = parseFloat(stylesImg.bottom) + 0.5 + "px";
      spaceShip2.style.left = parseFloat(stylesImg.left) + 0.5 + "px";
      spaceShip2.style.width = parseFloat(stylesImg.width) + 0.3 + "px";
    }, 1);
  }, 3000);
  setTimeout(() => {
    clearInterval(rightTopspaceShip2);
    spaceShip2.style.bottom = "60px";
    spaceShip2.style.left = "200px";
    spaceShip2.style.width = "0px";
  }, 15000);

  let rightTopspaceShip3;
  setTimeout(() => {
    const stylesImg = getComputedStyle(spaceShip3);
    rightTopspaceShip3 = setInterval(() => {
      spaceShip3.style.top = parseFloat(stylesImg.top) + 0.2 + "px";
      spaceShip3.style.left = parseFloat(stylesImg.left) + 1 + "px";
      spaceShip3.style.width = parseFloat(stylesImg.width) + 0.4 + "px";
    }, 1);
  }, 15000);
  setTimeout(() => {
    clearInterval(rightTopspaceShip3);
    spaceShip3.style.top = "100px";
    spaceShip3.style.left = "-450px";
    spaceShip3.style.width = "540px";
  }, 30000);
}, 40000);

let rightTopspaceShip1;
setTimeout(() => {
  const stylesImg = getComputedStyle(spaceShip);
  rightTopspaceShip1 = setInterval(() => {
    spaceShip.style.bottom = parseFloat(stylesImg.bottom) + 0.5 + "px";
    spaceShip.style.right = parseFloat(stylesImg.right) + 1 + "px";
    spaceShip.style.width = parseFloat(stylesImg.width) - 0.1 + "px";
  }, 1);
}, 2000);
setTimeout(() => {
  clearInterval(rightTopspaceShip1);
  spaceShip.style.bottom = "200px";
  spaceShip.style.right = "0px";
  spaceShip.style.width = "440px";
}, 10000);

let rightTopspaceShip2;
setTimeout(() => {
  const stylesImg = getComputedStyle(spaceShip2);
  rightTopspaceShip2 = setInterval(() => {
    spaceShip2.style.bottom = parseFloat(stylesImg.bottom) + 0.5 + "px";
    spaceShip2.style.left = parseFloat(stylesImg.left) + 0.5 + "px";
    spaceShip2.style.width = parseFloat(stylesImg.width) + 0.3 + "px";
  }, 1);
}, 3000);
setTimeout(() => {
  clearInterval(rightTopspaceShip2);
  spaceShip2.style.bottom = "60px";
  spaceShip2.style.left = "200px";
  spaceShip2.style.width = "0px";
}, 15000);

let rightTopspaceShip3;
setTimeout(() => {
  const stylesImg = getComputedStyle(spaceShip3);
  rightTopspaceShip3 = setInterval(() => {
    spaceShip3.style.top = parseFloat(stylesImg.top) + 0.2 + "px";
    spaceShip3.style.left = parseFloat(stylesImg.left) + 1 + "px";
    spaceShip3.style.width = parseFloat(stylesImg.width) + 0.4 + "px";
  }, 1);
}, 15000);
setTimeout(() => {
  clearInterval(rightTopspaceShip3);
  spaceShip3.style.top = "100px";
  spaceShip3.style.left = "-450px";
  spaceShip3.style.width = "540px";
}, 30000);
