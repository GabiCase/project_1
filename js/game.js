const Game = {
    name: '散歩にタコ', // en Japones jajaja
    description: 'Tako de paseo', // modificable :))
    version: '1.0.0',
    author: 'Gabriela Casero & Melissa Meléndez Zamora',
    license: undefined,
    canvasDom: undefined,
    ctx: undefined,
    player: undefined,
    // FPS: Tengo dudas pero ahora lo busco
    background: undefined,
    obstacles: [],
    framesCounter: 0,
    intervalId: undefined,
    score: 0,
    speed: 1,
    canvasSize: {
        w: window.innerWidth / 2, // Esto a lo mejor se tendría que poner como undefined. No estoy segura.
        h: window.innerHeight
    },
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

    //startGame(){} "ya desde aquí comenzariamos a instanciar y invocar a los diferentes metodos"
}