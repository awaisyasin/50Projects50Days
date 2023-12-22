const loveMe = document.querySelector(".loveMe")
const times = document.getElementById("times")

let clickedTime = 0
let timesClicked = 0

loveMe.addEventListener("click", e => {
    if (clickedTime === 0) {
        clickedTime = new Date().getTime()
    } else {
        if (new Date().getTime() - clickedTime < 800) {
            createHeart(e)
            clickedTime = 0
        } else {
            clickedTime = new Date().getTime()
        }
    }
})

const createHeart = e => {
    const heart = document.createElement("i")
    heart.classList.add("fa-solid")
    heart.classList.add("fa-heart")

    const x = e.clientX
    const y = e.clientY

    const offsetLeft = e.target.offsetLeft
    const offsetTop = e.target.offsetTop

    const xInside = x - offsetLeft
    const yInside = y - offsetTop

    heart.style.left = `${xInside}px`
    heart.style.top = `${yInside}px`

    loveMe.appendChild(heart)
    times.innerHTML = ++timesClicked
    setTimeout(() => loveMe.removeChild(heart), 1000)
}
