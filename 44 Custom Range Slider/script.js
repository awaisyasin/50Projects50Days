const range = document.getElementById("range")

range.addEventListener("input", e => {
    const value = +e.target.value
    const label = range.nextElementSibling

    const range_width = getComputedStyle(e.target).getPropertyValue("width")
    const label_width = getComputedStyle(label).getPropertyValue("width")

    const range_width_num = +range_width.substring(0, range_width.length - 2)
    const label_width_num = +label_width.substring(0, label_width.length - 2)

    const min = +e.target.min
    const max = +e.target.max

    const left =
        value * (range_width_num / max) -
        label_width_num / 2 +
        scale(value, min, max, 30, 0)

    label.style.left = left + "px"
    label.innerHTML = value
})

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
