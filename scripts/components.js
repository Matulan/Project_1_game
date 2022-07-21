class Component {
  constructor(width, height, color, x, y, ctx, imgUrl) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.vx = 3;
    this.vy = 3;
    this.imgUrl = imgUrl
    this.ctx = ctx;
    this.speedX = 0;
    this.speedY = 0;
    this.direction = "down";
    this.img = new Image();
    this.img.addEventListener("load", () => {})
    this.img.src = this.imgUrl;}

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  draw() {

    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)    
/*    ctx.fillStyle = this.color;
;;;;;;;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
 */  }

  move() {
    switch (this.direction) {
      case "up":
        this.y - 20;
        break;
      case "down":
        this.y + 20;
        break;
      case "left":
        this.x - 20;
        break;
      case "right":
        this.x + 20;
        break;
    }
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }
  crashWithEnemy(enemy) {
    return !(
      this.bottom() < enemy.y ||
      this.top() > enemy.y + 20 ||
      this.right() < enemy.x ||
      this.left() > enemy.x + 20
    );
  }

  eatCheese(squares) {
    let currentSquare = squares.find(
      (square) => square.x === player.x && square.y === player.y
    );
    if (currentSquare.type === "cheese") {
      currentSquare.type = "empty";
      return true;
    }
  }

  moveEnemies = () => {
    if (
      this.color === "pink" 
    ) {
      this.x += this.vx;
      if (this.x + this.vx > 240 || this.x + this.vx < 20) {
        this.vx *= -1;
      }
    } else if (
      this.color === "aqua" ||
      this.color === "orange" ||
      this.color === "green") {
      this.x += this.vx;
      if (this.x + this.vx > 520 || this.x + this.vx < 20) {
        this.vx *= -1;
      }
      }
    else if (this.color === "maroon" || this.color === "grey") {
      this.y += this.vy;
      if (this.y + this.vy > 460 || this.y + this.vy < 20) {
        this.vy *= -1;
      }
    } else if (this.color === "purple"){
      this.x += this.vx;
      if (this.x + this.vx < 300 || this.x + this.vx > 520) {
        this.vx *= -1;
      }
    }
  };

  checkPath(squares, direction) {
    let collided;
    switch (direction) {
      case "up":
        collided = squares.find(
          (square) =>
            square.x === this.x &&
            square.y === this.y - 20 &&
            square.type === "wall"
        );
        break;
      case "down":
        collided = squares.find(
          (square) =>
            square.x === this.x &&
            square.y === this.y + 20 &&
            square.type === "wall"
        );
        break;
      case "left":
        collided = squares.find(
          (square) =>
            square.x === this.x - 20 &&
            square.y === this.y &&
            square.type === "wall"
        );
        break;
      case "right":
        collided = squares.find(
          (square) =>
            square.x === this.x + 20 &&
            square.y === this.y &&
            square.type === "wall"
        );
        break;
    }
    return collided;
  }
}
