const result = document.getElementById("results")
const filter = document.getElementById("filter")
const listItems = []

getData()

filter.addEventListener("input", e => filterData(e.target.value))

function filterData(keyword) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(keyword.toLowerCase())) {
            item.classList.remove("hide")
        } else {
            item.classList.add("hide")
        }
    })
}

async function getData() {
    const res = await fetch("https://randomuser.me/api/?results=50")
    const { results } = await res.json()

    // Clear result
    result.innerHTML = ""

    updateData(results)
}

function updateData(users) {
    users.forEach(user => {
        const li = document.createElement("li")

        listItems.push(li)

        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
        `

        result.appendChild(li)
    })
}
