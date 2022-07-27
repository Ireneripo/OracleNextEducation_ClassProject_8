// Importación de las clases
import { Cliente } from './Cliente.js';
import { CuentaCorriente } from './CuentaCorriente.js';

const cliente = new Cliente('Leonardo', '4243985', '48204545');
const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
console.log('Cuenta de Leonardo', cuentaDeLeonardo);
console.log(cuentaDeLeonardo.cliente);

// cuentaDeLeonardo.saldo = 0;

let saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual de la cuenta de Leonardo es ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log(`El saldo actual de la cuenta de Leonardo es ${saldo}`);

const cliente2 = new Cliente('María', '8593042', '97249575');
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');
console.log('Cuenta de María', cuentaDeMaria);
console.log(cuentaDeMaria.cliente);

cuentaDeLeonardo.transferirParaCuenta(80, cuentaDeMaria);
let saldo2 = cuentaDeMaria.verSaldo();
console.log(`El saldo actual de la cuenta de María es ${saldo2}`);

saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo de la cuenta de Leonardo es ${saldo}`);
