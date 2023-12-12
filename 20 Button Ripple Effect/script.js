const ripples = document.querySelectorAll(".ripple")

ripples.forEach(ripple => {
    ripple.addEventListener("click", e => {
        const x = e.clientX
        const y = e.clientY
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        const insideX = x - buttonLeft
        const insideY = y - buttonTop

        const circle = document.createElement("span")
        circle.classList.add("circle")
        circle.style.top = insideY + "px"
        circle.style.left = insideX + "px"

        e.target.appendChild(circle)
        setTimeout(() => circle.remove(), 500)
    })
})
