import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div><h1>{{pageTitle}}</h1><p>I love her</p></div>`
})
export class AppComponent {
  pageTitle: string = 'AshBebe is mah bebe';
}