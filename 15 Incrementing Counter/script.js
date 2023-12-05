const counters = document.querySelectorAll(".counter[data-target]")

counters.forEach((counter) => {
    const targetValue = parseInt(counter.getAttribute("data-target"), 10)
    let currentValue = 0

    const updateCounter = setInterval(() => {
        currentValue += Math.ceil(targetValue / 100)

        if (currentValue <= targetValue) {
            counter.textContent = currentValue
        } else {
            counter.textContent = targetValue
            clearInterval(updateCounter)
        }
    }, 10)
})
