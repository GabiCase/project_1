class Reward {
    constructor(ctx, width, height, reward, speed, player, imgRewrdSrc, counter) {
        this.ctx = ctx
        this.canvasWidth = width
        this.canvasHeight = height
        this.reward = reward
        this.speed = speed
        this.player = player
        this.counter = counter
        this.imgRewrdSrc = imgRewrdSrc
        this.imageInstance = new Image()
        this.imageInstance.src = `./images/${this.imgRewrdSrc}`
        this.rewardSize = {
            w: 60,
            h: 50
        }
        this.rewaPosition = {
            x: Math.floor(Math.random() * this.canvasWidth),
            y: Math.floor(Math.random() * this.canvasHeight)
        }
    }

    drawRewrd() {
        console.log()

        this.ctx.drawImage(this.imageInstance, this.rewaPosition.x, this.rewaPosition.y, this.rewardSize.w, this.rewardSize.h)

    }

    addPoints() {
        this.counter += 200
        console.log(`tienes ${this.counter} puntos, deberían añadirse 200`)

    }

    notDie() {
    
        this.game.detectCollisionPlayerObst()
   
    console.log(`tienes ${this.counter} puntos, deberían añadirse 200`)

}

//----------------------------------------------------
    //     NO FUNCIONA LO DE SPEED DEL PLAYER
//----------------------------------------------------
    increaseSpeed() {
        this.player.speed += 2
        setTimeout(this.player.speed - 2, 300)

        console.log(`speed de ${this.player.speed} debería subir`)


    }


//----------------------------------------------------
//     TAMPOCO CONSIGO ACCEDER AL SIZE DEL PLAYER
//----------------------------------------------------
    enlargePlayer() {
        this.player.playerSize.w + 20
        this.player.playerSize.h + 20
console.log(`Hacerse más grande`)
    }

    //Tendrían en común la forma de aparecer, pero necesito clases que extiendan.

}

// class AddPoints extends Reward {
//     constructor(ctx, canvasSize, speed, imgRewrdSrc) {
//         this.ctx = ctx
//         this.canvasSize = canvasSize
//         this.speed = speed
//         this.imgRewrdSrc = imgRewrdSrc
//         this.rewardAddPoints = undefined

//     }

//     createRewardPoints() {
// this.rewardAddPoints = new AddPoints(this.ctx)
//     }

// }