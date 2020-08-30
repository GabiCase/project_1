class Rewards {
    constructor(ctx, canvasSize, reward, speed, width, height, player, imgRewrdSrc) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.reward = reward
        this.speed = speed
        this.width = width
        this.height = height
        this.player = player
        this.imgRewrdSrc = imgRewrdSrc
        this.imageInstance = new Image()
        this.imageInstance.src = `./images/${this.imgRewrdSrc}`
        this.rewardSize = {
            w: 60,
            h: 50
        }
    }

    drawRewrd() {

        //para dibujar en canvas se usa ctx.drawImage()
        //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth)
        this.ctx.drawImage(this.imageInstance, this.width - 200, this.height - 200, this.rewardSize.w, this.rewardSize.h)

    }
}