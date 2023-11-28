const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"]

sounds.forEach((sound) => {
    const btn = document.createElement("button")
    btn.classList.add("btn")
    btn.textContent = sound

    btn.addEventListener("click", () => {
        stopAllAudio()
        const audio = document.getElementById(sound)
        audio.play()
    })
    document.getElementById("buttons").appendChild(btn)
})

function stopAllAudio() {
    sounds.forEach((sound) => {
        const audio = document.getElementById(sound)
        audio.pause()
        audio.currentTime = 0
    })
}
