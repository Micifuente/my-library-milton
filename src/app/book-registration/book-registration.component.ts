import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.css']
})
export class BookRegistrationComponent {
    title="Registro de Libros"
    @Output() createBookEvent= new EventEmitter<Book>
    inputName: string=""
    inputAuthor: string=""
    inputGenre: string=""
    inputYear: number=0
    inputDescription: string=""

    //creamos funcion que ejecute este evento anterior
    addBook(){
      const newBook= new Book(this.inputName,
                              this.inputAuthor,
                              this.inputGenre,
                              this.inputYear,
                              this.inputDescription)
      this.createBookEvent.emit(newBook)
    }
}
