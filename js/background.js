class Background {
    constructor(ctx, canvasSize, background, speed, canvasWidth, canvasHeight, imgBackSrc, player) {
        this.ctx = ctx
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.background = background
        this.speed = speed
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.imgBackSrc = imgBackSrc
        this.imageInstanceBack = new Image()
        this.imageInstanceBack.src = `./images/${this.imgBackSrc[0]}`
        this.imageInstanceMid = new Image()
        this.imageInstanceMid.src = `./images/${this.imgBackSrc[1]}`
        this.imageInstanceSand = new Image()
        this.imageInstanceSand.src = `./images/${this.imgBackSrc[2]}`
        this.player = player
        this.canvasSize = {
            w: 100,
            h: 100
        }



    }
    drawBackground() {

        //para dibujar en canvas se usa ctx.drawImage()
        //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth)
        this.ctx.drawImage(this.imageInstanceBack, 0, 0, this.canvasWidth, this.canvasHeight)

    }

    drawMidground() {

        this.ctx.drawImage(this.imageInstanceMid, -100 + (this.player.playerPos.x * 0.035), -100 + (this.player.playerPos.y * 0.035), this.canvasWidth + 200, this.canvasHeight + 200)
        //this.ctx.drawImage(this.imageInstanceMid, 0 - this.canvasWidth / 2 + this.player.playerSize.w / 2 + this.player.playerPos.x, 0, this.canvasWidth + 100, this.canvasHeight + 100)
    }
    drawSand() {

        this.ctx.drawImage(this.imageInstanceSand, -100 + (this.player.playerPos.x * 0.06), (-100 + this.canvasHeight / 2) + (this.player.playerPos.y * 0.06), this.canvasWidth + 200, this.canvasHeight / 2 + 300)
    }
}

