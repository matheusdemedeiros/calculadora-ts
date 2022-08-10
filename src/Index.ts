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
) as HTMLHeadingElement;

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
  divHistorico.style.display = "flex";
  calculadora.historicoOperacoes.forEach((operacao: string) => {
    const txtOperacao = document.createElement("h3") as HTMLHeadingElement;
    txtOperacao.className = "card-historico";
    txtOperacao.innerText = operacao;
    divHistorico.appendChild(txtOperacao);
  });
}

function limparHistoricoOperacoes() {
  while (divHistorico.firstChild) {
    divHistorico.removeChild(divHistorico.firstChild);
  }
}

btnCalcular.addEventListener("click", calcular);
