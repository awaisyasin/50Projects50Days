const cupLarge = document.querySelector(".cup-large")
const remained = document.getElementById("remained")
const percentage = document.getElementById("percentage")
const cupsSmall = document.querySelectorAll(".cup-small")

const cupCount = 8
const lgCupCapacity = 2
const smCupCapacity = 100 / 8


cupsSmall.forEach((cupSmall, idx) => {
    cupSmall.addEventListener("click", () => {
        const filledCupCount = idx + 1
        const emptyCupCount = cupCount - filledCupCount

        remained.style.height = `${100 - (smCupCapacity * filledCupCount)}%`
        remained.querySelector("span.letters").textContent = `${(lgCupCapacity / 100) * (100 - (smCupCapacity * filledCupCount))}L`
        percentage.style.height = `${smCupCapacity * filledCupCount}%`
        percentage.textContent = `${smCupCapacity * filledCupCount}%`

        cupsSmall.forEach((c, i) => {
            if (i <= idx) {
                if ((i === idx && c.classList.contains("filled") && idx === (cupCount - 1)) || (i == idx && c.classList.contains("filled") && !(cupsSmall[idx + 1].classList.contains("filled")))) {
                    c.classList.remove("filled")

                    remained.style.height = `${100 - (smCupCapacity * (filledCupCount - 1))}%`
                    remained.querySelector("span.letters").textContent = `${(lgCupCapacity / 100) * (100 - (smCupCapacity * (filledCupCount - 1)))}L`
                    percentage.style.height = `${smCupCapacity * (filledCupCount - 1)}%`
                    percentage.textContent = `${smCupCapacity * (filledCupCount - 1)}%`
                }
                else {
                    c.classList.add("filled")
                }
            }
            if (i > idx) {
                if (c.classList.contains("filled")) {
                    c.classList.remove("filled")
                }
            }
        })
    })
})