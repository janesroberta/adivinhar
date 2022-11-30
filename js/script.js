const inputNumber = document.querySelector("#inputNumber")
const btnTry = document.querySelector(".btnTry")
const btnReset = document.querySelector(".btnReset")
const moonIcon = document.querySelector(".icon-wrapper i:nth-child(1)")
const sunIcon = document.querySelector(".icon-wrapper i:nth-child(2)")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const message = document.querySelector(".screen2 h2")
const main = document.querySelector("main")
const p = document.querySelector(".screen1 p")

inputNumber.focus()

let randomNumber = Math.round(Math.random() * 10)
let attempts = 1

btnTry.addEventListener(`click`, tryButton)
btnReset.addEventListener(`click`, resetGame)
moonIcon.addEventListener(`click`, mode)
sunIcon.addEventListener(`click`, mode)
window.addEventListener(`keydown`, resetGameByEnter)


function tryButton (event) {
    event.preventDefault()
    
    if(inputNumber.value.length == 0) {
        inputNumber.value = ""
        inputNumber.focus()

        attempts--
    }

    let userNumber = Number(inputNumber.value)

    if(inputNumber.value < 0 || inputNumber.value > 10) {
        inputNumber.value = ""
        inputNumber.focus()
        return alert(`Número inválido! Apenas números entre 0 e 10`)
    }

    if(userNumber == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")
        message.innerHTML = `Acertou em ${attempts} tentativas!`
    }

    inputNumber.value = ""
    inputNumber.focus()
    attempts++
}

function resetGame() {
    screen2.classList.add("hide")
    screen1.classList.remove("hide")
    
    inputNumber.value = ""
    inputNumber.focus()

    randomNumber = Math.round(Math.random() * 10)
    attempts = 1
}

function resetGameByEnter(event) {
    if(event.key == "Enter" && screen1.classList.contains("hide")) {
        resetGame()
    }
}

function mode() {
    document.body.classList.toggle("darkBody")
    main.classList.toggle("darkMain")
    p.classList.toggle("pDark")
    moonIcon.classList.toggle("hide")
    sunIcon.classList.toggle("hide")

    inputNumber.focus()
}