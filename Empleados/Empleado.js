export class Empleado {
  // Atributos
  #nombre;
  #dni;
  #salario;

  // Constructor
  constructor(nombre, dni, salario) {
    this.#nombre = nombre;
    this.#dni = dni;
    this.#salario = salario;
  }

  // Setter

  // Getter

  // Métodos
  verBonificacion() {
    return this.#salario;
  }
  _verBonificacion(bono) {
    return this.#salario + (this.#salario * bono) / 100;
  }
}
