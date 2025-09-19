class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  saludar() {
    console.log(`Mi correo es: ${this.email}`);
  }
}

class Admin extends User {
  constructor(email, password, codigo) {
    super(email, password);
    this.codigo = codigo;
  }
}

const user = new User("user@x.com", 1234);
const admin = new Admin("admin@x.com", 45353, "ABC34");

console.log(user, admin, admin instanceof User);
admin.saludar();
