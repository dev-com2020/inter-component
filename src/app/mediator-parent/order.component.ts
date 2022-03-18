import {Component, Input} from '@angular/core';
import {Stock} from './istock';

@Component({
  selector: 'order-processor',
  template: `{{message}}`,
  styles:[`:host {background: cyan;}`]
})
export class OrderComponent {

  message = 'Kryteria wyszukiwania:';

  @Input() set stock(value: Stock ){
    if (value && value.bidPrice !== undefined) {
      this.message = `Złożono zlecenie na zakup 100 akcji
                          spółki ${value.stockSymbol}
                          po cenie \$${value.bidPrice.toFixed(2)}`;
    }
  }
}
