let count = 0;
const random = Math.floor(Math.random() * 100) + 1;

console.log("Devinez un chiffre compris entre 1 et 100");

process.stdin.on("data", (chunk) => {
	const number = parseInt(chunk.toString().trim());
	
	if (isNaN(number)) {
		console.log("Merci de bien saisir une valeur numérique");
		return
	}
	
	if (count > 10) {
		console.log("Perdu vous avez dépasé la limite d'éssai")
		process.exit(0)
	}
	
	if (number < 1 || number > 100) {
		console.log("Merci de saisir une valeur comprise entre 1 et 100")
		return
	}
	
	count++;
	
	if (number > random) {
		console.log("Le chiffre rechercher est plus petit");
	} else if (number < random) {
		console.log("Le chiffre rechercher est plus grand")
	} else {
		console.log(`Vous avez gagné en ${count} essai`)
		process.exit(0)
	}
})