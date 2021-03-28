document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit").addEventListener('click', addCom)
    document.getElementById('minus').addEventListener('click', timerDec)
    document.getElementById('plus').addEventListener('click', timerInc)
    document.getElementById('pause').addEventListener('click', pauseTime)
    document.getElementById('heart').addEventListener('click', liker)
})

let count = 0
let check = 0
let timer
const liked = {}

function addCom(event) {
    event.preventDefault()
    const input = document.getElementById('comment-input').value
    const lists = document.getElementById('list')
    const value = document.createElement('p')
    value.textContent = input
    lists.appendChild(value)
    document.getElementById('comment-input').value = ""
}

function timerInc() {
    count++
    document.getElementById('counter').textContent = count
}

function timerDec() {
    count--
    document.getElementById('counter').textContent = count
}

function startTimer() {
    timer = setInterval(timerInc, 1500)
}

function pauseTime() {
    if (check === 0) {
        clearInterval(timer)
        check++
        document.getElementById('pause').textContent = 'resume'
        document.getElementById('minus').disabled = true
        document.getElementById('plus').disabled = true
        document.getElementById('heart').disabled = true
    } else {
        startTimer()
        check--
        document.getElementById('pause').textContent = 'pause'
        document.getElementById('minus').disabled = false
        document.getElementById('plus').disabled = false
        document.getElementById('heart').disabled = false
    }
}

function liker(event) {
    event.preventDefault()
    if (liked[count] === undefined) {
        const value = document.createElement('li')
        const like = document.getElementsByClassName('likes')
        liked[count] = 1
        value.textContent = count + ' has ' + liked[count] + ' likes!'
        like[0].appendChild(value)   
    } else {
        liked[count] = liked[count] + 1
        const keyArray = Object.keys(liked)
        const tester = (x) => parseInt(x) === count
        let loc = keyArray.findIndex(tester)
        loc++
        let l = loc.toString()
        document.querySelector(`.likes li:nth-Child(${l})`).textContent = count + ' has ' + liked[count] + ' likes!'
    }
}

startTimer();
