class Player {
    constructor(ctx, canvasSize, keys, speed, canvasWidth, canvasHeight, imagePlayerSrc) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.keys = keys
        this.speed = speed
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.imagePlayerSrc = imagePlayerSrc
        this.imageInstance = new Image()
        this.imageInstance.src = `./images/${this.imagePlayerSrc}`
        this.playerSize = {
            w: 100,
            h: 100
        }
        this.playerPos = {
            x: this.canvasWidth / 2 - this.playerSize.w / 2,
            y: this.canvasHeight / 2 - this.playerSize.h / 2
        }

        // Creamos una instancia de imagen PARAA QUE

    }


    drawPlayer() {

        //para dibujar en canvas se usa ctx.drawImage()
        //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth)
        this.ctx.drawImage(this.imageInstance, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)

    }






    setEvents() {
        //En algún momento podríamos mirar si usar dos flechas a la vez
        //para hacer un mov más diagonal


        document.addEventListener('keydown', event => {
            switch (event.keyCode) {
                case this.keys.LEFT:
                    this.move("left");
                    break;
                case this.keys.LEFT:
                    this.keys.UP ? this.move("left-up") : null;
                    break;
                case this.keys.UP:
                    this.move("up");
                    break;
                case this.keys.DOWN:
                    this.move("down");
                    break;
                    //case this.keys.RIGHT && UP:
                    //    this.move("right-up");
                    //    break;
                case this.keys.RIGHT:
                    this.move("right");
                    break;
            }
        })

    }

    move(direction) {


        this.speed = 6


        if (direction === "left") {
            this.playerPos.x > 0 ? this.playerPos.x -= this.speed : null
        }


        if (direction === "left-up") {
            if (this.playerPos.x > 0 && this.playerPos.y > 0) {
                this.playerPos.x -= this.speed
                this.playerPos.y -= this.speed
            }

        }

        if (direction === "right") {
            this.playerPos.x < this.canvasWidth - this.playerSize.w ? this.playerPos.x += this.speed : null
        }
        if (direction === "down") {
            this.playerPos.y < this.canvasWidth ? this.playerPos.y += this.speed : null
        }
        if (direction === "up") {
            this.playerPos.y > 0 ? this.playerPos.y -= this.speed : null
        }


    }

}