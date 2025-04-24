/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function getInitials(nomi) {
    return nomi.map(name => {
      return name
        .split(' ')                   // Divide il nome completo in parole
        .map(word => word[0].toUpperCase()) // Prende la prima lettera di ogni parola e la mette in maiuscolo
        .join('');                    // Unisce le iniziali
    });
  }
  
  const iniziali = getInitials(names);

  


// Invoca la funzione qui e stampa il risultato in console
console.log(iniziali);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]