// D:\DeV\JavaScriptOrientacaoObjeto  (Diretório, workspace)
import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente("Claudio",1010101011);
const cliente2 = new Cliente("Jose", 1010101010);
const contaCorrenteClaudio = new ContaCorrente(1010101011, cliente1);
contaCorrenteClaudio.depositar (500);
const conta2 = new ContaCorrente(1010101010, cliente2);

let valor=2000;
contaCorrenteClaudio.transferir(valor,conta2);

console.log("Número de contas abertas: ", ContaCorrente.numeroDeContas);
console.log(cliente1);
console.log(cliente2);