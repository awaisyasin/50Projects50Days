const container = document.querySelector(".container")

document.addEventListener("keydown", (event) => {
    const keyContent = event.key === " " ? "space" : event.key
    const keyCodeContent = event.keyCode
    const codeContent = event.code

    const keyElement = document.createElement("div")
    keyElement.classList.add("key")
    keyElement.innerHTML = `
    <div>${keyContent}</div>
    <small>key</small>
    `
    const keyCodeElement = document.createElement("div")
    keyCodeElement.classList.add("key")

    keyCodeElement.innerHTML = `
    <div>${keyCodeContent}</div>
    <small>key_code</small>
    `
    const codeElement = document.createElement("div")
    codeElement.classList.add("key")

    codeElement.innerHTML = `
    <div>${codeContent}</div>
    <small>code</small>
    `
    container.innerHTML = ""
    container.appendChild(keyElement)
    container.appendChild(keyCodeElement)
    container.appendChild(codeElement)
})

// const container = document.querySelector(".container")

// document.addEventListener("keydown", (event) => {
//     container.innerHTML = `
//     <div class="key">
//         ${event.key === " " ? "space" : event.key}
//         <small>key</small>
//     </div>
//     <div class="key">
//         ${event.keyCode}
//         <small>key_code</small>
//     </div>
//     <div class="key">
//         ${event.code}
//         <small>code</small>
//     </div>
//     `
// })
