const navItems = document.querySelectorAll(".phone nav ul li")
const contents = document.querySelectorAll(".content")

navItems.forEach((item, idx) => {
    item.addEventListener("click", () => {
        hideAllContents()
        hideAllItems()

        contents[idx].classList.add("show")
        item.classList.add("active")
    })
})

function hideAllContents() {
    contents.forEach(content => content.classList.remove("show"))
}

function hideAllItems() {
    navItems.forEach(item => item.classList.remove("active"))
}
