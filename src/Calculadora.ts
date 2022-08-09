import { Calculo } from "./Calculo.type.js";
export class Calculadora {
  primeiroValor: number;
  segundoValor: number;
  operacao: string;

  constructor(calculo: Calculo) {
    this.primeiroValor = calculo.primeiroValor;
    this.segundoValor = calculo.segundoValor;
    this.operacao = calculo.operador;
  }

  calcular(): number {
    let resultado = 0;

    if (this.operacao === "/" && this.segundoValor === 0) return 0;

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
