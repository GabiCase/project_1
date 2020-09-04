class Player {
    constructor(ctx, canvasSize, keys, speed, canvasWidth, canvasHeight, imagePlayerSrc) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.keys = keys
        this.speed = 6
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight

        this.sheetWidth = 0
        this.sheetHeight = 0

        this.imagePlayerSrc = imagePlayerSrc
        this.imageInstance = new Image()
        this.imageInstance.src = `./sprites/${this.imagePlayerSrc}`
        this.imageInstance.frames = 4
        this.imageInstance.framesY = 0
        this.imageInstance.framesIndex = 0
        this.imageInstance.rows = 4
        this.imageInstance.columns = 4
        this.imageInstance.width = 196
        this.imageInstance.height = 190



        this.playerSize = {
            w: 90,
            h: 90
        }
        this.playerPos = {
            x: this.canvasWidth / 2 - this.playerSize.w / 2,
            y: this.canvasHeight / 2 - this.playerSize.h / 2
        }


    }

    changeDirection(framesY) {
        this.imageInstance.framesY = framesY

    }

    drawPlayer(framesCounter) {
        const framesx = this.imageInstance.framesIndex
        const framesy = this.imageInstance.framesY
        const sx = framesx * Math.floor(this.imageInstance.width / this.imageInstance.frames)
        const sy = framesy * Math.floor(this.imageInstance.height / this.imageInstance.rows)
        const sWidth = this.imageInstance.width / this.imageInstance.frames
        const sHeight = this.imageInstance.height / this.imageInstance.frames

        this.ctx.drawImage(this.imageInstance,
            sx,
            sy,
            sWidth,
            sHeight,
            this.playerPos.x,
            this.playerPos.y,
            this.playerSize.w,
            this.playerSize.h)

        this.animate(framesCounter)



    }

    animate(framesCounter) {


        if (framesCounter % 15 == 0) {
            this.imageInstance.framesIndex++;
        }
        if (this.imageInstance.framesIndex > this.imageInstance.frames - 1) {
            this.imageInstance.framesIndex = 0;
        }
    }






    setEvents() {
        //En algún momento podríamos mirar si usar dos flechas a la vez
        //para hacer un mov más diagonal


        document.addEventListener('keydown', event => {
            switch (event.keyCode) {
                case this.keys.LEFT:
                    this.move("left", this.speed);
                    this.changeDirection(1)
                    break;
                    // case this.keys.LEFT:
                    //     this.keys.UP ? this.move("left-up",speed) : null;
                    //     break;
                case this.keys.UP:
                    this.move("up", this.speed);
                    this.changeDirection(3)
                    break;
                case this.keys.DOWN:
                    this.move("down", this.speed);
                    this.changeDirection(0)
                    break;
                    //case this.keys.RIGHT && UP:
                    //    this.move("right-up");
                    //    break;
                case this.keys.RIGHT:
                    this.move("right", this.speed);
                    this.changeDirection(2)

                    break;
            }
        })

    }

    move(direction, speed) {


        this.speed = speed


        if (direction === "left") {
            this.playerPos.x > 0 ? this.playerPos.x -= this.speed : null
        }


        // if (direction === "left-up") {
        //     if (this.playerPos.x > 0 && this.playerPos.y > 0) {
        //         this.playerPos.x -= this.speed
        //         this.playerPos.y -= this.speed
        //     }

        // }

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