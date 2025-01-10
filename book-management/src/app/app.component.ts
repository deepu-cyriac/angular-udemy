import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Test01Component } from './test01/test01.component';
import { BookComponent } from './book/book.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test01Component, BookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'book-management';
}
