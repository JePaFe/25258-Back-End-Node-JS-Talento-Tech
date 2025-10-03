// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() < 0.5) {
//       resolve("OK");
//     } else {
//       reject("Error");
//     }
//   }, 3000);
// });

// promesa
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// ---

// fetch("https://fakestoreapi.com/productos")
//   .then((res) => {
//     console.log(res);
//     if (res.status == 404) {
//       throw new Error("Not Found");
//     }
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// ---

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => console.log("Siempre se ejecuta"));
