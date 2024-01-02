const container = document.querySelector(".container")
const unsplashURL = "https://source.unsplash.com/random/"

const rows = 5

for (let i = 0; i < rows * 3; i++) {
    const image = document.createElement("img")
    image.src = getRandomImg()
    container.appendChild(image)
}

function getRandomImg() {
    const imageSRC = unsplashURL + getRandomSize()
    return imageSRC
}

function getRandomSize() {
    return `${getRandomNbr()}x${getRandomNbr()}`
}

function getRandomNbr() {
    return Math.floor(Math.random() * 10) + 300
}
