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
        this.obstMaxSize = {
            w: 100,
            h: 100
        }
        this.obstMinSize = {
            w: 100,
            h: 100
        }
        this.obstSize = {
            vertical: {
                w: Math.floor(this.obstMinSize.w + Math.random() * (this.obstMaxSize.w)),
                h: Math.floor(this.obstMinSize.h + Math.random() * (this.obstMaxSize.h))
            },
            horizontal: {
                w: Math.floor(this.obstMinSize.w + Math.random() * (this.obstMaxSize.w)),
                h: Math.floor(this.obstMinSize.h + Math.random() * (this.obstMaxSize.h))
            }

        }
        this.osbtPosition = {
            bottom: {
                x: Math.floor(Math.random() * (this.canvasWidth)),
                y: this.canvasHeight
            },
            top: {
                x: Math.floor(Math.random() * (this.canvasWidth)),
                y: 0
            },
            left: {
                x: 0,
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
        
        this.ctx.drawImage(this.imageInstance, this.osbtPosition.bottom.x, this.osbtPosition.bottom.y, this.obstSize.vertical.w / 2, this.obstSize.vertical.h)
        
    }
    
    drawObstFromTop() {
        
        this.ctx.drawImage(this.imageInstance, this.osbtPosition.top.x, (this.osbtPosition.top.y) - (this.obstSize.vertical.h), this.obstSize.vertical.w / 2, this.obstSize.vertical.h)
        
    }
    
    drawObstFromRight() {
        
        this.ctx.drawImage(this.imageInstance, this.osbtPosition.right.x, this.osbtPosition.right.y, this.obstSize.horizontal.w, this.obstSize.horizontal.h / 2)
        
    }
    
    drawObstFromLeft() {
        
        this.ctx.drawImage(this.imageInstance, (this.osbtPosition.left.x) - (this.obstSize.horizontal.w), this.osbtPosition.left.y, this.obstSize.horizontal.w, this.obstSize.horizontal.h / 2)
        
    }
    
    moveObst() {
        this.moveFromBottom()
        this.moveFromTop()
        this.moveFromRight()
        this.moveFromLeft()
    }
    
    moveFromBottom() {
        this.osbtPosition.bottom.y -= this.speed
    }
    moveFromTop() {
        this.osbtPosition.top.y += this.speed
    }
    moveFromLeft() {
        this.osbtPosition.left.x += this.speed
    }
    moveFromRight() {
        this.osbtPosition.right.x -= this.speed
    }
    
    
    
    
}


    //FUNCIONES PARA CONTROLAR EL TAMAÑO

    // setLimitHorizontal() {
    //     this.obstMaxSize.w = 100
    //     this.obstMaxSize.h = 30
    //     this.obstMinSize.w = 80
    //     this.obstMinSize.h = 20
    // }
    // setLimitVertical() {
    //     this.obstMaxSize.w = 30
    //     this.obstMaxSize.h = 100
    //     this.obstMinSize.w = 20
    //     this.obstMinSize.h = 80
    // }


    // setSizeObst(originSide) {
    //     switch (originSide) {
    //         case this.originSide === "right":

    //             setLimitHorizontal();
    //             //como consecuencia:
    //             //   this.obstMaxSize.w = 100
    //             //   this.obstMaxSize.h = 30
    //             //   this.obstMinSize.w = 80
    //             //   this.obstMinSize.h = 20;
    //             break;
    //         case this.originSide === "left":
    //             setLimitHorizontal();
    //             break;
    //         case this.originSide === "top":
    //             setLimitVertical();
    //             break;
    //         case this.originSide === "bottom":
    //             setLimitVertical();
    //             break;

    //     }

    // }