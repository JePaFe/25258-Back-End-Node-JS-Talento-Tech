import { argv } from "process";

const [, , property, value] = argv;

console.log(property, value);

const products = [
  {
    name: "Camiseta básica",
    price: 1500,
    colors: ["rojo", "negro", "blanco"],
  },
  {
    name: "Zapatillas deportivas",
    price: 8500,
    colors: ["azul", "gris", "blanco"],
  },
  {
    name: "Mochila urbana",
    price: 4200,
    colors: ["negro", "verde militar", "marrón"],
  },
  {
    name: "Reloj digital",
    price: 3200,
    colors: ["plateado", "negro"],
  },
  {
    name: "Auriculares inalámbricos",
    price: 2800,
    colors: ["blanco", "negro", "azul marino"],
  },
];

// const product = products.find((item) => {
//   if (item[property].toLowerCase() == value.toLowerCase()) {
//     return true;
//   }

//   return false;
// });

// const product = products.find(
//   (item) => item[property].toLowerCase() == value.toLowerCase()
// );

// const product = products.find((item) =>
//   item[property].toLowerCase().includes(value.toLowerCase())
// );

const product = products.find((item) => {
  if (property == "name") {
    return item[property].toLowerCase().includes(value.toLowerCase());
  }

  if (property == "colors") {
    // return item[property].includes(value.toLowerCase());

    const color = item[property].find((el) => el.includes(value.toLowerCase()));

    return Boolean(color);
  }
});

console.log(product);
