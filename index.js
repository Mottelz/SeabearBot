const bot = require('./src/bot.js')

var interval = (Math.floor(Math.random() * 60) + 1) * 1000
bot()
setInterval(bot, interval)