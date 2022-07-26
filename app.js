// Importación de las clases
import { CuentaCorriente } from './CuentaCorriente.js';

const cuentaDeLeonardo = new CuentaCorriente();
// cuentaDeLeonardo.saldo = 0;

let saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual de la cuenta de Leonardo es ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(100);
console.log(`El saldo actual de la cuenta de Leonardo es ${saldo}`);

saldo = cuentaDeLeonardo.retirarDeCuenta(60);
console.log(`El saldo actual de la cuenta de Leonardo es ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(-10);
console.log(`El saldo actual de la cuenta de Leonardo es ${saldo}`);

// const cliente1 = new Cliente();

// cliente1.nombreCliente = 'José';
// cliente1.dniCliente = 278439271;
// cliente1.rutCliente = 3204092384;

// const cuentaCorriente1 = new CuentaCorriente();

// cuentaCorriente1.numero = 8173293;
// cuentaCorriente1.saldo = 2000;
// cuentaCorriente1.agencia = 'Paris';
// cuentaCorriente1.depositoEnCuenta(200);
// console.log(cuentaCorriente1.saldo);

// const cliente2 = new Cliente();

// cliente2.nombreCliente = 'Leonardo';
// cliente2.dniCliente = 28564872;
// cliente2.rutCliente = 43987543875;

// const cuentaCorriente2 = new CuentaCorriente();

// cuentaCorriente2.numero = 4002341334;
// cuentaCorriente2.saldo = 1000;
// cuentaCorriente2.agencia = 'Madrid';
// cuentaCorriente2.depositoEnCuenta(563);
// console.log(cuentaCorriente2.saldo);

// console.log('==========');

// console.log(cliente1);
// console.log(cliente2);

// console.log('==========');

// console.log(cuentaCorriente1);
// console.log(cuentaCorriente2);
