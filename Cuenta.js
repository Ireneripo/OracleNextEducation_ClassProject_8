export class Cuenta {
  // Atributos

  #cliente;
  #saldo;

  // Constructor
  constructor(cliente, numero, agencia, saldo) {
    this.numero = numero;
    this.agencia = agencia;
    this.#cliente = cliente;
    this.#saldo = saldo;
  }

  // Setters
  set cliente(valor) {
    if (valor instanceof Cliente) {
      this.#cliente = valor;
    }
  }

  // Getters
  get cliente() {
    return this.#cliente;
  }

  // Métodos
  depositoEnCuenta(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    }
    return this.#saldo;
  }

  retirarDeCuenta(valor) {
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
    }
    return this.#saldo;
  }

  verSaldo() {
    return this.#saldo;
  }

  transferirParaCuenta(valor, cuentaDestino) {
    this.retirarDeCuenta(valor);
    cuentaDestino.depositoEnCuenta(valor);
  }
}
