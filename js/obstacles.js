class Obstacle {
    constructor(ctx, canvasSize, speed, canvasWidth, canvasHeight, imgObstSrc) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.speed = speed
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.obstMaxGap = 4
        this.obstMinGap = 2
        this.imgObstSrc = imgObstSrc
        this.imageInstance = new Image()
        this.imageInstance.src = `./images/${this.imgObstSrc}`
        this.obsStartingPoint = {
            w: 0,
            x: 0
        }
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

    setLimitHorizontal() {
        this.obstMaxSize.w = 100
        this.obstMaxSize.h = 30
        this.obstMinSize.w = 80
        this.obstMinSize.h = 20
    }
    setLimitVertical() {
        this.obstMaxSize.w = 30
        this.obstMaxSize.h = 100
        this.obstMinSize.w = 20
        this.obstMinSize.h = 80
    }




    // moveObstFromRight() {
    //     this.obstacleArray[0].x -= 1

    // }



    setSizeObst(originSide) {
        switch (originSide) {
            case this.originSide === "right":

                setLimitHorizontal();
                //como consecuencia:
                //   this.obstMaxSize.w = 100
                //   this.obstMaxSize.h = 30
                //   this.obstMinSize.w = 80
                //   this.obstMinSize.h = 20;
                break;
            case this.originSide === "left":
                setLimitHorizontal();
                break;
            case this.originSide === "top":
                setLimitVertical();
                break;
            case this.originSide === "bottom":
                setLimitVertical();
                break;

        }

    }









}

class ObsFromRight extends Obstacle {
    constructor(ctx, speed, canvasWidth, canvasHeight, obstMaxGap, obstMinGap, obstMinSize, obstMaxSize, obsStartingPoint, setSizeHorizontal) {
        super(ctx, speed, canvasWidth, canvasHeight, obstMaxGap, obstMinGap, obstMinSize, obstMaxSize, obsStartingPoint, setSizeHorizontal)
        this.originSide = "right"
    }
    //--------------------------------------------
    //Como puedo llamar a this.originSide en el argumento de setSize?
    //---------------------------------------------
    drawObst() {
        setSizeObst(this.originSide)
        this.ctx.drawImage(this.imageInstance, this.obsStartingPoint.w, this.obsStartingPoint.y, this.obstSize.w, this.obstSize.h)
        console.log(this.canvasHeight)

    }



}
class ObsFromLeft extends Obstacles {
    constructor(ctx, canvasSize, speed, canvasWidth, canvasHeight, obstMaxGap, obstMinGap, obstMinSize, obstMaxSize, obsStartingPoint, setSizeHorizontal) {
        super(ctx, canvasSize, speed, canvasWidth, canvasHeight, obstMaxGap, obstMinGap, obstMinSize, obstMaxSize, drawObst, obsStartingPoint, setSizeHorizontal)
        this.originSide = "left"


    }
    drawObst() {
        setSizeObst(this.originSide)
        this.ctx.drawImage(this.imageInstance, this.obsStartingPoint.w, this.obsStartingPoint.y, this.obstSize.w, this.obstSize.h)
        console.log(this.canvasHeight)

    }
}
class ObsFromTop extends Obstacles {
    constructor(ctx, canvasSize, speed, canvasWidth, canvasHeight, obstMaxGap, obstMinGap, obstMinSize, obstMaxSize, obsStartingPoint, setSizeVertical) {
        super(ctx, canvasSize, speed, canvasWidth, canvasHeight, obstMaxGap, obstMinGap, obstMinSize, obstMaxSize, obsStartingPoint, setSizeVertical)
        this.originSide = "top"


    }

    drawObst() {
        setSizeObst(this.originSide)
        this.ctx.drawImage(this.imageInstance, this.obsStartingPoint.w, this.obsStartingPoint.y, this.obstSize.w, this.obstSize.h)
        console.log(this.canvasHeight)

    }

}
class ObsFromBottom extends Obstacles {
    constructor(ctx, canvasSize, speed, canvasWidth, canvasHeight, obstMaxGap, obstMinGap, obstMinSize, obstMaxSize, obsStartingPoint, setSizeVertical) {
        super(ctx, canvasSize, speed, canvasWidth, canvasHeight, obstMaxGap, obstMinGap, obstMinSize, obstMaxSize, obsStartingPoint, setSizeVertical)
        this.originSide = "bottom"


    }
    drawObst() {
        setSizeObst(this.originSide)
        this.ctx.drawImage(this.imageInstance, this.obsStartingPoint.w, this.obsStartingPoint.y, this.obstSize.w, this.obstSize.h)
        console.log(this.canvasHeight)

    }

}