const product = { title: "Updated Product", price: 559.99 };

const response = await fetch("https://fakestoreapi.com/products/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(product),
});
const data = await response.json();

console.log("PUT", data);

const response2 = await fetch("https://fakestoreapi.com/products/1");
const data2 = await response2.json();

console.log("GET", data2);
