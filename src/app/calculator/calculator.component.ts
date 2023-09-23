import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent {
  title = 'calculator';
  calcValue = 0;
  calcNumber = '0';
  funcT = 'NoFunction';
  firstNumber = 0;
  secondNumber = 0;

  onClickValue(val: string, type: string) {
    if (type === 'number') {
      this.onNumberClick(val);
    } else if (type === 'function') {
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string) {
    if (this.calcNumber === '0' || this.funcT === '=') {
      this.calcNumber = val;
    } else {
      this.calcNumber += val;
    }
    this.calcValue = parseFloat(this.calcNumber);
  }

  onFunctionClick(val: string) {
    if (val === 'C') {
      this.clearAll();
    } else if (this.funcT === 'NoFunction') {
      this.firstNumber = this.calcValue;
      this.calcValue = 0;
      this.calcNumber = '0';
      this.funcT = val;
    } else if (this.funcT !== 'NoFunction') {
      this.secondNumber = this.calcValue;
      this.valueCalculate();
      this.funcT = val === '=' ? 'NoFunction' : val;
    }
  }

  valueCalculate() {
    switch (this.funcT) {
      case '+':
        this.calcValue = this.firstNumber + this.secondNumber;
        break;
      case '-':
        this.calcValue = this.firstNumber - this.secondNumber;
        break;
      case '*':
        this.calcValue = this.firstNumber * this.secondNumber;
        break;
      case '/':
        this.calcValue = this.firstNumber / this.secondNumber;
        break;
      case '%':
        this.calcValue = this.firstNumber % this.secondNumber;
        break;
    }
    this.firstNumber = this.calcValue;
    this.secondNumber = 0;
    this.calcNumber = '0';
  }

  clearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calcValue = 0;
    this.funcT = 'NoFunction';
    this.calcNumber = '0';
  }
}
