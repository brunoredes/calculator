import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+'
  static readonly SUBTRACAO: string = '-'
  static readonly DIVISAO: string = '/'
  static readonly MULTIPLICACAO: string = '*'

  constructor() { }

  calcular(n1: number, n2: number, operacao: string): number {
    let res: number;

    switch (operacao) {
      case CalculadoraService.SOMA:
        res = n1 + n2;
        break;
      case CalculadoraService.SUBTRACAO:
        res = n1 - n2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        res = n1 * n2;
        break;
      case CalculadoraService.DIVISAO:
        res = n1 / n2;
        break;
      default:
        res = 0;
    }
    return res;
  }
}
