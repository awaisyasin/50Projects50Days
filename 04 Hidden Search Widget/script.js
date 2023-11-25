const search = document.querySelector(".search-icon")
const container = document.querySelector(".container")
const input = document.querySelector(".input-field")

search.addEventListener("click", () => {
    container.classList.toggle("active")
    if (container.classList.contains("active")) {
        setTimeout(() => {
            input.placeholder = "Search..."
            input.focus()
        }, 500);
    }
    else {
        input.placeholder = ""
    }
})