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
    loseMessageId: undefined,
    canvasWidth: undefined,
    canvasHeight: undefined,
    player: undefined,
    counter: 0,
    counterImgSrc: undefined,
    reward: undefined,
    rewardsArray: [],
    rewardImgSrc: [],
    background: undefined,
    obstacle: undefined,
    obstaclesArray: [],
    obstaclesImgSrc: [],
    rate: [400, 450, 500],
    bottomPosition: undefined,
    topPosition: undefined,
    leftPosition: undefined,
    rightPosition: undefined,
    randomRate: 0,
    randomNum: 0,
    framesCounter: 0,
    interval: undefined,
    intervalScore: undefined,
    score: 0,
    speed: 1,
    imgPlayerSrc: 'octop.jpg',
    imgObstSrc: ['pixil-frame-0 (1).png', 'fishGif.gif'],
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


        this.intervalScore = setInterval(() => {

            this.setScore()

        }, 20000 / this.FPS)


        this.interval = setInterval(() => {



            this.clearCanvas()

            this.createObstacles()

            this.createRewards()

            this.pruebaReward()

            this.drawAll()

            this.setFrames()

            this.writeScore()

            this.detectCollisionPlayerObst()

            this.clearArray()

            this.obstaclesArray.forEach(elm => elm.moveObst())





        }, 1000 / this.FPS)



    },

    createRewards() {

        if (this.rewardsArray.length < 1) {
            this.reward = new Reward(this.ctx, this.width, this.height, this.reward, this.speed, this.player, this.imgRewrdSrc, this.counter)
            this.rewardsArray.push(this.reward)
        }




        // this.chooseRandomFrame(this.rate)

        // if (this.framesTotal % this.randomRate === 0) {
        //     this.reward = new Reward(this.ctx, this.canvasSize, this.reward, this.speed, this.player, this.imgRewrdSrc, this.counter)
        //     this.rewardsArray.push(this.reward)
        // }

    },

    createObstacles() {

        this.chooseRandomFrame(this.rate)

        if (this.framesTotal % this.randomRate === 0) {
            this.obstacle = new Obstacle(this.ctx, this.canvasSize, this.speed, this.width, this.height, this.imgObstSrc[Math.floor(Math.random() * this.imgObstSrc.length)])

            this.obstaclesArray.push(this.obstacle)
        }

    },

    chooseRandomFrame(array) {

        return this.randomRate = array[Math.floor(Math.random() * array.length)]
    },

    drawAll() {
        this.background.drawBackground()
        this.background.drawMidground()
        this.background.drawSand()

        this.player.drawPlayer()
        this.obstaclesArray.forEach(elm => elm.drawObst())
        this.rewardsArray.forEach(elm => elm.drawRewrd())
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

    pruebaReward() {
        const plaPos = this.player.playerPos
        const plaSize = this.player.playerSize

        if (plaPos.x < this.rewardsArray[0].rewaPosition.x + this.rewardsArray[0].rewardSize.w &&
            plaPos.x + plaSize.w > this.rewardsArray[0].rewaPosition.x &&
            plaPos.y < this.rewardsArray[0].rewaPosition.y + this.rewardsArray[0].rewardSize.h &&
            plaPos.y + plaSize.h > this.rewardsArray[0].rewaPosition.y) {


            const randomNum = Math.random() * (5 - 1) + 1


            if (randomNum >= 4) {

                this.reward.addPoints()
                this.disappearReward()
                console.log("points")
            } else if (randomNum >= 4) {
                this.reward.notDie()
                this.disappearReward()
                console.log("speed")
            } else if (randomNum >= 2) {
                this.reward.increaseSpeed()
                this.disappearReward()
                console.log("speed")
            }
            
            
            else {
                this.reward.enlargePlayer()
                this.disappearReward()
                console.log("player")
            }




        }


    },

    disappearReward() {
        this.rewardsArray.shift()
    },


    clearCanvas() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },

    clearArray() {

        if (this.obstaclesArray[0].obstPosition.bottom.y +
            this.obstaclesArray[0].obstSize.h < 0 &&
            this.obstaclesArray[0].obstPosition.top.y >
            this.canvasDom.height &&
            this.obstaclesArray[0].obstPosition.left.x >
            this.canvasDom.width &&
            this.obstaclesArray[0].obstPosition.right.x +
            this.obstaclesArray[0].obstSize.w < 0

        ) {
            this.obstaclesArray.shift()
        }

    }

    ,
    stopGame() {


        clearInterval(this.interval)

        clearInterval(this.intervalScore)
    },

    raiseScore() {

        this.counter += 1


    },

    setScore() {

        setInterval(

            this.raiseScore(), 100
        )

    },

    setLoseMessage() {

        document.querySelector(".lose").innerHTML = `Your score was ${this.counter}`

    },

    //NO SÉ POR QUÉ NO SE ESCRIBE ESTE

    loseGame() {

        this.stopGame()

    },

    writeScore() {
        this.ctx.font = "20px  Alata"
        this.ctx.fillStyle = "white"
        this.ctx.shadowColor = "black"
        this.ctx.shadowBlur = 7;
        this.ctx.fillText(`${this.counter}`, 20, 40)
        this.ctx.shadowBlur = 0

        // this.ctx.font = "bold 480px serif"
        // this.ctx.fillStyle = "white"
        // this.ctx.fillText(`Score of ${this.counter}`, this.canvasWidth / 2, this.canvasHeight / 2)

    },



    changeAudio() {

    }

}
//esto está aquí para ir probándolo, luego hay que meterlo en index.js
Game.initGame()