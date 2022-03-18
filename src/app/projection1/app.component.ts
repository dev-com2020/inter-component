import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  styles: ['.wrapper {background: deeppink;}'],
  template: `
    <div class="wrapper">
     <h2>Komponent nadrzędny</h2>
      <div>Ten element div jest zdefiniowany w szablonie komponentu nadrzędnego</div>
      <child>
        <div ><i>Potomek otrzymał tę linię od komponentu nadrzędnego </i></div>
      </child>
    </div>
  `,
  encapsulation:ViewEncapsulation.Native
})
export class AppComponent {
}
