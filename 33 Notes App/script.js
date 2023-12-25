const addBtn = document.getElementById("add")

// Retrieving the notes stored in the local storage
const notes = JSON.parse(localStorage.getItem("notes"))
if (notes) {
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener("click", () => addNewNote())

// Function to add new notes
function addNewNote(text = "") {
    const noteEl = document.createElement("div")
    noteEl.classList.add("note")
    noteEl.innerHTML = `
    <div class="tools">
        <button class="edit">
            <i class="fa-solid fa-edit"></i>
        </button>
        <button class="delete">
            <i class="fa-solid fa-trash-alt"></i>
        </button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `
    const editBtn = noteEl.querySelector(".edit")
    const deleteBtn = noteEl.querySelector(".delete")
    const main = noteEl.querySelector(".main")
    const textArea = noteEl.querySelector("textarea")

    main.innerHTML = marked(text)
    textArea.innerHTML = text

    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden")
        textArea.classList.toggle("hidden")
    })

    deleteBtn.addEventListener("click", () => {
        noteEl.remove()

        updateLS()
    })

    textArea.addEventListener("input", e => {
        const { value } = e.target

        main.innerHTML = marked(value)

        updateLS()
    })

    document.body.appendChild(noteEl)
}

// Function to update the local storage
function updateLS() {
    const notesText = document.querySelectorAll("textarea")

    const notes = []

    notesText.forEach(note => notes.push(note.value))

    localStorage.setItem("notes", JSON.stringify(notes))
}
