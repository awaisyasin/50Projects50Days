const play = document.querySelector(".playstation")
const xbox = document.querySelector(".xbox")

play.addEventListener("mouseenter", () => {
	play.classList.add("active")
	xbox.classList.add("inactive")
})

play.addEventListener("mouseleave", () => {
	play.classList.remove("active")
	xbox.classList.remove("inactive")
})

xbox.addEventListener("mouseenter", () => {
	xbox.classList.add("active")
	play.classList.add("inactive")
})

xbox.addEventListener("mouseleave", () => {
	xbox.classList.remove("active")
	play.classList.remove("inactive")
})