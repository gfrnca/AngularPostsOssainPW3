import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- Header implement -->
    <app-header></app-header>

    <!-- Routes implement -->
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ossain-posts';
}
