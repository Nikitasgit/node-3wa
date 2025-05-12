const fs = require("node:fs")

// fs.readFile("./data/titanic.txt", {encoding: "utf8"}, (err, data) => {
//
// 	if (err) {
// 		console.error(err);
// 		return
// 	}
//
// 	console.log(data)
// })

try {
	
	const data = fs.readFileSync("./data/titanic.txt", {encoding: "utf8"})
	console.log("Version Sync",data)
	
} catch(e) {
	console.error(e)
}

fs.writeFile('./data/test.txt', "Hello node 4", (err) => {
	if (err) {
		console.error(err)
		process.exit(0)
	}
	console.log("Success")
})

fs.appendFile("./data/test.txt", " Ajout appendFile", (err) => {
	
	if (err) {
		console.error(err)
		process.exit(0)
	}
	
	console.log("Ajout reussi")
	
})