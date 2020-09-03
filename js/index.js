

function removeFirstScreen(){
document.querySelector("header").classList.add("invisible")
}

window.onload = () => {
    document.querySelector("#star-btn").addEventListener("click", () => {
        Game.initGame()
        removeFirstScreen()
    })
};