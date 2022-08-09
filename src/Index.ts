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

  const calculadora = new Calculadora(calculo);

  const resultado = calculadora.calcular();

  txtResultado.innerText = "O resultado é: " + resultado;
}

btnCalcular.addEventListener("click", calcular);
