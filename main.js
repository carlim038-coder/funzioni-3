function contaCifre(num) {
  // 1. Controllo limite massimo
  if (num > 9999) {
    return "Numero troppo grande";
  }

 
  if (num < 10) {
    return "1 cifra";
  } 
  
  if (num < 100) {
    return "2 cifre";
  } 
  
  if (num < 1000) {
    return "3 cifre";
  } 
  
  // Se arriviamo qui, il numero è compreso tra 1000 e 9999
  return "4 cifre";
}

// Esempi di test
console.log(contaCifre(5));     // 1 cifra
console.log(contaCifre(55));    // 2 cifre
console.log(contaCifre(555));   // 3 cifre
console.log(contaCifre(5555));  // 4 cifre
console.log(contaCifre(10000)); // Numero troppo grande

