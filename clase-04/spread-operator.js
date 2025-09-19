// const numeros = [1, 2, 3];
// const letras = ["a", "C", "e"];

// // const array = numeros.concat(letras);
// const array = [...numeros, ...letras];
// //            1, 2, 3 , "a", "C", "e"

// console.log(array);

// ---

// const antiguoProducto = {
//   id: 1,
//   nombre: "Producto 1",
//   precio: 100,
// };

// const nuevoProducto = {
//   precio: 120,
//   descripcion: "Un producto...",
// };

// const producto = { ...antiguoProducto, ...nuevoProducto };

// console.log(producto);

// ---

// const user = {
//   nombre: "Juan",
// };

// const usuario = { ...user };

// usuario.nombre = "Maria";

// console.log(user, usuario);

// ---

const numeros = [1, 2, 3];

const nums = [...numeros];

nums.push(4);

console.log(numeros, nums);
