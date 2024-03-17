const games = document.querySelector(".games");
const leftbutton = document.querySelector("#lefticon");
const rightbutton = document.querySelector("#righticon");
const yuh = document.querySelector(".confirm");
const main = document.querySelector(".main");
const jk = document.querySelector(".jk");
const img = document.querySelector(".happy");

let currentGameYuh;
let page = document.body;

let index = 0;

const listOfGames = ["league of legends", "apex legends", "overwatch","baldur's gate 3", "another game"];

let game = {
    currentGame: null,
    get game(){
        return this.currentGame
    },
    set game(currentGame){
        this.game = currentGame
    }
}

const startGame =  () =>{
    game.currentGame = listOfGames[0];
    games.innerText = game.currentGame;
}

const changeGame = (num) => {
    if (num === 1){
        index++;        
    } else {
        index--;
    }
    
    //changes index bounds if goes out of bounds of array
    if (index === -1){
        //changes index to the last element of array
        index = listOfGames.length - 1;
    } else if (index === listOfGames.length){
        //changes index to the beginning
        index = 0;
    }
    game.currentGame = listOfGames[index];
    
    games.innerText = game.currentGame;
}


if (page.id === "2"){

    startGame();
    
    leftbutton.addEventListener('click', () => {
        changeGame(-1)
    })

    rightbutton.addEventListener('click', () => {
        changeGame(-1)
    })
    

    yuh.addEventListener("click", () => {
    main.textContent = "";
    yuh.style.background = "transparent";
    yuh.style.border = "none";
    yuh.textContent = "";
    jk.textContent = "";        
    jk.style.background = "transparent";
    jk.style.border = "none";

    leftbutton.style.zIndex = "-1";
    rightbutton.style.zIndex = "-1";

    games.style.fontSize = "20px";
    games.style.bottom = "-150px";
    img.style.opacity = 1;
    })
} 


