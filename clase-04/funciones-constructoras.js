function User(name, age) {
  this.nombre = name;
  this.edad = age;
  this.admin = false;

  //   this.saludar = function () {
  //     console.log(`Soy ${this.nombre} mi edad es ${this.edad}`);
  //   };
}

User.prototype.saludar = function () {
  console.log(`Soy ${this.nombre} mi edad es ${this.edad}`);
};

const user1 = new User("Juan", 33);
const user2 = new User("Maria", 30);

const user3 = new User();
user3.nombre = "Un nombre";
delete user3.edad;
user3.email = "x@x.com";

console.log(user1, user2, user3);

// user2.saludar();
