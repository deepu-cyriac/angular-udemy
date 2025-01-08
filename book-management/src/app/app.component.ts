import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Test01Component } from './test01/test01.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test01Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'book-management';
}
