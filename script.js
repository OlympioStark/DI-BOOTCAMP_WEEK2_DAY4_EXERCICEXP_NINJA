/* Exercice 1 */
const currentYear = 2022;
let personOneBirth = prompt("saisissez la première date de naissance :");
let personTwoBirth = prompt("saisissez la seconde date de naissance :");

let personOneAge = currentYear - personOneBirth;
let personTwoAge = currentYear - personTwoBirth;
let nbreYear;

if (personOneAge > personTwoAge) {
    nbreYear = personOneAge - 2 * personTwoAge;
} else {
    nbreYear = personTwoAge - 2 * personOneAge;
}

alert(`l'année est ${currentYear - nbreYear}`);

/* Exercice 2 */

//sans regex
const codePostalSansRegex = prompt(" entrer le code postal")
if (String(codePostalSansRegex).length != 5 || !Number(codePostalSansRegex)) {
    console.log("error")
} else {
    console.log("succès")
}

// avec regex
const codePostalAvecRegex = prompt(" entrer le code postal")
const numberRegex = /^[\d+]{5}$/; //peut contenir que des chiffres et le nombre de caractere precis
if (numberRegex.test(codePostalAvecRegex)) {
    console.log("succès")
} else {
    console.log("error")
}