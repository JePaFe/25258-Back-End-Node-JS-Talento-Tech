// const user = [1, "Juan", 33, "admin"];

// const [id, nombre, edad, rol] = user;
// const [, , edad, rol] = user;
// nombre = "Juan Pablo";

// console.log(nombre, user);
// console.log(user[1]);

// ---

const usuario = {
  id: 1,
  email: "x@x.com",
  password: "124sf34",
  saludar() {
    console.log("algo");
  },
};

let { email: correo, name = "Sin valor", id, saludar } = usuario;
// email = "algo";

console.log(correo, usuario);

saludar();
