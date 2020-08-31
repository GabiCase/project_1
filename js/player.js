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


        document.addEventListener("keydown", event => {
            switch (event.keyCode) {
                case this.keys.UP:
                    this.move("up");
                    break;
                case this.keys.DOWN:
                    this.move("down");
                    break;
                case this.keys.LEFT:
                    this.move("left");
                    break;
                case this.keys.RIGHT:
                    this.move("right");
                    break;
            }
        })

    }




    move(direction) {
        // hay que cambiar a -= 1 o -- Pero lo intenté yo y dejaba de funcionar
        //Además se mueve demasiado rápido y a saltos, (speed, fps, frames counter?)

        if (direction === "left") {
            this.playerPos.x > 0 ? this.playerPos.x = this.playerPos.x - 1 : null
        }
        if (direction === "right") {
            this.playerPos.x < this.canvasWidth ? this.playerPos.x = this.playerPos.x + 1 : null
        }
        if (direction === "down") {
            this.playerPos.y < this.canvasWidth ? this.playerPos.y = this.playerPos.y + 1 : null
        }
        if (direction === "up") {
            this.playerPos.y > 0 ? this.playerPos.y = this.playerPos.y - 1 : null
        }



    }

}