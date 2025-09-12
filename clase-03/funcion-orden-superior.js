// function sumar(a, b) {
//   return a + b;
// }

// function restar(a, b) {
//   return a - b;
// }

// function calculadora(num1, num2, operacion) {
//   return operacion(num1, num2);
// }

// const suma = calculadora(5, 3, sumar);
// console.log("la resta es: " + suma);

// const resta = calculadora(5, 3, restar);
// console.log("la resta es: " + resta);

// ---

function contador() {
  let num = 0;

  return function () {
    num++;
    return num;
  };
}

const contar = contador();

// console.log(contar);
let numero = contar();
console.log(numero);

numero = contar();
console.log(numero);

numero = contar();
console.log(numero);
