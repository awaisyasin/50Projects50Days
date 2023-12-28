const background = document.getElementById("background")
const passwordInput = document.getElementById("password")

const initialBgBlur = 20

passwordInput.addEventListener("input", e => changeBgBlur(e.target.value))

function changeBgBlur(password) {
    const currentBgBlur = password.length * 2
    const newBgBlur = initialBgBlur - currentBgBlur
    background.style.filter = `blur(${newBgBlur}px)`
}
