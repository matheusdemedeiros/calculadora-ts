import { Calculadora } from "./Calculadora.js";
import { Calculo } from "./Calculo.type.js";

const txtPrimeiroValor = document.getElementById(
  "txtPrimeiroValor"
) as HTMLInputElement;
const txtSegundoValor = document.getElementById(
  "txtSegundoValor"
) as HTMLInputElement;

const selectOperacoes = document.getElementById(
  "operacoes"
) as HTMLSelectElement;

const divHistorico = document.getElementById("historico") as HTMLDivElement;

const calculadora = new Calculadora();

const btnCalcular = document.getElementById("btnCalcular") as HTMLButtonElement;

const txtResultado = document.getElementById(
  "txtResultado"
) as HTMLParagraphElement;

const btnMassaDados = document.getElementById(
  "btnMassaDados"
) as HTMLButtonElement;

function calcular(): void {
  const calculo: Calculo = {
    primeiroValor: Number(txtPrimeiroValor.value),
    segundoValor: Number(txtSegundoValor.value),
    operador: selectOperacoes.options[selectOperacoes.selectedIndex].value,
  };

  const resultado = calculadora.calcular(calculo);

  if (calculadora.historicoOperacoes.length === 0) {
    divHistorico.style.display = "none";
  } else {
    limparHistoricoOperacoes();
    exibirhistorico();
  }

  txtResultado.innerText = "O resultado é: " + resultado;
}

function exibirhistorico() {
  divHistorico.classList.remove("d-none");
  calculadora.historicoOperacoes.forEach((operacao: string) => {
    const txtOperacao = document.createElement("h3") as HTMLHeadingElement;
    txtOperacao.className = "alert alert-primary";
    txtOperacao.innerText = operacao;
    divHistorico.appendChild(txtOperacao);
  });
}

function limparHistoricoOperacoes() {
  while (divHistorico.firstChild) {
    divHistorico.removeChild(divHistorico.firstChild);
  }
}

function gerarValores(qtdValores: number): number[] {
  let valores: number[] = [];
  for (let i = 0; i < qtdValores; i++) {
    valores.push(i);
  }
  return valores;
}


function realizaCalculosAutomaticos():void {
  let valores = gerarValores(10);
  for (let i = 0; i < valores.length; i++) {
    preencherInputsComValores(valores[i]);
    btnCalcular.click();
  }
}

function preencherInputsComValores(valor: number):void {
    txtPrimeiroValor.value = String(valor);
    txtSegundoValor.value = String(valor);
}


btnCalcular.addEventListener("click", calcular);
btnMassaDados.addEventListener("click", realizaCalculosAutomaticos);
