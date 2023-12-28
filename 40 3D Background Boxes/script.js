const magicBtn = document.getElementById("magic")
const boxesContainer = document.getElementById("boxes")
const boxes = document.querySelectorAll(".box")

magicBtn.addEventListener("click", () => boxesContainer.classList.toggle("big"))

function createBoxes() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement("div")
            box.classList.add("box")
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            boxesContainer.appendChild(box)
        }
    }
}

createBoxes()

// Alternative function

// function createBoxes() {
//     for (let idx = 0; idx < 16; idx++) {
//         const box = document.createElement("div")
//         box.classList.add("box")
//         const rowIndex = Math.floor(idx / 4)
//         const columnIndex = idx % 4
//         const backgroundPositionX = -columnIndex * 125 + "px"
//         const backgroundPositionY = -rowIndex * 125 + "px"
//         box.style.backgroundPositionX = backgroundPositionX
//         box.style.backgroundPositionY = backgroundPositionY
//         boxesContainer.appendChild(box)
//     }
// }
// createBoxes()

// Replace the above function with this function if children boxex are already defined in the index.html

// function adjustBg() {
//     boxes.forEach((box, idx) => {
//         const rowIndex = Math.floor(idx / 4)
//         const columnIndex = idx % 4
//         const backgroundPositionX = columnIndex * 125 + "px"
//         const backgroundPositionY = rowIndex * 125 + "px"
//         box.style.backgroundPosition = `-${backgroundPositionX} -${backgroundPositionY}`
//     })
// }
