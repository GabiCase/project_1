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
    gameOver: false,
    counter: 0,
    counterImgSrc: undefined,
    reward: undefined,
    rewardsArray: [],
    rewardImgSrc: [],
    rewardInmortal: false,
    rewardText: "",
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
    imgPlayerSrc: 'muñeco.png',
    imgObstSrc: ['peces1redon.png'],
    imgBackSrc: ["background.png", "midground.png", "foregound-merged.png"],
    imgRewrdSrc: ['reward.png'],
    width: undefined,
    height: undefined,
    canvasReward: undefined,
    // audio: {
    //     start: new Audio("./audio/start.wav")

    // },
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
        this.reset()

    },

    reset() {
        this.obstaclesArray = []
        this.score = 0
        this.gameOver = false
        this.startGame()


    },
    setDimensions() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvasDom.width = this.width;
        this.canvasDom.height = this.height;
    },

    setFrames() {
        this.framesTotal > this.framesMax ? this.framesTotal = 1 : this.framesTotal++
    },



    startGame() {

        this.player = new Player(this.ctx, this.canvasSize, this.keys, this.speed, this.width, this.height, this.imgPlayerSrc)
        this.player.setEvents()
        this.background = new Background(this.ctx, this.canvasSize, this.background, this.speed, this.width, this.height, this.imgBackSrc, this.player)

        this.interval = setInterval(() => {


            this.increaseSpeed()

            this.clearCanvas()

            this.createRewards()

            this.pruebaReward()

            this.createObstacles()

            this.drawAll()

            this.setScore()

            this.writeScore()

            this.detectCollisionPlayerObst()

            this.clearArray()

            this.setFrames()

            this.writeRewards()

            if (this.gameOver) {
                this.gameOverScreen()
                //this.rewardText = ""
                console.log("muertooo")
            }

            this.obstaclesArray.forEach(elm => elm.moveObst())





        }, 1000 / this.FPS)



    },

    createRewards() {

        if (this.rewardsArray.length < 1) {
            this.reward = new Reward(this.ctx, this.width, this.height, this.reward, this.speed, this.player, this.imgRewrdSrc, this.counter)
            this.rewardsArray.push(this.reward)
        }
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

        this.player.drawPlayer(this.framesTotal)
        this.obstaclesArray.forEach(elm => elm.drawObst(this.framesTotal))
        this.rewardsArray.forEach(elm => elm.drawRewrd())
    },

    detectCollisionPlayerObst() {

        if (!this.rewardInmortal) {

            this.obstaclesArray.forEach(elm => {

                const oSizew = elm.obstSize.w / 2
                const oSizeh = elm.obstSize.h / 2

                const bottomPosition = elm.obstPosition.bottom
                const topPosition = elm.obstPosition.top
                const leftPosition = elm.obstPosition.left
                const rightPosition = elm.obstPosition.right

                const plaPos = this.player.playerPos
                const plaSizeh = this.player.playerSize.h / 2.5
                const plaSizew = this.player.playerSize.w

                if (plaPos.x < bottomPosition.x + oSizew &&
                    plaPos.x + plaSizew > bottomPosition.x &&
                    plaPos.y < bottomPosition.y + oSizeh &&
                    plaPos.y + plaSizeh > bottomPosition.y) {
                    this.gameOver = true

                    this.loseGame()

                } else if (

                    plaPos.x < topPosition.x + oSizew &&
                    plaPos.x + plaSizew > topPosition.x &&
                    plaPos.y < topPosition.y + oSizeh &&
                    plaPos.y + plaSizeh > topPosition.y) {
                    this.gameOver = true
                    this.loseGame()

                } else if (

                    plaPos.x < leftPosition.x + oSizew &&
                    plaPos.x + plaSizew > leftPosition.x &&
                    plaPos.y < leftPosition.y + oSizeh &&
                    plaPos.y + plaSizeh > leftPosition.y) {

                    this.gameOver = true
                    this.loseGame()

                } else if (

                    plaPos.x < rightPosition.x + oSizew &&
                    plaPos.x + plaSizew > rightPosition.x &&
                    plaPos.y < rightPosition.y + oSizeh &&
                    plaPos.y + plaSizeh > rightPosition.y) {
                    this.gameOver = true
                    this.loseGame()

                }
            })
        }
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

                this.counter = this.reward.addPoints(this.counter)
                this.rewardText = "You won 100 points"
                this.disappearReward()


            } else if (randomNum >= 3) {

                this.rewardInmortal = true
                setTimeout(() => this.rewardInmortal = false, 10000)
                this.rewardText = "You are inmortal now"
                this.disappearReward()


            } else if (randomNum >= 2) {
                this.reward.increaseSpeed(this.player)
                this.rewardText = "You go way faster"
                this.disappearReward()


            } else {
                this.reward.enlargePlayer(this.player)
                this.rewardText = "You're bigger now"
                this.disappearReward()

                console.log("player")
            }
        }


    },

    writeRewards() {
        this.ctx.font = '20px  Alata'
        this.ctx.fillStyle = 'white'
        this.ctx.shadowColor = 'black'
        this.ctx.shadowBlur = 7;
        this.ctx.fillText(`${this.rewardText}`, 20, 80)
        this.ctx.shadowBlur = 0

        console.log(this.rewardText)

        // setTimeout(() => this.rewardText = "", 5000)

    },

    disappearReward() {
        this.rewardsArray.shift()
    },


    clearCanvas() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },

    clearArray() {

        if (this.obstaclesArray[0] == undefined) {
            this.createObstacles()
        } else {



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
    }

    ,
    stopGame() {


        clearInterval(this.interval)

        clearInterval(this.intervalScore)
    },

    setScore() {

        this.framesTotal % 20 === 0 ? this.counter += 1 : null

    },

    increaseSpeed() {
        this.framesTotal % 5000 === 0 ? this.speed += .1 : null
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


    },


    gameOverScreen() {

        this.ctx.font = "40px  Alata"
        this.ctx.fillStyle = "white"
        this.ctx.shadowColor = "black"
        this.ctx.shadowBlur = 7;
        this.ctx.textAlign = "center";
        this.ctx.fillText(`GAME OVER`, this.width / 2, this.height / 2 - 40)
        this.ctx.fillText(`Your score was ${this.counter}`, this.width / 2, this.height / 2)
        this.ctx.shadowBlur = 0

        clearInterval(this.interval)


        setTimeout(() => this.reset(), 5000)

    },



    changeAudio() {

    }

}
//esto está aquí para ir probándolo, luego hay que meterlo en index.js