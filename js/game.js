const Game = {
    name: '散歩にタコ', // en Japones jajaja
    description: 'Tako de paseo', // modificable :))
    version: '1.0.0',
    author: 'Gabriela Casero & Melissa Meléndez Zamora',
    license: undefined,
    canvasDom: {
        width: 0,
        height: 0
    },
    ctx: undefined,
    FPS: 60,
    framesTotal: 0,
    framesMax: 5000,
    canvasWidth: undefined,
    canvasHeight: undefined,
    player: this.player,
    counter: 0,
    counterImgSrc: undefined,
    reward: undefined,
    rewardImgSrc: [],
    background: undefined,
    obstacle: undefined,
    obstaclesArray: [],
    obstaclesImgSrc: [],
    obstacleRate: [400, 450, 500],
    bottomPosition: undefined,
    topPosition: undefined,
    leftPosition: undefined,
    rightPosition: undefined,
    randomRate: 0,
    framesCounter: 0,
    intervalId: undefined,
    score: 0,
    speed: 1,
    imgPlayerSrc: 'octop.jpg',
    imgObstSrc: ['pixil-frame-0 (1).png', 'fish.jpg'],
    imgBackSrc: ["background.png", "midground.png", "foregound-merged.png"],
    imgRewrdSrc: ['reward.jpg'],
    width: undefined,
    height: undefined,
    canvasReward: undefined,

    keys: {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39

    },

    initGame() {
        this.canvasDom = document.getElementById("myCanvas")
        this.ctx = this.canvasDom.getContext("2d")
        this.setDimensions()
        this.startGame()

    },
    setDimensions() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvasDom.width = this.width;
        this.canvasDom.height = this.height;
    },

    setFrames() {
        this.framesTotal > this.framesMax ? this.framesTotal = 0 : this.framesTotal++
    },

    startGame() {

        this.player = new Player(this.ctx, this.canvasSize, this.keys, this.speed, this.width, this.height, this.imgPlayerSrc)
        this.player.setEvents()
        this.background = new Background(this.ctx, this.canvasSize, this.background, this.speed, this.width, this.height, this.imgBackSrc, this.player)
        this.reward = new Rewards(this.ctx, this.canvasSize, this.reward, this.speed, this.width, this.height, this.player, this.imgRewrdSrc)

        this.interval = setInterval(() => {

            this.setScore()

            this.clearCanvas()

            this.createObstacles()

            this.drawAll()

            this.setFrames()

            this.detectCollisionPlayerObst()

            this.obstaclesArray.forEach(elm => elm.moveObst())

            //this.clearArray()

            console.log(this.obstaclesArray.length)



        }, 1000 / this.FPS)

        

    },

    createObstacles() {

        this.chooseRandomFrame(this.obstacleRate)

        if (this.framesTotal % this.randomRate === 0) {
            this.obstacle = new Obstacle(this.ctx, this.canvasSize, this.speed, this.width, this.height, this.imgObstSrc[Math.floor(Math.random() * this.imgObstSrc.length)])

            this.obstaclesArray.push(this.obstacle)
        }

    },



    chooseRandomFrame(array) {

        return this.randomRate = array[Math.floor(Math.random() * array.length)]
    },


    detectCollisionPlayerObst() {
        this.obstaclesArray.forEach(elm => {

            const oSize = elm.obstSize

            const bottomPosition = elm.obstPosition.bottom
            const topPosition = elm.obstPosition.top
            const leftPosition = elm.obstPosition.left
            const rightPosition = elm.obstPosition.right

            const plaPos = this.player.playerPos
            const plaSize = this.player.playerSize


            if (plaPos.x < bottomPosition.x + oSize.w &&
                plaPos.x + plaSize.w > bottomPosition.x &&
                plaPos.y < bottomPosition.y + oSize.h &&
                plaPos.y + plaSize.h > bottomPosition.y) {

                this.loseGame()

            } else if (

                plaPos.x < topPosition.x + oSize.w &&
                plaPos.x + plaSize.w > topPosition.x &&
                plaPos.y < topPosition.y + oSize.h &&
                plaPos.y + plaSize.h > topPosition.y) {

                this.loseGame()

            } else if (

                plaPos.x < leftPosition.x + oSize.w &&
                plaPos.x + plaSize.w > leftPosition.x &&
                plaPos.y < leftPosition.y + oSize.h &&
                plaPos.y + plaSize.h > leftPosition.y) {


                this.loseGame()

            } else if (

                plaPos.x < rightPosition.x + oSize.w &&
                plaPos.x + plaSize.w > rightPosition.x &&
                plaPos.y < rightPosition.y + oSize.h &&
                plaPos.y + plaSize.h > rightPosition.y) {

                this.loseGame()

            }
        })
    },




    drawAll() {
        this.background.drawBackground()
        this.background.drawMidground()
        this.background.drawSand()

        this.player.drawPlayer()
        this.obstaclesArray.forEach(elm => elm.drawObst())
        this.reward.drawRewrd()
    },

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },

    // clearArray() {

    //     if (this.obstaclesArray[0].obstPosition.bottom.y +
    //         this.obstaclesArray[0].obstSize.h < 0 &&
    //         this.obstaclesArray[0].obstPosition.top.y >
    //         this.canvasDom.height &&
    //         this.obstaclesArray[0].obstPosition.left.x >
    //         this.canvasDom.width &&
    //         this.obstaclesArray[0].obstPosition.right.x +
    //         this.obstaclesArray[0].obstSize.w < 0

    //     ) {
    //         this.obstaclesArray.pop()
    //     }

    // }


    // clearArray() {

    //     this.obstaclesArray.length >= 6 ? this.obstaclesArray.shift()  : null


    // },



    // this.obstaclesArray[0].forEach(elm => {


    //     const oSize = elm.obstSize

    //     const bottomPosition = elm.obstPosition.bottom
    //     const topPosition = elm.obstPosition.top
    //     const leftPosition = elm.obstPosition.left
    //     const rightPosition = elm.obstPosition.right

    //     if (

    //         leftPosition.x > this.canvasDom.width ||
    //         rightPosition.x + oSize < 0
    //     ) {
    //         this.obstaclesArray.pop()
    //     }

    // })




    // // this.obstaclesArray.forEach(elm => {
    // //     const oSize = elm.obstSize

    // //     const bottomPosition = elm.obstPosition.bottom
    // //     const topPosition = elm.obstPosition.top
    // //     const leftPosition = elm.obstPosition.left
    // //     const rightPosition = elm.obstPosition.right

    // //     if (
    // //         bottomPosition.y + oSize < 0 &&
    // //         topPosition.y > this.canvasDom.height &&
    // //         leftPosition.x > this.canvasDom.width &&
    // //         rightPosition.x + oSize < 0
    // //     ) {
    // //         this.obstaclesArray.pop()
    // //     }


    // // })


    stopGame() {
        clearInterval(this.interval)
    },

    raiseScore() {

        this.counter += 1
        return console.log(`tienes ${this.counter} puntos`)

    },

    setScore() {

        setInterval(

            this.raiseScore(), 100
        )

    },

    loseGame() {
        this.stopGame()
        //aquí tiene que salir algún mensaje
        document.querySelector("end-message .lose")
        //poner cuántos puntos has conseguido con innerHTML

    },

    backgroundParallax() {
        this.player.plaPos.x

    }


}
//esto está aquí para ir probándolo, luego hay que meterlo en index.js
Game.initGame()