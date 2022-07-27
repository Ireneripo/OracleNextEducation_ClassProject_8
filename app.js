// Importación de las clases
import { Cliente } from './Cliente.js';
import { CuentaCorriente } from './CuentaCorriente.js';

const cliente = new Cliente();
cliente.nombreCliente = 'Leonardo';
cliente.dniCliente = '4243985';
cliente.rutCliente = '48204545';

const cuentaDeLeonardo = new CuentaCorriente();
cuentaDeLeonardo.numero = '1';
cuentaDeLeonardo.agencia = '001';
cuentaDeLeonardo.cliente = cliente;

console.log('Cuenta de Leonardo', cuentaDeLeonardo);
console.log(cuentaDeLeonardo.cliente);

// cuentaDeLeonardo.saldo = 0;

let saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual de la cuenta de Leonardo es ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log(`El saldo actual de la cuenta de Leonardo es ${saldo}`);

const cliente2 = new Cliente();
cliente2.nombreCliente = 'María';
cliente2.dniCliente = '8593042';
cliente2.rutCliente = '97249575';

const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero = '2';
cuentaDeMaria.agencia = '002';
cuentaDeMaria.cliente = cliente2;
console.log('Cuenta de María', cuentaDeMaria);
console.log(cuentaDeMaria.cliente);

cuentaDeMaria.cliente = 0;
console.log('Cuenta de María', cuentaDeMaria);
console.log(cuentaDeMaria.cliente);

cuentaDeLeonardo.transferirParaCuenta(80, cuentaDeMaria);
let saldo2 = cuentaDeMaria.verSaldo();
console.log(`El saldo actual de la cuenta de María es ${saldo2}`);

saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo de la cuenta de Leonardo es ${saldo}`);

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
