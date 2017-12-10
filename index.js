const bot = require('./src/bot.js')
var interval = (Math.floor(Math.random() * 30) + 31) * 1000 * 60
console.log('The interval is now (ms): '+interval)
setInterval(bot, interval)