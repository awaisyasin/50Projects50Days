const icon = document.getElementById("toggle")
const nav = document.getElementById("nav")

icon.addEventListener("click", () => {
    nav.classList.toggle("active")
})