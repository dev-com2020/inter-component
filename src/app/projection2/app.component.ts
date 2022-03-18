import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  styles: ['.wrapper {background: deeppink;}'],
  template: `
    <div class="wrapper">
     <h2>Komponent nadrzędny</h2>
      <div>Ten element div jest zdefiniowany w szablonie komponentu nadrzędnego</div>
      <child>
        <div class="header" ><i>Potomek ma ten nagłówek z komponentu nadrzędnego {{todaysDate}}</i></div>
        <div class="footer"><i>Potomek ma tę stopkę z komponentu nadrzędnego</i></div>
      </child>
    </div>
  `
})
export class AppComponent {
  todaysDate = new Date().toLocaleDateString();
}
