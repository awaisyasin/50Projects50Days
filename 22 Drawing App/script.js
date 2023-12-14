const canvas = document.getElementById("canvas")
const decreaseBtn = document.getElementById("decrease")
const increaseBtn = document.getElementById("increase")
const sizeEl = document.getElementById("size")
const colorEl = document.getElementById("color")
const clearBtn = document.getElementById("clear")

const ctx = canvas.getContext("2d")

let size = 10
let isPressed = false
colorEl.value = "#000000"
let color = colorEl.value
let x
let y

decreaseBtn.addEventListener("click", () => {
    size -= 5
    if (size < 5) {
        size = 5
    }
    sizeEl.innerText = size
})

increaseBtn.addEventListener("click", () => {
    size += 5
    if (size > 40) {
        size = 40
    }
    sizeEl.innerText = size
})

colorEl.addEventListener("change", e => (color = e.target.value))

clearBtn.addEventListener("click", () =>
    ctx.clearRect(0, 0, canvas.width, canvas.height)
)

canvas.addEventListener("mousedown", e => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
    drawCricle(x, y)
})

canvas.addEventListener("mouseup", e => {
    x = undefined
    y = undefined
    isPressed = false
})

canvas.addEventListener("mousemove", e => {
    drawCricle(x, y)
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCricle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCricle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}
