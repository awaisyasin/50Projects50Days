const container = document.getElementById("container")
var colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"]

const SQUARES = 36000

// Creating the square elements and adding event listener to them
for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div")
    square.classList.add("square")

    square.addEventListener("mouseover", () => setColor(square))
    square.addEventListener("mouseout", () => removeColor(square))

    container.appendChild(square)
}

// Function the set the background color and box shadow to the squares
function setColor(element) {
    const randomColor = getRandomColor()
    element.style.background = randomColor
    element.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`
}

// Function to reset the backgound color and box shadow to the default
function removeColor(element) {
    element.style.background = "#1d1d1d"
    element.style.boxShadow = "0 0 2px #000"
}

// Function to get a random color from the array of colors
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

const squares = document.querySelectorAll(".square")

function randomColoring() {
    const randomSquare = squares[Math.floor(Math.random() * squares.length)]
    setColor(randomSquare)

    setTimeout(randomColoring, 1)
}

randomColoring()