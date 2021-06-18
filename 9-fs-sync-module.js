const fs = require('fs')

const first = fs.readFileSync('./folder/first.txt', 'utf-8')
const second = fs.readFileSync('./folder/second.txt', 'utf-8')

fs.writeFileSync('./folder/result.txt',`Here is result : ${first}, ${second}`)
fs.writeFileSync('./folder/result.txt',`Here is result : ${first}, ${second}`, {flag : 'a'}) // append the text