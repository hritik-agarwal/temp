const os = require('os')

console.log(os.userInfo())  // info about current user
console.log(os.uptime())    // system uptime in seconds
console.log(os.type())      // system name
console.log(os.arch())      // system architecture