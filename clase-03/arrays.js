// const datos = [1, "Hola", { nombre: "Juan" }, true, [1, 2, 3], (a) => a + b];

// const nombre1 = "Juan";
// const nombre2 = "Maria";
// const nombre3 = "Gaby";

// const nombres = ["Juan", "Maria", "Gabriela", "Gabril", "Pedro", "Ana"];

// Elemento      1  2  3
const numeros = [4, 5, 6, 1, 10, 8];
// Indice        0  1  2  3  4   5

// numeros[2] = 9;

// console.log(numeros.length);
// console.log(numeros[2], numeros.at(2));

// numeros[6] = 11;
// numeros[numeros.length] = 11;

// numeros.push(11, 14)
// const numero = numeros.pop();
// console.log(numero);

// numeros.unshift(3)
// // Elemento      1  2  3  4
// const numeros = [3, 4, 5, 6, 1, 10, 8];
// // Indice        0  1  2  3  4   5

// const numero = numeros.shift();
// console.log(numero);

// // Elemento      1  2  3
// const numeros = [5, 6, 1, 10, 8];
// // Indice        0  1  2  3  4   5

const numero = numeros.splice(2, 1);
console.log(numero);

console.log(numeros);
