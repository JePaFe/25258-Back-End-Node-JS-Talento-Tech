// function taskAsync(callback) {
//   setTimeout(() => {
//     callback();
//   }, 1000);
// }

// function avisame() {
//   console.log("Fin");
// }

// console.log("11");
// taskAsync(avisame);
// console.log("13");

// ---

const fs = require("fs");

console.log("19");
fs.readFile("./data.txt", "utf8", (error, data) => {
  console.log(error);
  console.log(data);
});
console.log("24");
