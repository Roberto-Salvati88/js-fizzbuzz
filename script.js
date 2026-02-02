// Devo stampare i numeri da 1 a 100
// Per ogni numero devo controllare se è divisibile per 3 o per 5
// Se è divisibile sia per 3 che per 5 devo scrivere "FizzBuzz"
// Se è divisibile solo per 3 devo scrivere "Fizz"
// Se è divisibile solo per 5 devo scrivere "Buzz"
// Se non è divisibile né per 3 né per 5 devo scrivere il numero

for (let i = 1; i <= 100; i++) {

  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }

}
