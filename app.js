// Importación de las clases
import { Cliente } from './Cliente.js';
import { CuentaAhorro } from './CuentaAhorro.js';
import { CuentaCorriente } from './CuentaCorriente.js';

const cliente = new Cliente('Leonardo', '4243985', '48204545');
const cliente2 = new Cliente('María', '8593042', '97249575');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');

const cuentaAhorroLeonardo = new CuentaAhorro(cliente, '9985', '001', 0);
console.log(cuentaDeLeonardo);

cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());

cuentaDeLeonardo.retirarDeCuenta(70);
console.log(cuentaDeLeonardo.verSaldo());

console.log(cuentaAhorroLeonardo);

cuentaAhorroLeonardo.depositoEnCuenta(200);
console.log(cuentaAhorroLeonardo.verSaldo());

cuentaAhorroLeonardo.retirarDeCuenta(120);
console.log(cuentaAhorroLeonardo.verSaldo());

// console.log('Cuenta de Leonardo', cuentaDeLeonardo);
// console.log(cuentaDeLeonardo.cliente);

// // cuentaDeLeonardo.saldo = 0;

// let saldo = cuentaDeLeonardo.verSaldo();
// console.log(`El saldo actual de la cuenta de Leonardo es ${saldo}`);

// saldo = cuentaDeLeonardo.depositoEnCuenta(150);
// console.log(`El saldo actual de la cuenta de Leonardo es ${saldo}`);

// console.log('Cuenta de María', cuentaDeMaria);
// console.log(cuentaDeMaria.cliente);

// cuentaDeLeonardo.transferirParaCuenta(80, cuentaDeMaria);
// let saldo2 = cuentaDeMaria.verSaldo();
// console.log(`El saldo actual de la cuenta de María es ${saldo2}`);

// saldo = cuentaDeLeonardo.verSaldo();
// console.log(`El saldo de la cuenta de Leonardo es ${saldo}`);

// console.log(CuentaCorriente.cantidadCuentas);
