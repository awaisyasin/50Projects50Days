const boxes = document.querySelectorAll(".box")

window.addEventListener("scroll", checkBox)
document.addEventListener("DOMContentLoaded", checkBox)

function checkBox() {
    const triggerBottom = (window.innerHeight * 4) / 5
    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerBottom) {
            box.classList.add("show")
        }
        else {
            box.classList.remove("show")
        }
    })
}
