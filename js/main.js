import Game from "./game.js";
import GameView from "./GameView.js";


let game=new Game();
let gameView = new GameView()

document.querySelector(".restart").addEventListener("click",()=> {
    onRestartClick()
})

let tile=document.querySelectorAll(".board-tile")
tile.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index)
    })
})

function onTileClick(i) {
    game.makeMove(i);
   gameView.updateBoard(game);
   

}

function onRestartClick() {
    game=new Game()
    gameView.updateBoard(game)

}

gameView.updateBoard(game)