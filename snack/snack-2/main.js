console.log("ciao");

//utente inserisce due parole in successione, con due prompt. il software stampa prima la aparola più corta

const primaParola = prompt("Inserisci una parola");
const secondaParola = prompt("Inserisci una parola");

if (primaParola.length > secondaParola.length) {
  console.log("La parola è piu lunga");
} else if (primaParola.length < secondaParola.length) {
  console.log("La parola è più lunga");
} else if ((primaParola.length = secondaParola.length)) {
  console.log("Le parole sono uguali");
}
