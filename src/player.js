const path = require('path')
const player = require('play-sound')()

const queueSound = []
let isPlaying = false

const playNext = () => {
    if (!queueSound.length) {
        isPlaying = false
        return
    }

    const filePath = queueSound.shift()

    if (filePath) {
        isPlaying = true
        player.play(filePath, playNext)
    }
}

const playSound = sound => {
    const filePath = path.join(__dirname, 'sounds', sound + '.mp3')

    queueSound.push(filePath)

    if (!isPlaying) {
        playNext()
    }
}

module.exports = { playSound }
