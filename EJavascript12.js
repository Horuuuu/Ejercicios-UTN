/*Escribir un algoritmo que:imprima los unmeros del 1 al 100,
con la condicion que si el numero a imprimir es multiplo de 3,
imprima el string 'Fizz',si el numero a imprimir es multiplo
de 5,imprima:'Buzz', y si es multiplo de ambos:'FizzBuzz'  */

function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
