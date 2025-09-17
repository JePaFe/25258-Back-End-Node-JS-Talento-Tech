const nums = [1, 6, 3, 7, 11, 30, 2, 8];

// function mostrar(item) {
//   console.log(item);
// }

// const mostrar = function (item) {
//   console.log(item);
// };

// const mostrar = item => console.log(item);

// nums.forEach(item => console.log(item));

// const numeros = nums.map((n) => n);

// numeros.push(99);

// console.log(numeros, nums);

// ---

// const pares = [];

// nums.forEach((num) => {
//   if (num % 2 == 0) {
//     pares.push(num);
//   }
// });

// console.log(pares);

// ---

const pares = nums.filter((num) => num % 2 == 0);

console.log(pares);
