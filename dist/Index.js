import { Calculadora } from "./Calculadora.js";
const txtPrimeiroValor = document.getElementById("txtPrimeiroValor");
const txtSegundoValor = document.getElementById("txtSegundoValor");
const selectOperacoes = document.getElementById("operacoes");
const divHistorico = document.getElementById("historico");
const calculadora = new Calculadora();
const btnCalcular = document.getElementById("btnCalcular");
const txtResultado = document.getElementById("txtResultado");
function calcular() {
    const calculo = {
        primeiroValor: Number(txtPrimeiroValor.value),
        segundoValor: Number(txtSegundoValor.value),
        operador: selectOperacoes.options[selectOperacoes.selectedIndex].value,
    };
    const resultado = calculadora.calcular(calculo);
    if (calculadora.historicoOperacoes.length === 0) {
        divHistorico.style.display = "none";
    }
    else {
        limparHistoricoOperacoes();
        exibirhistorico();
    }
    txtResultado.innerText = "O resultado é: " + resultado;
}
function exibirhistorico() {
    divHistorico.classList.remove("d-none");
    calculadora.historicoOperacoes.forEach((operacao) => {
        const txtOperacao = document.createElement("h3");
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
btnCalcular.addEventListener("click", calcular);
