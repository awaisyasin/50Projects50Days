const resultEl = document.getElementById("result")
const lengthEl = document.getElementById("length")
const upperEl = document.getElementById("uppercase")
const lowerEl = document.getElementById("lowercase")
const numbersEl = document.getElementById("numbers")
const symbolsEl = document.getElementById("symbols")
const generateBtn = document.getElementById("generate")
const clipboardBtn = document.getElementById("clipboard")

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

clipboardBtn.addEventListener("click", () => {
    const textToCopy = resultEl.innerText
    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy)
        alert("Password coppied to clipboard!")
    }
})

generateBtn.addEventListener("click", () => {
    const length = lengthEl.value
    const hasUpper = upperEl.checked
    const hasLower = lowerEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(
        hasUpper,
        hasLower,
        hasNumber,
        hasSymbol,
        length
    )
})

function generatePassword(upper, lower, number, symbol, length) {
    let generatedPassword = ""
    const typesCount = upper + lower + number + symbol
    const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
        item => Object.values(item)[0]
    )

    if (typesCount === 0) {
        return ""
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,."

    return symbols[Math.floor(Math.random() * symbols.length)]
}
