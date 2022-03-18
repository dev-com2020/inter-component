import {  Component, Input }  from '@angular/core';

@Component({
  selector: 'order-processor',
  template: `
    <span *ngIf="!!stockSymbol">Kupujesz akcje spółki {{stockSymbol}} w liczbie: {{quantity}}</span>
  `,
  styles:[`:host {background: cyan;}`]
})
export class OrderProcessorComponent {

  @Input() quantity: number;

  @Input() stockSymbol: string;
}
