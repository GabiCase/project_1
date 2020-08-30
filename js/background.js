class Background {
    constructor(ctx, canvasSize, background, speed, canvasWidth, canvasHeight, imgBackSrc) {
        this.ctx = ctx
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.background = background
        this.speed = speed
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.imgBackSrc = imgBackSrc
        this.imageInstance = new Image()
        this.imageInstance.src = `./images/${this.imgBackSrc}`
        this.canvasSize = {
            w: 100,
            h: 100
        }



    }
    drawBack() {

        //para dibujar en canvas se usa ctx.drawImage()
        //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth)
        this.ctx.drawImage(this.imageInstance, 0, 0)

    }
}