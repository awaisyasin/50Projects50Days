const form = document.getElementById("form")
const input = document.getElementById("input")
const todosUl = document.getElementById("todos")

const todos = JSON.parse(localStorage.getItem("todos"))

if (todos) {
    todos.reverse().forEach(todoEl => {
        addTodo(todoEl)
    })
}

form.addEventListener("submit", e => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

    if (todo) {
        todoText = todo.text
    }

    // Create todo
    if (todoText) {
        const todoEl = document.createElement("li")
        if (todo && todo.completed) {
            todoEl.classList.add("completed")
        }

        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed")
            updateLS()
        })

        todoEl.addEventListener("contextmenu", e => {
            e.preventDefault()

            todoEl.remove()
            updateLS()
        })

        todoEl.innerText = todoText
        todosUl.insertBefore(todoEl, todosUl.firstChild)

        // Clear input
        input.value = ""
    }

    updateLS()
}

function updateLS() {
    const todosEl = document.querySelectorAll(".todos li")

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed"),
        })
    })

    localStorage.setItem("todos", JSON.stringify(todos))
}
