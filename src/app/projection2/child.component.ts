import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'child',
 styles: ['.wrapper {background: lightgreen;}'],
  template: `
    <div class="wrapper">
     <h2>Komponent potomny</h2>
      <ng-content select=".header" ></ng-content><p>
      <div>Ta zawartość jest zdefiniowana w potomku</div><p>
      <ng-content select=".footer"></ng-content>
    </div>
  `
})
export class ChildComponent {}
