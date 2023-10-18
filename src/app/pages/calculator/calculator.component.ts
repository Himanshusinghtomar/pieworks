import { Component } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  constructor(){}
  toShow= '0'
  currentValue=''

  writeToInput(value:string)
  {

    this.currentValue = this.currentValue + value
    this.toShow = this.currentValue

  }

  equals(){
    this.toShow = eval(this.currentValue)
    this.currentValue = this.toShow
  }
  clear()
  {
    this.toShow = '0';
    this.currentValue = '';
  }
  back()
  {
    this.currentValue = this.currentValue.slice(0,-1);
    
    this.toShow = this.currentValue
    if(this.toShow == ''){this.toShow= '0'}
  }

  clacValue(solve:any)
  {
    if(solve.charAt(0) == '0')
    {
      solve.slice(1,)
    }
      this.toShow = eval(solve)
  }

}
