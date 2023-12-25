const nums = document.querySelectorAll(".nums span")
const counter = document.querySelector(".counter")
const final = document.querySelector(".final")
const replay = document.querySelector("#replay")

// Initial animation run
runAnimation()

// Function to animate the nums
function runAnimation() {
    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1
        num.addEventListener("animationend", e => {
            if (e.animationName == "goIn" && idx != nextToLast) {
                e.target.classList.add("out")
            } else if (e.animationName == "goOut" && num.nextElementSibling) {
                e.target.nextElementSibling.classList.add("in")
            } else {
                counter.classList.add("hide")
                final.classList.add("show")
            }
        })
    })
}

// Event listener to replay button
replay.addEventListener("click", () => {
    resetDOM()
    runAnimation()
})

// Function to reset the DOM to the initial
function resetDOM() {
    counter.classList.remove("hide")
    final.classList.remove("show")

    nums.forEach(num => {
        num.classList.value = ""
    })
    nums[0].classList.add("in")
}
