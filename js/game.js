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
    obstacle: undefined,
    obstaclesArray: [],
    obstaclesImgSrc: [],
    obstacleRate: [400, 450, 500],
    randomRate: 0,
    framesCounter: 0,
    intervalId: undefined,
    score: 0,
    speed: 1,
    imgPlayerSrc: 'octop.jpg',
    imgObstSrc: ['pixil-frame-0 (1).png', 'fish.jpg'],
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
        this.player.setEvents()
        this.background = new Background(this.ctx, this.canvasSize, this.background, this.speed, this.width, this.height, this.imgBackSrc)
        this.reward = new Rewards(this.ctx, this.canvasSize, this.reward, this.speed, this.width, this.height, this.player, this.imgRewrdSrc)
        this.interval = setInterval(() => {

            

            this.clearCanvas()

            this.createObstacles()

            this.detectCollisionPlayerObst()

            this.drawAll()

            this.setFrames()

            this.obstaclesArray.forEach(elm => elm.moveObst())

            
            //console.log(this.obstaclesArray)


        }, 1000 / this.FPS)

    },

    createObstacles() {

        this.chooseRandomFrame(this.obstacleRate)
        this.obstacle = new Obstacle(this.ctx, this.canvasSize, this.speed, this.width, this.height, this.imgObstSrc[Math.floor(Math.random() * this.imgObstSrc.length)])
        if (this.framesTotal % this.randomRate === 0) {


            this.obstaclesArray.push(this.obstacle)
        }
    },

    chooseRandomFrame(array) {

        return this.randomRate = array[Math.floor(Math.random() * array.length)]
    },

    detectCollisionPlayerObst() {

        // this.player.playerPos.x < this.obstacle.osbtPosition.bottom.x + this.obstacle.obstSize.vertical.w &&
        //     this.player.playerPos.x + this.player.playerSize.w > this.obstacle.osbtPosition.bottom.x &&
        //     this.player.playerPos.y < this.obstacle.osbtPosition.bottom.y + this.obstacle.obstSize.vertical.h &&
        //     this.player.playerPos.y + this.player.playerSize.h > this.obstacle.osbtPosition.bottom.y
        // console.log("Botton y", this.obstacle.osbtPosition.bottom.y)
        // console.log("Botton x", this.obstacle.osbtPosition.bottom.x)

          //console.log("player y", this.player.playerPos.x)
          //console.log("player x", this.player.playerPos.y)

        if (this.player.playerPos.y < this.obstacle.osbtPosition.bottom.y + this.obstacle.obstSize.vertical.h &&
            this.player.playerPos.y + this.player.playerSize.w > this.obstacle.osbtPosition.bottom.y &&
            this.player.playerPos.x < this.obstacle.osbtPosition.bottom.x + this.obstacle.obstSize.vertical.h &&
            this.player.playerPos.x + this.player.playerSize.h > this.obstacle.osbtPosition.bottom.x //||
            // this.player.playerPos.x < this.obstacle.osbtPosition.top.x + this.obstacle.obstSize.vertical.w &&
            // this.player.playerPos.x + this.player.playerSize.w > this.obstacle.osbtPosition.top.x &&
            // this.player.playerPos.y < this.obstacle.osbtPosition.top.y + this.obstacle.obstSize.vertical.h &&
            // this.player.playerPos.y + this.player.playerSize.h > this.obstacle.osbtPosition.top.y ||
            // this.player.playerPos.x < this.obstacle.osbtPosition.left.x + this.obstacle.obstSize.horizontal.w &&
            // this.player.playerPos.x + this.player.playerSize.w > this.obstacle.osbtPosition.left.x &&
            // this.player.playerPos.y < this.obstacle.osbtPosition.left.y + this.obstacle.obstSize.horizontal.h &&
            // this.player.playerPos.y + this.player.playerSize.h > this.obstacle.osbtPosition.left.y ||
            // this.player.playerPos.x < this.obstacle.osbtPosition.right.x + this.obstacle.obstSize.horizontal.w &&
            // this.player.playerPos.x + this.player.playerSize.w > this.obstacle.osbtPosition.right.x &&
            // this.player.playerPos.y < this.obstacle.osbtPosition.right.y + this.obstacle.obstSize.horizontal.h &&
            // this.player.playerPos.y + this.player.playerSize.h > this.obstacle.osbtPosition.right.y
        ) {

        console.log("colision")
           
            // The objects are touching
        } else {
           //console.log("NO")
        }

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