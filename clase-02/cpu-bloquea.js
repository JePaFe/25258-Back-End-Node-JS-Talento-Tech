function tareaPesada(ms = 1500) {
  const fin = Date.now() + ms;
  while (Date.now() < fin) {} // simula CPU intensiva
}

console.time("pesado");
tareaPesada(1500);
console.timeEnd("pesado");
console.log("Listo");
