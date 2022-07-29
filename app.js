// Importación de las clases
import { Cliente } from './Cliente.js';
// import { CuentaAhorro } from './Cuentas/CuentaAhorro.js';
// import { CuentaCorriente } from './Cuentas/CuentaCorriente.js';
// import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Director } from './Empleados/Director.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';

// const cliente = new Cliente('Leonardo', '4243985', '48204545');
// cliente.asignarClave('01111');
// console.log(SistemaAutenticacion.login(cliente, '1111'));

// const cliente2 = new Cliente('María', '8593042', '97249575');

const empleado = new Empleado('Juan Pérez', '3448245', 10000);
empleado.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado, '12345'));

const gerente = new Gerente('Pedro Rivas', '93285734', 12000);
gerente.asignarClave('98765');
console.log(SistemaAutenticacion.login(gerente, '98765'));

// const director = new Director('Elena Moreno', '42539485', 15000);
// director.asignarClave('456789');
// console.log(SistemaAutenticacion.login(director, '456789'));

const cliente = new Cliente('Leonardo', '4243985', '48204545');
cliente.asignarClave('01111');
console.log(SistemaAutenticacion.login(cliente, '01111'));

// const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
// const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');

// const cuentaAhorroLeonardo = new CuentaAhorro(cliente, '9985', '001', 0);
// console.log(cuentaAhorroLeonardo);

// const cuentaNominaLeonardo = new CuentaNomina(cliente, '9854', '001', 100);
// cuentaNominaLeonardo.depositoEnCuenta(150);
// console.log(cuentaNominaLeonardo.verSaldo());
// cuentaNominaLeonardo.retirarDeCuenta(50);
// console.log(cuentaNominaLeonardo.verSaldo());

// const cuentaSimple = new Cuenta(cliente, '94852', '003', '300');
// console.log(cuentaSimple);

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
