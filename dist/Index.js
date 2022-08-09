import { Calculadora } from "./Calculadora.js";
const txtPrimeiroValor = document.getElementById("txtPrimeiroValor");
const txtSegundoValor = document.getElementById("txtSegundoValor");
const selectOperacoes = document.getElementById("operacoes");
const btnCalcular = document.getElementById("btnCalcular");
const txtResultado = document.getElementById("txtResultado");
function calcular() {
    const calculo = {
        primeiroValor: Number(txtPrimeiroValor.value),
        segundoValor: Number(txtSegundoValor.value),
        operador: selectOperacoes.options[selectOperacoes.selectedIndex].value,
    };
    const calculadora = new Calculadora(calculo);
    const resultado = calculadora.calcular();
    txtResultado.innerText = "O resultado é: " + resultado;
}
btnCalcular.addEventListener("click", calcular);
