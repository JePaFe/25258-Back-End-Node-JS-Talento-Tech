// const nombres = ["Juan", "Maria", "Gabriela", "Gabril", "Pedro", "Ana"];

// console.log(nombres.join('|'));

// const buscar = elemento => elemento == "Pedro";

// const nombre = nombres.find(nombre => nombre == "Pedro");
// console.log(nombre);

// ---

// const numeros = [4, 5, 6, 1, 7, 3, 2, 10, 8];

// const numerosFiltrados = numeros.filter((num) => num >= 5);
// console.log(numerosFiltrados);

// const pares = numeros.map((num) => {
//   if (num % 2 == 0) {
//     return "par";
//   }

//   return "impar";
// });
// console.log(pares);

// const numbers = numeros.map((item) => item);
// console.log(numbers);

// console.log(numeros);

// ---

const numeros = [4, 5, 6, 1, 7, 3, 2, 10, 8];

//                              15        1
const total = numeros.reduce((previues, current) => previues + current, 0);
console.log(total);
