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
            x: Math.floor(Math.random() * (this.canvasWidth - 50)),
            y: Math.floor(Math.random() * (this.canvasHeight - 50))
        }
    }

    drawRewrd() {

        console.log()

        this.ctx.drawImage(this.imageInstance, this.rewaPosition.x, this.rewaPosition.y, this.rewardSize.w, this.rewardSize.h)

    }

    addPoints(counter) {
        return counter += 100

    }


    increaseSpeed(player) {

        player.speed += 3

        setTimeout(() => player.speed -= 3, 10000)

    }



    enlargePlayer(player) {

        player.playerSize.w = player.playerSize.w + 20
        player.playerSize.h = player.playerSize.h + 20



        setTimeout(function () {
            player.playerSize.w = player.playerSize.w - 20
            player.playerSize.h = player.playerSize.h - 20
        }, 10000)



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