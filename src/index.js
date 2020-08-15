const { playSound } = require('./player')

class RussianBlabPlugin {
    apply(compiler) {
        compiler.hooks.beforeRun.tap('BlabPlugin', () => playSound('hello'))
        compiler.hooks.watchRun.tap('BlabPlugin', () => playSound('hello'))

        compiler.hooks.done.tap('BlabPlugin', (stats) => {
            playSound(stats.hasErrors() ? 'build-failed' : 'build-success')
        })
    }
}

module.exports = RussianBlabPlugin
