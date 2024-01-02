const quiz = document.getElementById("quiz")
const questionEl = document.getElementById("question")
const answerEls = document.querySelectorAll(".answer")
const answer_a = document.getElementById("answer-a")
const answer_b = document.getElementById("answer-b")
const answer_c = document.getElementById("answer-c")
const answer_d = document.getElementById("answer-d")
const submitBtn = document.getElementById("submit")

const quizData = [
    {
        question: "What does HTML stand for?",
        choices: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyperlinks and Textual Markup Language",
        ],
        correct: "Hyper Text Markup Language",
    },
    {
        question: "Which programming language is used for styling web pages?",
        choices: ["JavaScript", "CSS", "Python", "HTML"],
        correct: "CSS",
    },
    {
        question:
            "What is the standard markup language for creating web pages?",
        choices: ["HTML", "CSS", "JavaScript", "XML"],
        correct: "HTML",
    },
    {
        question: "Which of the following is not a CSS framework?",
        choices: ["Bootstrap", "jQuery", "Bulma", "Foundation"],
        correct: "jQuery",
    },
]

let currentQuiz = 0
let score = 0

displayQuiz()

function displayQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerHTML = currentQuizData.question
    answer_a.innerHTML = currentQuizData.choices[0]
    answer_b.innerHTML = currentQuizData.choices[1]
    answer_c.innerHTML = currentQuizData.choices[2]
    answer_d.innerHTML = currentQuizData.choices[3]
}

function deselectAnswers() {
    answerEls.forEach(answerEl => (answerEl.checked = false))
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = document.querySelector(
                `label[for="${answerEl.id}"]`
            ).textContent
        }
    })
    return answer
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()

    if (answer) {
        if (answer == quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            displayQuiz()
        } else {
            finishQuiz()
        }
    }
})

function finishQuiz() {
    quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
    `
}
