class Component{
    constructor(width, height, color, x, y, ctx){
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x; 
        this.y = y; 
        this.ctx = ctx;
        this.speedX = 0;
        this.speedY = 0;
        this.direction = 'down'
    }
    

    newPos(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
    

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    
    left() {
        return this.x;
    }

    right(){
        return this.x + this.width;
    }

    top() {
        return this.y;
    }

    bottom() {
        return  this.y + this.height;
    }
    move(){
        switch(this.direction){
            case 'up':
              this.y -20
              break;
            case 'down':
                this.y +20
                break;
            case 'left':
                this.x -20
                break;
            case 'right':
                this.x +20
                break;
            }
    }
crashWithEnemy (enemy) {
    return !(
        this.bottom() < enemy.top()  ||
        this.top() > enemy.bottom()|| 
        this.right() < enemy.left() || 
        this.left() > enemy.right()
      );
}


    eatCheese(squares){
        let currentSquare = squares.find((square) =>
        square.x === player.x && 
        square.y === player.y 
        )
        if(currentSquare.type === 'cheese'){
            currentSquare.type = 'empty'
            return true;
        }
    }

    checkPath(squares, direction){
        let collided;
        switch(direction){
            case 'up':
               collided =  squares.find((square) =>
                square.x === this.x && 
                square.y === this.y - 20 && 
                square.type === 'wall'
                )
            break;
            case 'down':
                collided =  squares.find((square) =>
                square.x === this.x && 
                square.y === this.y + 20 && 
                square.type === 'wall'
                )
            break;
            case 'left':
                collided =  squares.find((square) =>
                square.x === this.x - 20 && 
                square.y === this.y  && 
                square.type === 'wall'
                )
            break;
            case 'right':
                collided =  squares.find((square) =>
                square.x === this.x  + 20 && 
                square.y === this.y  && 
                square.type === 'wall'
                )
            break;
        }
        return collided;
    }
}