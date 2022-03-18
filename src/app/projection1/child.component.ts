import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'child',
 styles: ['.wrapper {background: lightgreen;}'],
  template: `
    <div class="wrapper">
     <h2>Komponent potomny</h2>
      <div>Ta zawartość jest zdefiniowana w potomku</div><p>
      <ng-content></ng-content>
    </div>
  `,
  encapsulation:ViewEncapsulation.Native
})
export class ChildComponent {}
