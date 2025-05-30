console.log("work it");

//il softwer deve chiedere 10 volte al utente di inserire un numero. il programma stampa la somma di tutti i numeri

let somma = 0; // variabile iniziale

for (let i = 0; i < 10; i++) {
  let numero = parseInt(prompt("Inserisci un numero:"));
  somma += numero;
}

alert("La somma dei numeri è: " + somma);
