//Definición de clases

class Cliente {
  nombreCliente;
  dniCliente;
  rutCliente;
}

class CuentaCorriente {
  numero;
  #saldo;
  agencia;

  constructor() {
    this.numero = '';
    this.#saldo = 0;
    this.agencia = '';
  }

  depositoEnCuenta(valor) {
    if (valor < 0) {
      this.#saldo += valor;
    }
  }

  retirarDeCuenta(valor) {
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
    }
  }
}

const cuentaDeLeonardo = new CuentaCorriente();
// cuentaDeLeonardo.#saldo = 0;
cuentaDeLeonardo.depositoEnCuenta(100);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.retirarDeCuenta(50);
console.log(cuentaDeLeonardo);

const cliente1 = new Cliente();

cliente1.nombreCliente = 'José';
cliente1.dniCliente = 278439271;
cliente1.rutCliente = 3204092384;

const cuentaCorriente1 = new CuentaCorriente();

cuentaCorriente1.numero = 8173293;
cuentaCorriente1.saldo = 2000;
cuentaCorriente1.agencia = 'Paris';
cuentaCorriente1.depositoEnCuenta(200);
console.log(cuentaCorriente1.saldo);

const cliente2 = new Cliente();

cliente2.nombreCliente = 'Leonardo';
cliente2.dniCliente = 28564872;
cliente2.rutCliente = 43987543875;

const cuentaCorriente2 = new CuentaCorriente();

cuentaCorriente2.numero = 4002341334;
cuentaCorriente2.saldo = 1000;
cuentaCorriente2.agencia = 'Madrid';
cuentaCorriente2.depositoEnCuenta(563);
console.log(cuentaCorriente2.saldo);

console.log('==========');

console.log(cliente1);
console.log(cliente2);

console.log('==========');

console.log(cuentaCorriente1);
console.log(cuentaCorriente2);
