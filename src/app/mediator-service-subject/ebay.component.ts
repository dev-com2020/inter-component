import {Component} from '@angular/core';
import {StateService} from "./state.service";
import {Observable} from "rxjs";

@Component({
  selector: 'product',
  template: `
    <div class="ebay">
      <h2>Komponent eBay</h2>
      Kryteria wyszukiwania: {{searchFor$ | async}}
    </div>`,
  styles: ['.ebay {background: cyan}']
})
export class EbayComponent {

  searchFor$: Observable<string>;

  constructor(private state: StateService) {

      this.searchFor$ = state.getState();
  }
}
