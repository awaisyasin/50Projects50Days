const toggleEl = document.querySelector(".toggle")

const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minute")
const secondEl = document.getElementById("second")

const timeEl = document.querySelector(".time")
const dateEl = document.querySelector(".date")

const days = [
    "Sunday",
    "Monday",
    "Tusday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
]

toggleEl.addEventListener("click", (e) => {
    const html = document.documentElement
    if (html.classList.contains("dark")) {
        html.classList.remove("dark")
        e.target.innerHTML = "Dark mode"
    } else {
        html.classList.add("dark")
        e.target.innerHTML = "Light mode"
    }
})

function updateClock() {
    const date = new Date()
    const seconds = date.getSeconds()
    const minutes = date.getMinutes()
    let hours = date.getHours()
    const day = date.getDay()
    const month = date.getMonth()
    const today = date.getDate()
    let period = "AM"

    if (hours >= 12) {
        hours = hours - 12
        period = "PM"
    }

    secondEl.style.transform = `translate(-50%) rotate(${scale(
        seconds,
        0,
        59,
        0,
        360
    )}deg)`
    minuteEl.style.transform = `translate(-50%) rotate(${scale(
        minutes,
        0,
        59,
        0,
        360
    )}deg)`
    hourEl.style.transform = `translate(-50%) rotate(${scale(
        hours,
        0,
        11,
        0,
        360
    )}deg)`

    timeEl.innerHTML = `${hours}:${
        minutes < 10 ? `0${minutes}` : minutes
    } ${period}`

    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${today}</span>`
}

setInterval(updateClock, 1000)

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) / (in_max - in_min)) * (out_max - out_min) + out_min
}
