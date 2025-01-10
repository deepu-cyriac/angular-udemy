import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {}

// Inside book.component.ts, create methods to:

// 1) Add a book to local storage.

// 2) Retrieve all books from local storage

// 3) Delete a book from local storage.

// Hint: You can use JSON.stringify() and JSON.parse() to store and retrieve objects in local storage.
// 1. Below the form in book.component.html, create a table or list to display the books retrieved from local storage.

// 2. Use the *ngFor directive to iterate over the books and display them.

// 3. Next to each book, add a delete button to remove the book.
