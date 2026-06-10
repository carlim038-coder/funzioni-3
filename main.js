function contaCifre(numero) {
  // Verifichiamo se il numero è superiore a 9999
  if (numero > 9999) {
    return "Numero troppo grande";
  }

  // condizioni per determinare il numero di cifre
  if (numero >= 0 && numero <= 9) {
    return "1 cifra";
  } else if (numero >= 10 && numero <= 99) {
    return "2 cifre";
  } else if (numero >= 100 && numero <= 999) {
    return "3 cifre";
  } else if (numero >= 1000 && numero <= 9999) {
    return "4 cifre";
  } else {
    return "Input non valido";
  }
}

console.log(contaCifre(5));     
console.log(contaCifre(39));   
console.log(contaCifre(456)); 
console.log(contaCifre(22000)); 