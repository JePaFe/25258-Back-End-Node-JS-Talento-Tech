class User {
  constructor(name, age) {
    this.id = null;
    this.nombre = name;
    this.edad = age;
    this.admin = false;
  }

  saludar() {
    console.log(`Soy ${this.nombre} mi edad es ${this.edad}`);
  }
}

const user1 = new User("Juan", 33);

// user1.id = 3;
console.log(user1);
// user1.saludar();

// ---

// const user = {
//   id: undefined,
//   name: "Juan",
//   edad: 33,
//   name: "Maria",
// };

// console.log(user);
