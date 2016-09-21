import { Component } from '@angular/core';

@Component({
  selector: 'once-upon-nothing-app',
  template: '<h1>Once Upon Nothing</h1><router-outlet></router-outlet>',
  styleUrls: ['styles/css/app.component.css']
})
export class AppComponent { 
  title = 'Once Upon Nothing';
}