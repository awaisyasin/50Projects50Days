const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")
const imageContainer = document.querySelector(".image-container")
const images = document.querySelectorAll(".image-container img")

let index = 0
let interval = setInterval(run, 2000)

function run() {
    index++
    slideContainer()
}

// Function to slide the images container
function slideContainer() {
    if (index > images.length - 1) {
        index = 0
    } else if (index < 0) {
        index = images.length - 1
    }

    imageContainer.style.transform = `translateX(-${index * 500}px)`
}

// Function to reset the interval of function "run" when left or rigth button is clicked
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

// Left button "click" event listener
leftBtn.addEventListener("click", () => {
    index--

    slideContainer()
    resetInterval()
})

// Right button "click" event listener
rightBtn.addEventListener("click", () => {
    index++

    slideContainer()
    resetInterval()
})
