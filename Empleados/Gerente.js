import { Empleado } from './Empleado.js';

export class Gerente extends Empleado {
  // Atributos

  // Constructor
  constructor(nombre, dni, salario) {
    super(nombre, dni, salario);
  }

  verBonificacion() {
    const bono = 5;
    return super._verBonificacion(bono);
  }
}
