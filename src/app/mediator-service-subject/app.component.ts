import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="main">
              <h2>Komponent aplikacji</h2>

              <search></search>  <b><-- Komponent wyszukiwania</b>
              <p>

              <a [routerLink]="['/']">eBay</a>
              <a [routerLink]="['/amazon']">Amazon</a>
              <router-outlet></router-outlet>
              </div>`,
  styles: ['.main {background: yellow}']
})

export class AppComponent{
}
