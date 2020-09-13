let timer, currSeconds = 0
var music = document.getElementById("music-file")
music.load()
music.loop = true

function resetTimer() {
    document.querySelector(".timer-text").style.display = 'none'
    document.querySelector(".playing-music-text").style.display = 'none'

    if(currSeconds >= 15) {
        music.pause()
        music.currentTime = 0
    }

    clearInterval(timer)
    currSeconds = 0
    timer = setInterval(startIdleTimer, 1000)
}

// Events that will reset timer
window.onload = resetTimer
window.onmousemove = resetTimer
window.onmousedown = resetTimer
window.ontouchstart = resetTimer
window.onclick = resetTimer
window.onkeypress = resetTimer

function startIdleTimer() {
    currSeconds++

    if(currSeconds >= 15) {
        document.querySelector(".playing-music-text").style.display = 'block'
        music.play()
    }
    document.querySelector(".secs").textContent = currSeconds
    document.querySelector(".timer-text").style.display = 'block'
}