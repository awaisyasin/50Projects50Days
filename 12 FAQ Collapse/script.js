const toggles = document.querySelectorAll(".toggle")

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active")
    })
})

// Alternative method

// const chevrons = document.querySelectorAll(".icon.chevron i")
// const times = document.querySelectorAll(".icon.times i")

// chevrons.forEach((chevron) => {
//     chevron.addEventListener("click", () => {
//         chevron.parentNode.parentNode.classList.add("active")
//     })
// })

// times.forEach((time) => {
//     time.addEventListener("click", () => {
//         time.parentNode.parentNode.classList.remove("active")
//     })
// })

// Alternative method

// const faqs = document.querySelectorAll(".faq")
// const chevrons = document.querySelectorAll(".icon.chevron i")
// const times = document.querySelectorAll(".icon.times i")

// faqs.forEach((faq, idx) => {
//     const chevron = chevrons[idx]
//     chevron.addEventListener("click", () => {
//         faq.classList.add("active")
//     })
//     const time = times[idx]
//     time.addEventListener("click", () => {
//         faq.classList.remove("active")
//     })
// })
