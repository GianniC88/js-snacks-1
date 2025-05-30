console.log("work it");

//crea un array vuoto. Chiedi 6 volte all'utente di inserire un numero. se è dispati inseriscilo nell'array

const arrayDispari = [];

for (let i = 0; i < 6; i++) {
  let numero = parseInt(prompt("Inserisci un numero:"));

  // Verifico se il numero è dispari
  if (numero % 2 !== 0) {
    // Se è dispari, lo aggiungo all'array
    arrayDispari.push(numero);
  }
}

// Stampo l'array con i numeri dispari
console.log("Array con i numeri dispari:", arrayDispari);
