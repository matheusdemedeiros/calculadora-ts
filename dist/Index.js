import { Calculadora } from "./Calculadora.js";
const txtPrimeiroValor = document.getElementById("txtPrimeiroValor");
const txtSegundoValor = document.getElementById("txtSegundoValor");
const selectOperacoes = document.getElementById("operacoes");
const divHistorico = document.getElementById("historico");
const calculadora = new Calculadora();
const btnCalcular = document.getElementById("btnCalcular");
const txtResultado = document.getElementById("txtResultado");
const btnMassaDados = document.getElementById("btnMassaDados");
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
function gerarValores(qtdValores) {
    let valores = [];
    for (let i = 0; i < qtdValores; i++) {
        valores.push(i);
    }
    return valores;
}
function realizaCalculosAutomaticos() {
    let valores = gerarValores(10);
    for (let i = 0; i < valores.length; i++) {
        preencherInputsComValores(valores[i]);
        btnCalcular.click();
    }
}
function preencherInputsComValores(valor) {
    txtPrimeiroValor.value = String(valor);
    txtSegundoValor.value = String(valor);
}
btnCalcular.addEventListener("click", calcular);
btnMassaDados.addEventListener("click", realizaCalculosAutomaticos);
