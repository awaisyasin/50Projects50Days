const choices = document.getElementById("choices")
const tags = document.querySelector(".tags")

choices.addEventListener("input", () => {
    tags.innerHTML = ""
    const choiceList = choices.value.split(",")
    for (var choice of choiceList) {
        if (!(choiceList.length === 1 && choiceList[0] === "")) {
            var div = document.createElement("div")
            div.classList.add("tag")
            div.innerHTML = `
            ${choice.trim()}
            `
            if (choice.trim() !== "") {
                tags.appendChild(div)
            }
        }
    }
})

choices.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        choices.blur()
        for(var i = 0; i<=getRandomInt(6, 10); i++) {
            const tags = document.querySelectorAll(".tag")
            tags.forEach(tag => {
                tags.forEach(tag => tag.classList.remove("highlight"))
                const num = getRandomInt(0, tags.length)
                tags[num].classList.add("highlight")
            })
        }
    }
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }