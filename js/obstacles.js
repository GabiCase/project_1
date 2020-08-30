class Obstacles {
    constructor(ctx, canvasSize, speed, canvasWidth, canvasHeight, imgObstSrc) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.speed = speed
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.imgObstSrc = imgObstSrc
        this.imageInstance = new Image()
        this.imageInstance.src = `./images/${this.imgObstSrc}`
        //Dentro de este array hay que hacer un push de un nuevo elemento
        //cada X segundos, siendo X un espectro predefinido
        this.obstacleArray = []
        //
        this.obstMaxSize = {
            w: 0,
            h: 0
        }
        this.obstMinSize = {
            w: 0,
            h: 0
        }
        // gap es la diferencia en segundos entre obstaculos
        this.obstMaxGap = 4

        this.obstMinGap = 2

        this.obstSize = {

            w: Math.floor(this.obstMinSize.w + Math.random() * (this.obstMaxSize.w)),
            h: Math.floor(this.obstMinSize.h + Math.random() * (this.obstMaxSize.h))
        }
    }
    // IGUAL ESTO HAY QUE MOVERLO DE SITIO
    // drawObst() {


    //     this.setSizeHorizontal()
    //     this.setSizeVertical()
    //     //para dibujar en canvas se usa ctx.drawImage()
    //     //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth)
    //     this.ctx.drawImage(this.imageInstance, this.canvasWidth - 650, this.canvasHeight - 300, this.obstSize.w, this.obstSize.h)
    //     console.log(this.canvasHeight)
    // }

    setSizeHorizontal() {
        this.obstMaxSize.w = 100
        this.obstMaxSize.h = 30
        this.obstMinSize.w = 80
        this.obstMinSize.h = 20
    }
    setSizeVertical() {
        this.obstMaxSize.w = 30
        this.obstMaxSize.h = 100
        this.obstMinSize.w = 20
        this.obstMinSize.h = 80
    }




    moveObstFromRight() {
        this.obstacleArray[0].x -= 1

    }

    drawObst() {
        this.drawObstHorizontal()
        this.drawObstVertical()

    }

    drawObstHorizontal() {
        console.log("primera")
    }

    drawObstVertical() {}






}

class ObsFromRight extends Obstacles {
    constructor(ctx, canvasSize, speed, canvasWidth, canvasHeight, obstMaxGap, obstMinGap, obstMinSize, obstMaxSize) {
        super(ctx, canvasSize, speed, canvasWidth, canvasHeight, obstMaxGap, obstMinGap, obstMinSize, obstMaxSize)
        this.originSide = "right"


    }

    drawObstHorizontal() {
        console.log("segunda")
        this.setSizeHorizontal()

        this.ctx.drawImage(this.imageInstance, this.canvasWidth - 650, this.canvasHeight - 300, this.obstSize.w, this.obstSize.h)
        console.log(this.canvasHeight)
    }

}
class ObsFromLeft extends Obstacles {
    constructor(ctx, canvasSize, speed, canvasWidth, canvasHeight, obstMaxGap, obstMinGap, obstMinSize, obstMaxSize) {
        super(ctx, canvasSize, speed, canvasWidth, canvasHeight, obstMaxGap, obstMinGap, obstMinSize, obstMaxSize)
        this.originSide = "left"


    }
    drawObstHorizontal() {

        this.setSizeHorizontal()


        this.ctx.drawImage(this.imageInstance, this.canvasWidth - 650, this.canvasHeight - 300, this.obstSize.w, this.obstSize.h)
        console.log(this.canvasHeight)
    }
}
class ObsFromTop extends Obstacles {
    constructor(ctx, canvasSize, speed, canvasWidth, canvasHeight, obstMaxGap, obstMinGap, obstMinSize, obstMaxSize) {
        super(ctx, canvasSize, speed, canvasWidth, canvasHeight, obstMaxGap, obstMinGap, obstMinSize, obstMaxSize)
        this.originSide = "top"


    }

    drawObstVertical() {

        this.setSizeVertical()

        this.ctx.drawImage(this.imageInstance, this.canvasWidth - 650, this.canvasHeight - 300, this.obstSize.w, this.obstSize.h)
        console.log(this.canvasHeight)
    }

}
class ObsFromBottom extends Obstacles {
    constructor(ctx, canvasSize, speed, canvasWidth, canvasHeight, obstMaxGap, obstMinGap, obstMinSize, obstMaxSize) {
        super(ctx, canvasSize, speed, canvasWidth, canvasHeight, obstMaxGap, obstMinGap, obstMinSize, obstMaxSize)
        this.originSide = "right"


    }
    drawObstVertical() {

        this.setSizeVertical()

        this.ctx.drawImage(this.imageInstance, this.canvasWidth - 650, this.canvasHeight - 300, this.obstSize.w, this.obstSize.h)
        console.log(this.canvasHeight)
    }

}