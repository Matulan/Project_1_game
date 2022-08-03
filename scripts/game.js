class Game {
  constructor(ctx, width, height, player) {
    this.frames = 0;
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.player = player;
    this.obstacles = [];
    this.pulps = [];
    this.img = new Image();
    this.img.addEventListener("load", () => {})
    this.img.src = "./docs/assets/images/ost4.png";
    this.sound = new Audio();
    this.sound.addEventListener("load", () => {})
    this.sound.src = "./docs/assets/images/tomandjerrysong.mp3";
    this.interval = null;
    this.isRunning = false;
    this.squares = [];
    this.score = 0;
    this.layout = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
      1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
      1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
      1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
      1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
      1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1,
      1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
      1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
      1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
      0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
      1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
      1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
      0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
      1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1,
    ];
  }

  start = () => {
    this.obstacles.push(new Component(20, 20, 'green', 20, 100, this.ctx, "./docs/assets/images/Tommy2.png"));
    this.obstacles.push(
      new Component(
        20,
        20,
        "purple",
        520,
        20,
        this.ctx,
        "./docs/assets/images/Tommy2.png"
      )
    );
    this.obstacles.push(new Component(20, 20, 'orange', 20, 520, this.ctx, "./docs/assets/images/Tommy2.png"));
    this.obstacles.push(new Component(20, 20, 'pink', 20, 20, this.ctx, "./docs/assets/images/Tommy2.png"));
    this.obstacles.push(new Component(20, 20, 'grey', 420, 20, this.ctx, "./docs/assets/images/Tommy2.png"));
    this.obstacles.push(new Component(20, 20, 'maroon', 120, 20, this.ctx, "./docs/assets/images/Tommy2.png"));
    this.obstacles.push(new Component(20, 20, 'aqua', 20, 340, this.ctx, "./docs/assets/images/Tommy2.png"));
    this.createBoard();
    this.interval = setInterval(this.updateGameArea, 20);
    this.isRunning = true;
    this.sound.play();
  };
  reset = () => {
    this.player.x = 260;
    this.player.y = 340;
    this.frames = 0;
    this.obstacles = [];
    this.squares = [];
    this.start();
  };

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  stop() {
    clearInterval(this.interval);
    this.isRunning = false;
    this.sound.pause();
  }

  createBoard = () => {
    for (let i = 0; i < this.layout.length; i++) {
      if (this.layout[i] === 0) {
        this.squares.push({
          x: (0 + i * 20) % 560,
          y: Math.floor(i / 28) * 20,
          color: "red",
          type: "cheese",
        });
      } else if (this.layout[i] === 1) {
        this.squares.push({
          x: (0 + i * 20) % 560,
          y: Math.floor(i / 28) * 20,
          color: "black",
          type: "wall",
        });
      }
    }
  };

  updateObstacles() {
    this.frames++;
    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].draw();
      this.obstacles[i].moveEnemies();
    }
  }

  /*   updatePulps () {
    if (squares[playerCurrentIndex].el.contains('pulps')) {
        score++
        scoreDisplay.innerHTML = score
        squares[playerCurrentIndex].el.remove('pulps')
      }
  } */

  drawGameBoard() {
    this.squares.forEach((square) => {
      if (square.type === "cheese") {
        this.ctx.fillStyle = square.color;
        this.ctx.fillRect(square.x, square.y, 20, 20);
        this.ctx.drawImage(this.img, square.x + 2, square.y + 2, 15, 15)
      } else {
        this.ctx.fillStyle = square.color;
        ctx.fillRect(square.x, square.y, 20, 20);
      }
    });
  }

  checkGameOver = () => {
    const crashedEnemies = this.obstacles.some((enemy) => {
      return this.player.crashWithEnemy(enemy);
    });
    if (crashedEnemies) {
      this.stop();
    }
  };

  checkForWin() {
    if (!this.squares.find((square) => square.type === "cheese")) {
      alert("You won!");
    }
  }

  updateGameArea = () => {
    this.clear();
    this.drawGameBoard();
    this.updateObstacles();
    this.checkGameOver();
    this.player.newPos();
    this.player.draw();
    if (this.player.eatCheese(this.squares)) {
      this.score++;
      const scoreSpan = document.getElementById("score");
      scoreSpan.innerHTML = this.score;
    }
    this.checkForWin();
  };
}
