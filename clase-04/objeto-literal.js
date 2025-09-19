// const user = {
//   name: "Juan",
//   edad: 33,
//   direccion: {
//     calle: "Calle falsa",
//     mumero: 123,
//   },
//   rol: ["user", "editor"],
// };

// // console.log(typeof user);
// // console.log(JSON.stringify(user));
// // console.log(Object.keys(user).length);

// user.email = "x@x.com";
// user.edad = 34;
// delete user.name;

// key = "email";

// console.log(user[key], user.email);

// ---

const usuario = {
  name: "Juan",
  edad: 33,
  saludar() {
    console.log(`Soy ${this.name} mi edad es ${this.edad}`);
  },
};

// usuario.saludar();
// console.log(JSON.stringify(usuario));
