class Obstacle {
    constructor(ctx, canvasSize, speed, canvasWidth, canvasHeight, imgObstSrc) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.speed = speed
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        // gap es la diferencia en segundos entre obstaculos,
        //igual no es necesaria
        this.obstMaxGap = 4
        this.obstMinGap = 2
        this.imgObstSrc = imgObstSrc
        this.imageInstance = new Image()
        this.imageInstance.src = `./images/${this.imgObstSrc}`

        //Dentro de este array hay que hacer un push de un nuevo elemento
        //cada X segundos, siendo X un espectro predefinido
        this.obstacleArray = []
        //
      
        this.obstSize = {


            w: canvasWidth / 10,
            h: canvasWidth / 10


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

    // DIBUJAR TODOS LLAMA A DIBUJAR A CADA UNO
    //ahora mismo se están dibujando en lugares aleatorios pegados al canvas 
    //por fuera, por eso no se ven
    drawObst() {
        this.drawObstFromBottom()
        this.drawObstFromLeft()
        this.drawObstFromRight()
        this.drawObstFromTop()
    }




    //FUNCIONES DE DIBUJAR DEPENDIENDO DEL ORIGEN
    drawObstFromBottom() {

        this.ctx.drawImage(this.imageInstance, this.obstPosition.bottom.x, this.obstPosition.bottom.y, this.obstSize.w, this.obstSize.h)

    }

    drawObstFromTop() {

        this.ctx.drawImage(this.imageInstance, this.obstPosition.top.x, this.obstPosition.top.y, this.obstSize.w, this.obstSize.h)

    }

    drawObstFromRight() {

        this.ctx.drawImage(this.imageInstance, this.obstPosition.right.x, this.obstPosition.right.y, this.obstSize.w, this.obstSize.h)

    }

    drawObstFromLeft() {

        this.ctx.drawImage(this.imageInstance, this.obstPosition.left.x, this.obstPosition.left.y, this.obstSize.w, this.obstSize.h)

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