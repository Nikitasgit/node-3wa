const os = require("node:os");

const {username} = os.userInfo();

const cpus = os.cpus()


console.table(cpus)
console.log(username)