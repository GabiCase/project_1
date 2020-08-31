const Game = {
    name: '散歩にタコ', // en Japones jajaja
    description: 'Tako de paseo', // modificable :))
    version: '1.0.0',
    author: 'Gabriela Casero & Melissa Meléndez Zamora',
    license: undefined,
    canvasDom: undefined,
    ctx: undefined,
    FPS: 60,
    framesTotal: 0,
    framesMax: 5000,
    player: undefined,
    counter: undefined,
    counterImgSrc: undefined,
    reward: undefined,
    rewardImgSrc: [],
    background: undefined,
    obstaclesArray: [],
    obstaclesImgSrc: [],
    obstacleRate: [350, 400, 450],
    randomRate: 0,
    framesCounter: 0,
    intervalId: undefined,
    score: 0,
    speed: 1,
    imgPlayerSrc: 'octop.jpg',
    imgObstSrc: ['fish.jpg'],
    imgBackSrc: 'backg.jpg',
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

        this.background = new Background(this.ctx, this.canvasSize, this.background, this.speed, this.width, this.height, this.imgBackSrc)
        this.reward = new Rewards(this.ctx, this.canvasSize, this.reward, this.speed, this.width, this.height, this.player, this.imgRewrdSrc)
        this.interval = setInterval(() => {
            //this.obstaclesArray.forEach(obstacle => obstacle.drawObst())
            this.clearCanvas()
            this.createObstacles()
            this.drawAll()
            this.setFrames()
            this.player.setEvents()
            this.obstaclesArray.forEach(elm => elm.moveObst())
            this.move()



            console.log(this.randomRate)
            //this.framesTotal = this.framesTotal > 5000? this.framesTotal = 0 : this.framesTotal++


        }, 1000 / this.FPS)
        //-------------------------------
        // aquí en los FPS y el setInterval hay cosas que no entendemos, 
        // controla la velocidad del juego, y cada cuánto salen los obstáclos,
        //y qué más ? Y cómo se establece? Simplemente aumenta 60 cada  segundo?
        //-------------------------------
    },






    // createObstacles() {
    //     // dudas con esto!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //     //

    //     //From Right
    //     this.obstacle.push(new Obstacle(this.ctx,
    //         this.speed,
    //         this.canvasWidth,
    //         this.canvasHeight,
    //         obstMaxGap,
    //         obstMinGap,
    //         obstMinSize,
    //         obstMaxSize,
    //         obsStartingPoint,
    //         setSizeHorizontal))

    //     //From Left
    //     this.obstacle.push(new Obstacle(this.ctx,
    //         this.speed,
    //         this.canvasWidth,
    //         this.canvasHeight,
    //         obstMaxGap,
    //         obstMinGap,
    //         obstMinSize,
    //         obstMaxSize,
    //         obsStartingPoint,
    //         setSizeHorizontal))

    //     //From top
    //     this.obstacle.push(new Obstacle(this.ctx,
    //         this.speed,
    //         this.canvasWidth,
    //         this.canvasHeight,
    //         obstMaxGap,
    //         obstMinGap,
    //         obstMinSize,
    //         obstMaxSize,
    //         obsStartingPoint,
    //         setSizeHorizontal))

    //     //From bottom
    //     this.obstacle.push(new Obstacle(this.ctx,
    //         this.speed,
    //         this.canvasWidth,
    //         this.canvasHeight,
    //         obstMaxGap,
    //         obstMinGap,
    //         obstMinSize,
    //         obstMaxSize,
    //         obsStartingPoint,
    //         setSizeHorizontal))

    // },



    createObstacles() {

        this.chooseRandomFrame(this.obstacleRate)
        if (this.framesTotal % this.randomRate === 0) {
            this.obstaclesArray.push(new Obstacle(this.ctx, this.canvasSize, this.speed, this.width, this.height, this.imgObstSrc))
        }
    },

    chooseRandomFrame(array) {

        return this.randomRate = array[Math.floor(Math.random() * array.length)]
    },


    drawAll() {
        this.background.drawBack()
        this.player.drawPlayer()
        this.obstaclesArray.forEach(elm => elm.drawObst())
        this.reward.drawRewrd()
    },

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

}


//esto está aquí para ir probándolo, luego hay que meterlo en index.js
Game.initGame()