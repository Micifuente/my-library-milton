import { Component,Input,Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  title="Lista de libros"
   @Input() books: Book[]=[]
   @Output() selectBookEvent =new EventEmitter<Book>()

   selectBook(book: Book){
    this.selectBookEvent.emit(book)
   }
}
