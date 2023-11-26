document.addEventListener("DOMContentLoaded", function () {
	var loadingText = document.querySelector(".loading-text")
	const bg = document.querySelector(".bg")

	var load = 0
	var int = setInterval(blurring, 20)

	function blurring() {
        load++
		loadingText.innerText = `${load}%`
		bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
		loadingText.style.opacity = `${scale(load, 0, 100, 1, 0)}`
		if (load >= 100) {
            clearInterval(int)
			loadingText.style.display = "none"
		}
	}

    const scale = (value, oldMin, oldMax, newMin, newMax) => {
        return (((value - oldMin) * (newMax - newMin)) / (oldMax - oldMin) + newMin)
    }
})
