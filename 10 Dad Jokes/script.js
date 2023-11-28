const jokeEl = document.getElementById("joke")
const jokeBtn = document.getElementById("joke-btn")

jokeBtn.addEventListener("click", generateJoke)
document.addEventListener("DOMContentLoaded", generateJoke)

// USING ASYNC/AWAIT
async function generateJoke() {
    const config = {
        headers: {
            accept: "application/json",
        },
    }
    const response = await fetch("https://icanhazdadjoke.com/", config)
    const data = await response.json()
    jokeEl.innerHTML = data.joke
}

// USING .then
// function generateJoke() {
//     const config = {
//         headers: {
//             accept: "application/json",
//         },
//     }
//     fetch("https://icanhazdadjoke.com/", config)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Failed to fetch joke")
//             }
//             return response.json()
//         })
//         .then((data) => {
//             const joke = data.joke
//             jokeEl.innerHTML = joke
//         })
//         .catch((error) => {
//             console.error(error)
//             jokeEl.innerHTML = "Failed to fetch joke. Please try again later."
//             jokeEl.style.color = "#FFA500"
//         })
// }
