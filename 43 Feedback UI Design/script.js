const panel = document.querySelector("#panel")
const ratings = document.querySelectorAll(".rating")
const sendBtn = document.querySelector("#send")

let selectedRating = "Satisfied"

panel.addEventListener("click", e => {
    removeActive()

    if (
        e.target.tagName === "I" &&
        e.target.parentNode.classList.contains("rating")
    ) {
        e.target.parentNode.classList.add("active")
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

function removeActive() {
    ratings.forEach(rating => {
        rating.classList.remove("active")
    })
}

sendBtn.addEventListener("click", e => {
    panel.innerHTML = `
    <i class="fa-solid fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `
})
