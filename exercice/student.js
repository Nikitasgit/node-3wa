/*
* 02 Exercice read students
  Les données sont dans le dossier Data et dans le fichier student.txt
  
  1. Lisez le fichier à l'aide de la méthode asynchrone.
  1.(bis) Pour la suite, utilisez l'approche synchrone afin de récupérer les données que vous pourrez exploiter par la suite dans le script.
  
  2. Recherchez dans le tableau tous les étudiants qui ont eu plus de 17 de moyenne strictement.
  
  3. Recherchez dans le tableau l'étudiant qui a eu la meilleur node.
  
  4. Récupérez les données dans un objet student, puis ajoutez chaque étudiant dans un tableau students.
  
  // { name : null, note : null, address : null} ; // structure de l'objet
  const students = [] ; // tableau pour récupérer les données.
  
  5. Ordonnez maintenant l'ensemble des données dans le tableau.
 */

const fs = require("node:fs")
const path = require("node:path")

const filePath = path.join(__dirname, "..", "data", "student.txt");



fs.readFile(filePath, {encoding: "utf8"}, (err, data) => {
	
	if (err) {
		console.error(err)
		process.exit(0)
	}
	
	console.log("Lecture reussie")
})


let rawData;
let students;

try {
	rawData = fs.readFileSync(filePath, {encoding: 'utf8'});
	students = JSON.parse(rawData);
} catch(e) {
	console.error(e)
	process.exit(0)
}

const studentsAverage = students.map((s) => {
	const average = parseFloat((s.notes.reduce((acc, curr) => acc + curr, 0) / s.notes.length).toFixed(2))
	return {
		...s,
		average
	}
})



const bestStudents = studentsAverage.filter((s) => s.average > 17)


console.group("Moyenne supérieur à 17")
console.table(bestStudents)
console.groupEnd()

const bestStudent = bestStudents.reduce((acc, student) => {
	return acc.average > student.average ? acc : student
})

console.group("Meilleur eleve")
console.log(`${bestStudent.name}, avec une moyenne de ${bestStudent.average}`)
console.groupEnd()

studentsAverage.sort((a, b) => b.average - a.average)

console.group("Etudiant trié par moyenne :")
console.table(studentsAverage)
console.groupEnd()