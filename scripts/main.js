    const scoreDisplay = document.getElementById('score')
    const canvas = document.getElementById('myCanvas')
    const ctx = canvas.getContext('2d')
    const width = 28
    /* let score = 0
    const layout = [
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,0,1,1,1,2,2,1,1,1,0,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,0,0,0,1,2,2,2,2,2,2,1,0,0,0,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
      1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
      1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
      1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
      1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
      1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ]


const squares = []

function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      //add layout to the board
      if(layout[i] === 0) {
        squares.push({x: (0 + i * 20) % 560 , y: Math.floor(i/28) * 20, color: 'blue', type: 'cheese'} )
      } else if (layout[i] === 1) {
        squares.push({x: (0 + i * 20) % 560 , y: Math.floor(i/28) * 20, color: 'black', type: 'wall'} )
      } else if (layout[i] === 2) {
        squares.push({x: (0 + i * 20) % 560 , y: Math.floor(i/28) * 20, color: 'red', type: 'cat-lair'} )
      } else if (layout[i] === 3) {
        squares.push({x: (0 + i * 20) % 560 , y: Math.floor(i/28) * 20, color: 'yellow', type: 'powerup'} )
      }
    }
  }
  createBoard()

console.log(squares)    
squares.forEach((square) => {
  ctx.fillStyle = square.color
  ctx.fillRect(square.x, square.y, 20, 20)
})
 */
const player = new Component(
  20,
  20,
  "white",
  260,
  340,
  ctx,
  "./docs/assets/images/Jeery 2.png"
);

/* let game = new Game(ctx, canvas.width, canvas.height, player)
game.start() */

let game;
const startBtn = document.getElementById('start');

startBtn.addEventListener('click', () => {
    if (!game) {
    game = new Game(ctx, canvas.width, canvas.height, player);
    game.start();
    } else if (game && !game.isRunning) {
        //When crashed
        game.reset();
    }
});

document.addEventListener('keydown', (e) =>{
    switch(e.code) {
        case 'ArrowUp':
          if(!(player.checkPath(game.squares, 'up'))) {
            player.y -= 20;
          }
            break;
        case 'ArrowDown':
          if(!(player.checkPath(game.squares, 'down'))) {
            player.y += 20;
          }
            break;
        case 'ArrowLeft':
          if(!(player.checkPath(game.squares, 'left'))) {
            player.x -= 20;
          }
            break;
        case 'ArrowRight':
          if(!(player.checkPath(game.squares, 'right'))) {
            player.x += 20;
          }
            break;
        
    }
});



document.addEventListener('keyup', () => {
    player.speedX = 0;
    player.speedY = 0;
});
