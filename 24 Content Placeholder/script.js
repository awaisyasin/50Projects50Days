const header = document.getElementById("header")
const title = document.getElementById("card-title")
const excerpt = document.getElementById("excerpt")
const profile_img = document.getElementById("profile_img")
const name = document.getElementById("name")
const date = document.getElementById("date")

const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bg_texts = document.querySelectorAll(".animated-bg-text")

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />`
    title.innerHTML = "Lorem ipsum dolor sit amet"
    excerpt.innerHTML =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptas ea!"
    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`
    name.innerHTML = `John Doe`
    date.innerHTML = "Dec 15, 2023"

    animated_bgs.forEach(bg => bg.classList.remove("animated-bg"))
    animated_bg_texts.forEach(bg => bg.classList.remove("animated-bg-text"))
}
