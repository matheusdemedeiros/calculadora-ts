export class Calculadora {
    constructor() {
        this.historicoOperacoes = [];
    }
    calcular(calculo) {
        let resultado = 0;
        if (calculo.operador === "/" && calculo.segundoValor === 0)
            return 0;
        switch (calculo.operador) {
            case "+":
                resultado = calculo.primeiroValor + calculo.segundoValor;
                break;
            case "-":
                resultado = calculo.primeiroValor - calculo.segundoValor;
                break;
            case "*":
                resultado = calculo.primeiroValor * calculo.segundoValor;
                break;
            case "/":
                resultado = calculo.primeiroValor / calculo.segundoValor;
                break;
        }
        const operacao = `${calculo.primeiroValor} ${calculo.operador} ${calculo.segundoValor} = ${resultado}`;
        this.historicoOperacoes.push(operacao);
        return resultado;
    }
}
