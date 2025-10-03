// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// ---

const product = { title: "New Product", price: 29.99 };

fetch("https://fakestoreapi.com/products", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(product),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
