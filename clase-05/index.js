// const cowsay = require("cowsay");
// const { say } = require("cowsay");
// import { say } from "cowsay";
// import cowsay from "cowsay";

// console.log(
//   cowsay.say({
//     text: "I'm a moooodule",
//     e: "oO",
//     T: "U ",
//   })
// );

// ---

// Solo funciona en CommonJS
// console.log(__dirname);

// ---

// Esto es para obtener el __dirname, se puede pasar a un modulo
// import path, { dirname } from "node:path";
// import { fileURLToPath } from "node:url";

// // console.log(import.meta.url);

// const __filename = fileURLToPath(import.meta.url);
// // console.log(__filename);
// const __dirname = dirname(__filename);
// // console.log(__dirname);

// const pathProducts = path.join(__dirname, "data", "products.json");
// console.log("path:", pathProducts);

// Como leer un archivo con callbacks
// import fs from "fs";

// fs.readFile(pathProducts, "utf8", (err, data) => {
//   if (err) {
//     console.error("Error al leer el archivo:", err);
//     return;
//   }
//   console.log("Contenido del archivo", data);
// });

// ---

// Como leer un archivo con promesas
// import { open } from "node:fs/promises";

// const file = await open(pathProducts);

// for await (const line of file.readLines()) {
//   console.log(line);
// }

// ---

// Esto sirve para obtener los argumentos de la linea de comandos
// import { argv } from "node:process";

// console.log(argv);

// print process.argv
// argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

// if (argv.includes("mas")) {
//   console.log("Mas");
// }

// ---

// Como importar un modulo interno
import { saludar } from "./module.js";

console.log(saludar("Juan"));

// ---

// const { saludar } = require("./module.js");

// console.log(saludar("Maria"));
