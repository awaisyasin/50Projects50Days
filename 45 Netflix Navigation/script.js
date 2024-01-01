const navList = document.querySelectorAll(".nav")
const openBtn = document.querySelector(".open-btn")
const closeBtn = document.querySelector(".close-btn")

openBtn.addEventListener("click", () => showNav())
closeBtn.addEventListener("click", () => hideNav())

function showNav() {
    navList.forEach(nav => {
        nav.classList.add("visible")
    })
}

function hideNav() {
    navList.forEach(nav => {
        nav.classList.remove("visible")
    })
}
