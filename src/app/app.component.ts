import { Component } from '@angular/core';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-library';
   
  books: Book[]=[
    new Book('Dpn quijote', 'Cervantes',"novela",1800,""),
    new Book('100 años de soledad', 'garcia marques',"novela",1980,""),
    new Book('el señor de los anillos', 'tolkien',"Fantasia",1999,"")
  ]

  selectedBook: Book = this.books[0]

 createBook(newBook: Book){
  this.books.push(newBook)
 }

 setSelectedBook(selectedBook: Book){
   this.selectedBook=selectedBook
 }

}
