class Cliente {
  nombreCliente;
  dniCliente;
  numeroCuenta;
  saldo;
}

const cliente1 = new Cliente();

cliente1.nombreCliente = 'José';
cliente1.dniCliente = 278439271;
cliente1.numeroCuenta = 8173293;
cliente1.saldo = 2000;

const cliente2 = new Cliente();

cliente2.nombreCliente = 'Leonardo';
cliente2.dniCliente = 28564872;
cliente2.numeroCuenta = 4002341334;
cliente2.saldo = 1000;

console.log(cliente1);
console.log(cliente2);
