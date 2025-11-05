// fetch("http://localhost:3000/products")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const products = [];

const getProducts = async () => {
  try {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    products.push(...data);

    const productList = document.getElementById("product-list");
    products.forEach((product) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${product.name} - $${product.price}`;
      productList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

getProducts();

const productForm = document.getElementById("product-form");
productForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const productName = document.getElementById("product-name").value;
  const productPrice = document.getElementById("product-price").value;

  const newProduct = {
    name: productName,
    price: parseFloat(productPrice),
  };

  try {
    const response = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (response.ok) {
      const addedProduct = await response.json();
      products.push(addedProduct);
      const productList = document.getElementById("product-list");
      const listItem = document.createElement("li");
      listItem.textContent = `${addedProduct.name} - $${addedProduct.price}`;
      productList.appendChild(listItem);

      productForm.reset();
    } else {
      console.error("Error adding product:", response.statusText);
    }
  } catch (error) {
    console.error("Error adding product:", error);
  }
});
