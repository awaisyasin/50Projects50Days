const textEl = document.getElementById("text")
const speedEl = document.getElementById("speed")
const text = "We Love Programming!"

let speed = 300 / speedEl.value
let idx = 1

createText()

function createText() {
    textEl.innerText = text.slice(0, idx)
    idx++

    if (idx > text.length) {
        idx = 1
    }

    setTimeout(createText, speed)
}

speedEl.addEventListener("input", e => (speed = 300 / e.target.value))
