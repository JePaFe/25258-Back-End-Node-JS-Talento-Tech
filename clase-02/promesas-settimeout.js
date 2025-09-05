console.log("A");

setTimeout(() => console.log("B (timeout 0)"), 0);

Promise.resolve().then(() => console.log("C (promesa)"));

console.log("D");
