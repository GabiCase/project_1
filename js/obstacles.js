class Obstacle {
    constructor(ctx, canvasSize, speed, canvasWidth, canvasHeight, imgObstSrc) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.speed = speed
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.imgObstSrc = imgObstSrc
        this.imageInstance = new Image()
        this.imageInstance.src = `./sprites/${this.imgObstSrc}`
        this.colorRate = [0, 3, 6, 9]
        this.imageInstance.columns = 12 // No tocar
        this.imageInstance.rows = 8 //No tocar
        this.imageInstance.framesIndex = 0
        this.imageInstance.frames = 3
        this.imageInstance.framesY = 0
        this.imageInstance.numeroColumnaBot = this.colorRate[Math.floor(Math.random() * this.colorRate.length)]
        this.imageInstance.numeroColumnaTop = this.colorRate[Math.floor(Math.random() * this.colorRate.length)]
        this.imageInstance.numeroColumnaLef = this.colorRate[Math.floor(Math.random() * this.colorRate.length)]
        this.imageInstance.numeroColumnaRig = this.colorRate[Math.floor(Math.random() * this.colorRate.length)]
        this.imageInstance.width = 576
        this.imageInstance.height = 384
        this.obstacleArray = []

        this.obstSize = {
            w: 100,
            h: 100
        }
        this.obstPosition = {
            bottom: {
                x: Math.floor(Math.random() * (this.canvasWidth)),
                y: this.canvasHeight
            },
            top: {
                x: Math.floor(Math.random() * (this.canvasWidth)),
                y: 0 - this.obstSize.h
            },
            left: {
                x: 0 - this.obstSize.w,
                y: Math.floor(Math.random() * (this.canvasHeight))
            },
            right: {
                x: this.canvasWidth,
                y: Math.floor(Math.random() * (this.canvasHeight))
            },
        }
    }



    drawObst(framesCounter) {
        this.drawObstFromBottom(framesCounter)
        this.drawObstFromLeft(framesCounter)
        this.drawObstFromRight(framesCounter)
        this.drawObstFromTop(framesCounter)
    }


    drawObstFromBottom(framesCounter) {
        const framesx = this.imageInstance.framesIndex
        const sx = (this.imageInstance.width / this.imageInstance.columns * this.imageInstance.numeroColumnaBot) + framesx * (this.imageInstance.width / this.imageInstance.columns)
        const sy = this.imageInstance.height / 8 * 3
        const sWidth = this.imageInstance.width / this.imageInstance.columns
        const sHeight = this.imageInstance.height / this.imageInstance.rows

        this.ctx.drawImage(this.imageInstance,
            sx,
            sy,
            sWidth,
            sHeight,
            this.obstPosition.bottom.x,
            this.obstPosition.bottom.y,
            this.obstSize.w,
            this.obstSize.h)

        this.animateBottom(framesCounter)


    }

    animateBottom(framesCounter) {

        console.log(framesCounter)

        if (framesCounter % 15 == 0) {
            this.imageInstance.framesIndex++;

        }
        if (this.imageInstance.framesIndex > this.imageInstance.frames - 1) {
            this.imageInstance.framesIndex = 0;
        }
    }
    drawObstFromTop(framesCounter) {

        const framesx = this.imageInstance.framesIndex
        const sx = (this.imageInstance.width / this.imageInstance.columns * this.imageInstance.numeroColumnaTop) + framesx * (this.imageInstance.width / this.imageInstance.columns)
        const sy = this.imageInstance.height / 8 * 0
        const sWidth = this.imageInstance.width / this.imageInstance.columns
        const sHeight = this.imageInstance.height / this.imageInstance.rows


        this.ctx.drawImage(this.imageInstance,
            sx,
            sy,
            sWidth,
            sHeight,
            this.obstPosition.top.x,
            this.obstPosition.top.y,
            this.obstSize.w,
            this.obstSize.h)
        this.animateTop(framesCounter)
    }
    animateTop(framesCounter) {

        console.log(framesCounter)

        if (framesCounter % 15 == 0) {
            this.imageInstance.framesIndex++;

        }
        if (this.imageInstance.framesIndex > this.imageInstance.frames - 1) {
            this.imageInstance.framesIndex = 0;
        }
    }

    drawObstFromRight(framesCounter) {

        const framesx = this.imageInstance.framesIndex
        const sx = (this.imageInstance.width / this.imageInstance.columns * this.imageInstance.numeroColumnaRig) + framesx * (this.imageInstance.width / this.imageInstance.columns)
        const sy = this.imageInstance.height / 8 * 1
        const sWidth = this.imageInstance.width / this.imageInstance.columns
        const sHeight = this.imageInstance.height / this.imageInstance.rows

        this.ctx.drawImage(this.imageInstance,
            sx,
            sy,
            sWidth,
            sHeight,
            this.obstPosition.right.x,
            this.obstPosition.right.y,
            this.obstSize.w,
            this.obstSize.h)

        this.animateRight(framesCounter)
    }

    animateRight(framesCounter) {

        console.log(framesCounter)

        if (framesCounter % 15 == 0) {
            this.imageInstance.framesIndex++;

        }
        if (this.imageInstance.framesIndex > this.imageInstance.frames - 1) {
            this.imageInstance.framesIndex = 0;
        }
    }

    drawObstFromLeft(framesCounter) {

        const framesx = this.imageInstance.framesIndex
        const sx = (this.imageInstance.width / this.imageInstance.columns * this.imageInstance.numeroColumnaLef) + framesx * (this.imageInstance.width / this.imageInstance.columns)
        const sy = this.imageInstance.height / 8 * 2
        const sWidth = this.imageInstance.width / this.imageInstance.columns
        const sHeight = this.imageInstance.height / this.imageInstance.rows



        this.ctx.drawImage(this.imageInstance,
            sx,
            sy,
            sWidth,
            sHeight,
            this.obstPosition.left.x,
            this.obstPosition.left.y,
            this.obstSize.w,
            this.obstSize.h)

        this.animateLeft(framesCounter)
    }

    animateLeft(framesCounter) {

        console.log(framesCounter)

        if (framesCounter % 15 == 0) {
            this.imageInstance.framesIndex++;

        }
        if (this.imageInstance.framesIndex > this.imageInstance.frames - 1) {
            this.imageInstance.framesIndex = 0;
        }
    }



    moveObst() {
        this.moveFromBottom()
        this.moveFromTop()
        this.moveFromRight()
        this.moveFromLeft()
    }
    moveFromBottom() {
        this.obstPosition.bottom.y -= this.speed
    }
    moveFromTop() {
        this.obstPosition.top.y += this.speed
    }
    moveFromLeft() {
        this.obstPosition.left.x += this.speed
    }
    moveFromRight() {
        this.obstPosition.right.x -= this.speed
    }
}