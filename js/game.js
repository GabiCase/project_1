const Game = {
    name: '散歩にタコ', // en Japones jajaja
    description: 'Tako de paseo', // modificable :))
    version: '1.0.0',
    author: 'Gabriela Casero & Melissa Meléndez Zamora',
    license: undefined,
    canvasDom: undefined,
    ctx: undefined,
    FPS: 60,
    player: undefined,
    counter: undefined,
    counterImgSrc: undefined,
    reward: undefined,
    rewardImgSrc: [],
    background: undefined,
    obstacles: [],
    obstaclesImgSrc: [],
    framesCounter: 0,
    intervalId: undefined,
    score: 0,
    speed: 1,
    imgPlayerSrc: 'octop.jpg',
    imgObstSrc: 'fish.jpg',
    imgBackSrc: 'backg.jpg',
    imgRewrdSrc: 'reward.jpg',


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
    //ya desde aquí comenzariamos a instanciar y invocar a los diferentes metodos
    startGame() {

        this.player = new Player(this.ctx, this.canvasSize, this.keys, this.speed, this.width, this.height, this.imgPlayerSrc)
        this.obstacles = new Obstacles(this.ctx, this.canvasSize, this.speed, this.width, this.height, this.imgObstSrc)
        this.background = new Background(this.ctx, this.canvasSize, this.background, this.speed, this.width, this.height, this.imgBackSrc)
        this.reward = new Rewards(this.ctx, this.canvasSize, this.reward, this.speed, this.width, this.height, this.player, this.imgRewrdSrc)
        this.interval = setInterval(() => {
            this.clearCanvas()
            this.drawAll()
            this.player.setEvents()
            



            this.framesCounter > 500 ? this.framesCounter = 0 : this.framesCounter++


        }, 500)
        //-------------------------------
        // aquí en los FPS y el setInterval hay cosas que no entendemos, 
        // controla la velocidad del juego, y qué más?
        //-------------------------------





    },

    drawAll() {
        this.background.drawBack()
        this.player.drawPlayer()
        this.obstacles.drawObst()
        this.reward.drawRewrd()

    },

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
}

Game.initGame()