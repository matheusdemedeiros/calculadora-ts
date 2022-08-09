export class Calculadora {
    constructor(calculo) {
        this.primeiroValor = calculo.primeiroValor;
        this.segundoValor = calculo.segundoValor;
        this.operacao = calculo.operador;
    }
    calcular() {
        let resultado = 0;
        if (this.operacao === "/" && this.segundoValor === 0)
            return 0;
        switch (this.operacao) {
            case "+":
                resultado = this.primeiroValor + this.segundoValor;
                break;
            case "-":
                resultado = this.primeiroValor - this.segundoValor;
                break;
            case "*":
                resultado = this.primeiroValor * this.segundoValor;
                break;
            case "/":
                resultado = this.primeiroValor / this.segundoValor;
                break;
        }
        return resultado;
    }
}
