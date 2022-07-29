export class Empleado {
  // Atributos
  #nombre;
  #dni;
  #salario;
  #clave;

  // Constructor
  constructor(nombre, dni, salario) {
    this.#nombre = nombre;
    this.#dni = dni;
    this.#salario = salario;
    this.#clave = '';
  }

  // Setter

  // Getter

  // Métodos

  asignarClave(clave) {
    this.#clave = clave;
  }

  autenticable(clave) {
    return clave == this.#clave;
  }

  verBonificacion() {
    return this.#salario;
  }
  _verBonificacion(bono) {
    return this.#salario + (this.#salario * bono) / 100;
  }
}
