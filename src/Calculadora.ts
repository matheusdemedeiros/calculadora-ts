import { Calculo } from "./Calculo.type.js";
export class Calculadora {
  historicoOperacoes: string[];

  constructor() {
    this.historicoOperacoes = [];
  }

  calcular(calculo: Calculo): number {
    let resultado = 0;

    if (calculo.operador === "/" && calculo.segundoValor === 0) return 0;

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

    const operacao: string = 
    `${calculo.primeiroValor} ${calculo.operador} ${calculo.segundoValor} = ${resultado}`;

    this.historicoOperacoes.push(operacao);

    return resultado;
  }
}
