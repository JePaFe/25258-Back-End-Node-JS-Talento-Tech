import { argv } from "process";

const [, , method, params] = argv;

// console.log(method);

if (method == "GET") {
  console.log("Usaste el metodo GET");

  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

if (method == "POST") {
  console.log(`Enviaste ${params} ...`);
}

if (method == "PUT") {
  console.log(`Modificaste el id: ${params}`);
}

if (method == "DELETE") {
  console.log(`Borraste el id: ${params}`);
}
