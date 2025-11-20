import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Mauricio", 20808517724);

const contaCorrenteMauricio = new ContaCorrente(cliente1, 1001);
contaCorrenteMauricio.depositar(500);

const contaCorrente2 = new ContaCorrente(cliente1, 1001);

console.log(ContaCorrente.numeroDeContas);
